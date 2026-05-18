import { Link } from "react-router-dom";
import Card from "../ui/Card";

export default function BranchCard({ branch }) {
  const subbranches = branch.subbranches || [];

  return (
    <Link to={`/branches/${branch.slug}`}>
      <Card className="h-full p-5 transition hover:-translate-y-0.5 hover:border-adech-accent">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-adech-text-muted">Public Branch</p>
            <h2 className="mt-1 text-xl font-semibold text-adech-text">
              {branch.name}
            </h2>
          </div>

          <span className="rounded-full border border-adech-border bg-adech-surface px-3 py-1 text-xs text-adech-text-soft">
            {subbranches.length} Subbranches
          </span>
        </div>

        {branch.description && (
          <p className="text-sm leading-6 text-adech-text-muted">
            {branch.description}
          </p>
        )}

        {branch.mood && (
          <p className="mt-3 text-xs text-adech-text-soft">{branch.mood}</p>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {subbranches.length > 0 ? (
            subbranches.slice(0, 4).map((subbranch) => (
              <span
                key={subbranch.id}
                className="rounded-full border border-adech-border bg-adech-bg-deep/70 px-3 py-1 text-xs text-adech-text-muted"
              >
                {subbranch.name}
              </span>
            ))
          ) : (
            <span className="rounded-full border border-adech-border bg-adech-bg-deep/70 px-3 py-1 text-xs text-adech-text-muted">
              No Subbranches
            </span>
          )}
        </div>
      </Card>
    </Link>
  );
}
