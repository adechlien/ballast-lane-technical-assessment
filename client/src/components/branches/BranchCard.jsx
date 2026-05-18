import { Link } from "react-router-dom";
import Card from "../ui/Card";

export default function BranchCard({ branch }) {
  const subbranches = branch.subbranches || [];

  return (
    <Link to={`/branches/${branch.slug}`}>
      <Card className="h-full p-4 transition hover:border-adech-accent">
        <h2 className="text-xl font-semibold text-adech-text">
          {branch.name}
        </h2>

        {branch.description && (
          <p className="text-sm leading-6 text-adech-text-muted">
            {branch.description}
          </p>
        )}

        {branch.mood && (
          <p className="text-xs text-adech-text-soft">{branch.mood}</p>
        )}

        <div className="flex flex-wrap gap-2 mt-4">
          {subbranches.length > 0 ? (
            subbranches.slice(0, 4).map((subbranch) => (
              <span
                key={subbranch.id}
                className="rounded-md bg-adech-swamp-3 px-3 py-1 text-xs text-adech-text-muted"
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
