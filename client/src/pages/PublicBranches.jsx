import { useEffect, useState } from "react";
import BranchCard from "../components/branches/BranchCard";
import ErrorMessage from "../components/ui/ErrorMessage";
import Input from "../components/ui/Input";
import LoadingState from "../components/ui/LoadingState";
import { getPublicBranches } from "../services/publicBranchService";

export default function PublicBranches() {
  const [branches, setBranches] = useState([]);
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadBranches() {
      try {
        setStatus("loading");
        setError("");

        const data = await getPublicBranches(submittedSearch);

        if (!ignore) {
          setBranches(data.branches || []);
          setStatus("success");
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
          setStatus("error");
        }
      }
    }

    loadBranches();

    return () => {
      ignore = true;
    };
  }, [submittedSearch]);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedSearch(search);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-3xl font-semibold text-adech-text">
          Public Branches
        </h1>
        <p className="max-w-2xl text-adech-text-muted">
          Browse public visual systems created with Branches, Subbranches, and
          reusable Color Tokens.
        </p>
        <form onSubmit={handleSubmit} className="mt-2">
          <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search public Branches..."/>
        </form>
      </div>

      {status === "loading" && <LoadingState message="Loading public Branches..." />}

      {status === "error" && <ErrorMessage message={error} />}

      {status === "success" && branches.length === 0 && (
        <div className="rounded-2xl border border-adech-border bg-adech-surface/70 p-6">
          <h2 className="text-lg font-semibold text-adech-text">
            No public Branches found
          </h2>
          <p className="mt-2 text-sm text-adech-text-muted">
            Try a different search or publish a Branch from your dashboard.
          </p>
        </div>
      )}

      {status === "success" && branches.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {branches.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      )}
    </div>
  );
}
