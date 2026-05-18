import { useEffect, useMemo, useState } from "react";
import BranchModal from "../components/branches/BranchModal";
import DashboardBranchCard from "../components/branches/DashboardBranchCard";
import DashboardBranchRow from "../components/dashboard/DashboardBranchRow";
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
import { IconTrash, IconCirclePlus } from '@tabler/icons-react';
import ConfirmModal from "../components/ui/ConfirmModal";

export default function Dashboard() {
  const { token, user } = useAuth();

  const [branches, setBranches] = useState([]);
  const [selectedBranchId, setSelectedBranchId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState("loading");
  const [actionStatus, setActionStatus] = useState("idle");
  const [error, setError] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null);

  async function loadBranches() {
    try {
      setStatus("loading");
      setError("");

      const data = await getMyBranches(token);
      const loadedBranches = data.branches || [];

      setBranches(loadedBranches);
      setSelectedBranchId((current) => current || loadedBranches[0]?.id || null);
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
      { label: "Tokens", value: tokenCount },
      { label: "Public", value: publicCount },
    ];
  }, [branches]);

  const selectedBranch = branches.find((branch) => branch.id === selectedBranchId);

  async function handleCreateBranch(payload) {
    try {
      setActionStatus("loading");
      setError("");

      const data = await createBranch(token, payload);

      setBranches((current) => [data.branch, ...current]);
      setSelectedBranchId(data.branch.id);
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
        current.map((branch) => (branch.id === branchId ? data.branch : branch))
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
        current.map((branch) => (branch.id === branchId ? data.branch : branch))
      );

      setActionStatus("idle");
    } catch (err) {
      setError(err.message);
      setActionStatus("idle");
    }
  }

  function handleDeleteBranch(branchId) {
    setDeleteTarget({
      type: "branch",
      branchId,
    });
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

  function handleDeleteSubbranch(branchId, subbranchId) {
    setDeleteTarget({
      type: "subbranch",
      branchId,
      subbranchId,
    });
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

  function handleDeleteColorToken(subbranchId, tokenId) {
    setDeleteTarget({
      type: "colorToken",
      subbranchId,
      tokenId,
    });
  }

  async function handleConfirmDelete() {
    if (!deleteTarget) return;

    try {
      setActionStatus("loading");
      setError("");

      if (deleteTarget.type === "branch") {
        await deleteBranch(token, deleteTarget.branchId);

        setBranches((current) => {
          const nextBranches = current.filter(
            (branch) => branch.id !== deleteTarget.branchId
          );

          if (selectedBranchId === deleteTarget.branchId) {
            setSelectedBranchId(nextBranches[0]?.id || null);
          }

          return nextBranches;
        });
      }

      if (deleteTarget.type === "subbranch") {
        await deleteSubbranch(
          token,
          deleteTarget.branchId,
          deleteTarget.subbranchId
        );

        setBranches((current) =>
          current.map((branch) =>
            branch.id === deleteTarget.branchId
              ? {
                  ...branch,
                  subbranches: (branch.subbranches || []).filter(
                    (subbranch) => subbranch.id !== deleteTarget.subbranchId
                  ),
                }
              : branch
          )
        );
      }

      if (deleteTarget.type === "colorToken") {
        await deleteColorToken(
          token,
          deleteTarget.subbranchId,
          deleteTarget.tokenId
        );

        setBranches((current) =>
          current.map((branch) => ({
            ...branch,
            subbranches: (branch.subbranches || []).map((subbranch) =>
              subbranch.id === deleteTarget.subbranchId
                ? {
                    ...subbranch,
                    colorTokens: (subbranch.colorTokens || []).filter(
                      (colorToken) => colorToken.id !== deleteTarget.tokenId
                    ),
                  }
                : subbranch
            ),
          }))
        );
      }

      setDeleteTarget(null);
      setActionStatus("idle");
    } catch (err) {
      setError(err.message);
      setActionStatus("idle");
      setDeleteTarget(null);
    }
  }

  function getDeleteModalContent() {
    if (!deleteTarget) return null;

    if (deleteTarget.type === "branch") {
      return {
        title: "Delete Branch?",
        message:
          "This will permanently delete the Branch and all its Subbranches and Color Tokens. This action cannot be undone.",
        confirmLabel: "Delete Branch",
      };
    }

    if (deleteTarget.type === "subbranch") {
      return {
        title: "Delete Subbranch?",
        message:
          "This will permanently delete the Subbranch and all Color Tokens inside it. This action cannot be undone.",
        confirmLabel: "Delete Subbranch",
      };
    }

    if (deleteTarget.type === "colorToken") {
      return {
        title: "Delete Color Token?",
        message:
          "This will permanently delete this Color Token from the Subbranch. This action cannot be undone.",
        confirmLabel: "Delete Token",
      };
    }

    return null;
  }

  const deleteModalContent = getDeleteModalContent();

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="mt-2 text-3xl font-semibold text-adech-text">
            Dashboard
          </h1>

          <p className="mt-2 text-sm text-adech-text-muted">
            Manage your Branches, Subbranches, and Color Tokens.
          </p>
        </div>

        <Button onClick={() => setShowForm(true)}>
          <span className="flex items-center gap-2">
            <IconCirclePlus size={18} stroke={2} />
            New Branch
          </span>
        </Button>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-4 flex justify-between items-center">
            <p className="text-sm text-adech-text-muted">{stat.label}</p>
            <p className="text-2xl font-semibold text-adech-text">
              {stat.value}
            </p>
          </Card>
        ))}
      </div>

      {showForm && (
        <BranchModal
          onClose={() => setShowForm(false)}
          onSubmit={handleCreateBranch}
          isSubmitting={actionStatus === "loading"}
        />
      )}

      {error && (
        <div className="mb-6">
          <ErrorMessage message={error} />
        </div>
      )}

      {status === "loading" && (
        <LoadingState message="Loading your Branches..." />
      )}

      {status === "error" && !error && (
        <ErrorMessage message="Could not load your Branches." />
      )}

      {status === "success" && branches.length === 0 && (
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-adech-text">
            No Branches yet
          </h2>
          <p className="mt-2 text-sm leading-6 text-adech-text-muted">
            Create your first Branch to start organizing Subbranches and Color
            Tokens.
          </p>
        </Card>
      )}

      {status === "success" && branches.length > 0 && (
        <div className="grid gap-6 xl:grid-cols-[1fr_1.1fr]">
          <section>
              <h2 className="mb-2 text-lg font-semibold text-adech-text">
                My Branches
              </h2>

            <div className="grid gap-3">
              {branches.map((branch) => (
                <DashboardBranchRow
                  key={branch.id}
                  branch={branch}
                  isSelected={branch.id === selectedBranchId}
                  isBusy={actionStatus === "loading"}
                  onSelect={setSelectedBranchId}
                  onPublish={handlePublishBranch}
                  onUnpublish={handleUnpublishBranch}
                  onDelete={handleDeleteBranch}
                />
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-adech-text">
              Branch Editor
            </h2>

            {selectedBranch ? (
              <DashboardBranchCard
                branch={selectedBranch}
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
            ) : (
              <Card className="p-6">
                <p className="text-sm text-adech-text-muted">
                  Select a Branch to edit it.
                </p>
              </Card>
            )}
          </section>
        </div>
      )}
    {deleteModalContent && (
      <ConfirmModal
        title={deleteModalContent.title}
        message={deleteModalContent.message}
        confirmLabel={deleteModalContent.confirmLabel}
        isLoading={actionStatus === "loading"}
        onCancel={() => setDeleteTarget(null)}
        onConfirm={handleConfirmDelete}
      />
    )}
    </div>

  );
}
