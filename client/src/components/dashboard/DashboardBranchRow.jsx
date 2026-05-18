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
  return (
      <button type="button" onClick={() => onSelect(branch.id)}
        className={[
          "rounded-lg bg-adech-surface p-4 transition min-w-0 text-left cursor-pointer",
          isSelected
            ? "border-2 border-adech-accent"
            : "",
        ].join(" ")}>
          <div className="flex items-center gap-4">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="truncate font-semibold text-adech-text">
                  {branch.name}
                </h3>

                <span className="rounded-full border border-adech-border bg-adech-bg-ink/70 px-2 py-0.5 text-xs text-adech-text-muted">
                  {branch.isPublic ? "Public" : "Private"}
                </span>
              </div>

              <p className="mt-1 text-sm text-adech-text-muted">
                {branch.description || "No description yet."}
              </p>
            </div>
          </div>
        </button>
  );
}
