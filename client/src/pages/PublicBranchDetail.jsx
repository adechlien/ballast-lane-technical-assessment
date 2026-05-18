import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/ui/Card";
import ErrorMessage from "../components/ui/ErrorMessage";
import LoadingState from "../components/ui/LoadingState";
import { getPublicBranchBySlug } from "../services/publicBranchService";

export default function PublicBranchDetail() {
  const { slug } = useParams();
  const [branch, setBranch] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadBranch() {
      try {
        setStatus("loading");
        setError("");

        const data = await getPublicBranchBySlug(slug);

        if (!ignore) {
          setBranch(data.branch);
          setStatus("success");
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
          setStatus("error");
        }
      }
    }

    loadBranch();

    return () => {
      ignore = true;
    };
  }, [slug]);

  if (status === "loading") {
    return <LoadingState message="Loading Branch detail..." />;
  }

  if (status === "error") {
    return <ErrorMessage message={error} />;
  }

  if (!branch) {
    return null;
  }

  return (
    <div className="grid gap-6">
      <Link
        to="/branches"
        className="text-sm text-adech-text-soft hover:text-adech-accent"
      >
        ← Back to public Branches
      </Link>

      <section className="grid gap-6 lg:grid-cols-[1fr_20rem]">
        <div>
          <p className="text-sm text-adech-text-soft">Public Branch</p>

          <h1 className="mt-2 text-4xl font-semibold text-adech-text">
            {branch.name}
          </h1>

          {branch.description && (
            <p className="mt-4 max-w-3xl text-base leading-7 text-adech-text-muted">
              {branch.description}
            </p>
          )}

          {branch.mood && (
            <p className="mt-4 text-sm text-adech-text-soft">{branch.mood}</p>
          )}
        </div>

        <Card className="p-5">
          <p className="text-sm text-adech-text-muted">Created by</p>
          <p className="mt-1 text-lg font-semibold text-adech-text">
            {branch.owner?.name || "Unknown"}
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-adech-border bg-adech-bg-deep/70 p-3">
              <p className="text-xs text-adech-text-muted">Subbranches</p>
              <p className="mt-1 text-xl font-semibold text-adech-text">
                {branch.subbranches?.length || 0}
              </p>
            </div>

            <div className="rounded-xl border border-adech-border bg-adech-bg-deep/70 p-3">
              <p className="text-xs text-adech-text-muted">Tokens</p>
              <p className="mt-1 text-xl font-semibold text-adech-text">
                {(branch.subbranches || []).reduce(
                  (total, subbranch) =>
                    total + (subbranch.colorTokens?.length || 0),
                  0
                )}
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-5">
        {(branch.subbranches || []).map((subbranch) => (
          <Card key={subbranch.id} className="overflow-hidden">
            <div className="border-b border-adech-border p-5">
              <h2 className="text-xl font-semibold text-adech-text">
                {subbranch.name}
              </h2>

              {subbranch.description && (
                <p className="mt-2 text-sm leading-6 text-adech-text-muted">
                  {subbranch.description}
                </p>
              )}
            </div>

            <div className="grid gap-3 p-5">
              {(subbranch.colorTokens || []).length === 0 && (
                <p className="text-sm text-adech-text-muted">
                  This Subbranch has no Color Tokens yet.
                </p>
              )}

              {(subbranch.colorTokens || []).map((token) => (
                <div
                  key={token.id}
                  className="grid gap-3 rounded-xl border border-adech-border bg-adech-bg-deep/60 p-3 md:grid-cols-[4rem_1fr_auto]"
                >
                  <div
                    className="h-14 rounded-lg border border-adech-border"
                    style={{ backgroundColor: token.value }}
                  />

                  <div>
                    <p className="font-medium text-adech-text">{token.name}</p>
                    {token.usage && (
                      <p className="mt-1 text-sm text-adech-text-muted">
                        {token.usage}
                      </p>
                    )}
                  </div>

                  <p className="text-sm font-medium text-adech-text-soft">
                    {token.value}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}
