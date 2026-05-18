import Button from "../ui/Button";

export default function DashboardBranchRow({
  branch,
  isSelected,
  onSelect,
  onPublish,
  onUnpublish,
  onDelete,
  isBusy,
}) {
  const subbranches = branch.subbranches || [];
  const tokenCount = subbranches.reduce(
    (total, subbranch) => total + (subbranch.colorTokens?.length || 0),
    0
  );

  const firstTokens = subbranches.flatMap((subbranch) => subbranch.colorTokens || []).slice(0, 4);

  return (
    <div
      className={[
        "rounded-2xl border p-4 transition",
        isSelected
          ? "border-adech-accent bg-adech-surface"
          : "border-adech-border bg-adech-bg-deep/60 hover:border-adech-accent/70",
      ].join(" ")}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <button type="button" onClick={() => onSelect(branch.id)} className="min-w-0 text-left">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 shrink-0 grid-cols-2 overflow-hidden rounded-xl border border-adech-border">
              {firstTokens.length > 0 ? (
                firstTokens.map((token) => (
                  <span key={token.id} style={{ backgroundColor: token.value }} />
                ))
              ) : (
                <>
                  <span className="bg-adech-boulevard-1" />
                  <span className="bg-adech-boulevard-2" />
                  <span className="bg-adech-boulevard-3" />
                  <span className="bg-adech-boulevard-4" />
                </>
              )}
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="truncate font-semibold text-adech-text">
                  {branch.name}
                </h3>

                <span className="rounded-full border border-adech-border bg-adech-bg-ink/70 px-2 py-0.5 text-xs text-adech-text-muted">
                  {branch.isPublic ? "Public" : "Private"}
                </span>
              </div>

              <p className="mt-1 line-clamp-1 text-sm text-adech-text-muted">
                {branch.description || "No description yet."}
              </p>
            </div>
          </div>
        </button>

        <div className="flex flex-wrap items-center gap-2 md:justify-end">
          <span className="rounded-full border border-adech-border bg-adech-bg-ink/70 px-3 py-1 text-xs text-adech-text-muted">
            {subbranches.length} subbranches
          </span>

          <span className="rounded-full border border-adech-border bg-adech-bg-ink/70 px-3 py-1 text-xs text-adech-text-muted">
            {tokenCount} tokens
          </span>

          {branch.isPublic ? (
            <Button
              variant="secondary"
              onClick={() => onUnpublish(branch.id)}
              disabled={isBusy}
            >
              Unpublish
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={() => onPublish(branch.id)}
              disabled={isBusy}
            >
              Publish
            </Button>
          )}

          <Button
            variant="danger"
            onClick={() => onDelete(branch.id)}
            disabled={isBusy}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
