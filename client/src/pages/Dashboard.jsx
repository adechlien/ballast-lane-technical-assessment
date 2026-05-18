import { useEffect, useMemo, useState } from "react";
import BranchForm from "../components/branches/BranchForm";
import DashboardBranchCard from "../components/branches/DashboardBranchCard";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import ErrorMessage from "../components/ui/ErrorMessage";
import LoadingState from "../components/ui/LoadingState";
import { useAuth } from "../context/AuthContext";
import {
  createBranch,
  deleteBranch,
  getMyBranches,
  publishBranch,
  unpublishBranch,
} from "../services/branchService";
import {
  createSubbranch,
  deleteSubbranch,
  updateSubbranch,
} from "../services/subbranchService";
import {
  createColorToken,
  deleteColorToken,
  updateColorToken,
} from "../services/colorTokenService";

export default function Dashboard() {
  const { token, user } = useAuth();

  const [branches, setBranches] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState("loading");
  const [actionStatus, setActionStatus] = useState("idle");
  const [error, setError] = useState("");

  async function loadBranches() {
    try {
      setStatus("loading");
      setError("");

      const data = await getMyBranches(token);

      setBranches(data.branches || []);
      setStatus("success");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  useEffect(() => {
    if (token) {
      loadBranches();
    }
  }, [token]);

  const stats = useMemo(() => {
    const subbranchCount = branches.reduce(
      (total, branch) => total + (branch.subbranches?.length || 0),
      0
    );

    const tokenCount = branches.reduce((branchTotal, branch) => {
      return (
        branchTotal +
        (branch.subbranches || []).reduce(
          (subbranchTotal, subbranch) =>
            subbranchTotal + (subbranch.colorTokens?.length || 0),
          0
        )
      );
    }, 0);

    const publicCount = branches.filter((branch) => branch.isPublic).length;

    return [
      { label: "Branches", value: branches.length },
      { label: "Subbranches", value: subbranchCount },
      { label: "Color Tokens", value: tokenCount },
      { label: "Public", value: publicCount },
    ];
  }, [branches]);

  async function handleCreateBranch(payload) {
    try {
      setActionStatus("loading");
      setError("");

      const data = await createBranch(token, payload);

      setBranches((current) => [data.branch, ...current]);
      setShowForm(false);
      setActionStatus("idle");
    } catch (err) {
      setError(err.message);
      setActionStatus("idle");
    }
  }

  async function handlePublishBranch(branchId) {
    try {
      setActionStatus("loading");
      setError("");

      const data = await publishBranch(token, branchId);

      setBranches((current) =>
        current.map((branch) =>
          branch.id === branchId ? data.branch : branch
        )
      );

      setActionStatus("idle");
    } catch (err) {
      setError(err.message);
      setActionStatus("idle");
    }
  }

  async function handleUnpublishBranch(branchId) {
    try {
      setActionStatus("loading");
      setError("");

      const data = await unpublishBranch(token, branchId);

      setBranches((current) =>
        current.map((branch) =>
          branch.id === branchId ? data.branch : branch
        )
      );

      setActionStatus("idle");
    } catch (err) {
      setError(err.message);
      setActionStatus("idle");
    }
  }

  async function handleDeleteBranch(branchId) {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this Branch?"
    );

    if (!shouldDelete) {
      return;
    }

    try {
      setActionStatus("loading");
      setError("");

      await deleteBranch(token, branchId);

      setBranches((current) =>
        current.filter((branch) => branch.id !== branchId)
      );

      setActionStatus("idle");
    } catch (err) {
      setError(err.message);
      setActionStatus("idle");
    }
  }

  async function handleCreateSubbranch(branchId, payload) {
    try {
      setActionStatus("loading");
      setError("");

      const data = await createSubbranch(token, branchId, payload);

      setBranches((current) =>
        current.map((branch) =>
          branch.id === branchId
            ? {
                ...branch,
                subbranches: [...(branch.subbranches || []), data.subbranch],
              }
            : branch
        )
      );

      setActionStatus("idle");
    } catch (err) {
      setError(err.message);
      setActionStatus("idle");
    }
  }

  async function handleUpdateSubbranch(branchId, subbranchId, payload) {
    try {
      setActionStatus("loading");
      setError("");

      const data = await updateSubbranch(token, branchId, subbranchId, payload);

      setBranches((current) =>
        current.map((branch) =>
          branch.id === branchId
            ? {
                ...branch,
                subbranches: (branch.subbranches || []).map((subbranch) =>
                  subbranch.id === subbranchId ? data.subbranch : subbranch
                ),
              }
            : branch
        )
      );

      setActionStatus("idle");
    } catch (err) {
      setError(err.message);
      setActionStatus("idle");
    }
  }

  async function handleDeleteSubbranch(branchId, subbranchId) {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this Subbranch?"
    );

    if (!shouldDelete) {
      return;
    }

    try {
      setActionStatus("loading");
      setError("");

      await deleteSubbranch(token, branchId, subbranchId);

      setBranches((current) =>
        current.map((branch) =>
          branch.id === branchId
            ? {
                ...branch,
                subbranches: (branch.subbranches || []).filter(
                  (subbranch) => subbranch.id !== subbranchId
                ),
              }
            : branch
        )
      );

      setActionStatus("idle");
    } catch (err) {
      setError(err.message);
      setActionStatus("idle");
    }
  }

  async function handleCreateColorToken(subbranchId, payload) {
    try {
      setActionStatus("loading");
      setError("");

      const data = await createColorToken(token, subbranchId, payload);

      setBranches((current) =>
        current.map((branch) => ({
          ...branch,
          subbranches: (branch.subbranches || []).map((subbranch) =>
            subbranch.id === subbranchId
              ? {
                  ...subbranch,
                  colorTokens: [
                    ...(subbranch.colorTokens || []),
                    data.colorToken,
                  ],
                }
              : subbranch
          ),
        }))
      );

      setActionStatus("idle");
    } catch (err) {
      setError(err.message);
      setActionStatus("idle");
    }
  }

  async function handleUpdateColorToken(subbranchId, tokenId, payload) {
    try {
      setActionStatus("loading");
      setError("");

      const data = await updateColorToken(token, subbranchId, tokenId, payload);

      setBranches((current) =>
        current.map((branch) => ({
          ...branch,
          subbranches: (branch.subbranches || []).map((subbranch) =>
            subbranch.id === subbranchId
              ? {
                  ...subbranch,
                  colorTokens: (subbranch.colorTokens || []).map((colorToken) =>
                    colorToken.id === tokenId ? data.colorToken : colorToken
                  ),
                }
              : subbranch
          ),
        }))
      );

      setActionStatus("idle");
    } catch (err) {
      setError(err.message);
      setActionStatus("idle");
    }
  }

  async function handleDeleteColorToken(subbranchId, tokenId) {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this Color Token?"
    );

    if (!shouldDelete) {
      return;
    }

    try {
      setActionStatus("loading");
      setError("");

      await deleteColorToken(token, subbranchId, tokenId);

      setBranches((current) =>
        current.map((branch) => ({
          ...branch,
          subbranches: (branch.subbranches || []).map((subbranch) =>
            subbranch.id === subbranchId
              ? {
                  ...subbranch,
                  colorTokens: (subbranch.colorTokens || []).filter(
                    (colorToken) => colorToken.id !== tokenId
                  ),
                }
              : subbranch
          ),
        }))
      );

      setActionStatus("idle");
    } catch (err) {
      setError(err.message);
      setActionStatus("idle");
    }
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-adech-text-soft">
            Dashboard · {user?.name}
          </p>

          <h1 className="mt-2 text-3xl font-semibold text-adech-text">
            Your Branches
          </h1>

          <p className="mt-3 text-adech-text-muted">
            Manage your private and public Branches using the structure of Adech
            Themes.
          </p>
        </div>

        <Button onClick={() => setShowForm((current) => !current)}>
          {showForm ? "Close form" : "New Branch"}
        </Button>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-5">
            <p className="text-sm text-adech-text-muted">{stat.label}</p>
            <p className="mt-2 text-3xl font-semibold text-adech-text">
              {stat.value}
            </p>
          </Card>
        ))}
      </div>

      {error && (
        <div className="mb-6">
          <ErrorMessage message={error} />
        </div>
      )}

      {showForm && (
        <Card className="mb-6 p-6">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-adech-text">
              Create Branch
            </h2>
            <p className="mt-2 text-sm text-adech-text-muted">
              Start with a Branch. Later you will add Subbranches and Color
              Tokens inside it.
            </p>
          </div>

          <BranchForm
            onSubmit={handleCreateBranch}
            isSubmitting={actionStatus === "loading"}
          />
        </Card>
      )}

      {status === "loading" && (
        <LoadingState message="Loading your Branches..." />
      )}

      {status === "error" && !error && (
        <ErrorMessage message="Could not load your Branches." />
      )}

      {status === "success" && branches.length === 0 && (
        <Card className="p-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-lg font-semibold text-adech-text">
                No Branches yet
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-adech-text-muted">
                Create your first Branch, then add Subbranches and Color Tokens
                to shape a visual system.
              </p>
            </div>

            <Button variant="secondary" onClick={() => setShowForm(true)}>
              Create first Branch
            </Button>
          </div>
        </Card>
      )}

      {status === "success" && branches.length > 0 && (
        <div className="grid gap-4">
          {branches.map((branch) => (
            <DashboardBranchCard
              key={branch.id}
              branch={branch}
              isBusy={actionStatus === "loading"}
              onPublish={handlePublishBranch}
              onUnpublish={handleUnpublishBranch}
              onDelete={handleDeleteBranch}
              onCreateSubbranch={handleCreateSubbranch}
              onUpdateSubbranch={handleUpdateSubbranch}
              onDeleteSubbranch={handleDeleteSubbranch}
              onCreateColorToken={handleCreateColorToken}
              onUpdateColorToken={handleUpdateColorToken}
              onDeleteColorToken={handleDeleteColorToken}
            />
          ))}
        </div>
      )}
    </div>
  );
}
