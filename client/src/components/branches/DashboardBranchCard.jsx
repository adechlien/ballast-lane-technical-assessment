import Button from "../ui/Button";
import Card from "../ui/Card";
import SubbranchList from "../subbranches/SubbranchList";

export default function DashboardBranchCard({
  branch,
  onPublish,
  onUnpublish,
  onDelete,
  onCreateSubbranch,
  onUpdateSubbranch,
  onDeleteSubbranch,
  isBusy = false,
}) {
  const subbranches = branch.subbranches || [];
  const tokenCount = subbranches.reduce(
    (total, subbranch) => total + (subbranch.colorTokens?.length || 0),
    0
  );

  return (
    <Card className="p-5">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-semibold text-adech-text">
              {branch.name}
            </h2>

            <span className="rounded-full border border-adech-border bg-adech-bg-deep/70 px-3 py-1 text-xs text-adech-text-muted">
              {branch.isPublic ? "Public" : "Private"}
            </span>
          </div>

          {branch.description && (
            <p className="max-w-2xl text-sm leading-6 text-adech-text-muted">
              {branch.description}
            </p>
          )}

          {branch.mood && (
            <p className="mt-3 text-sm text-adech-text-soft">{branch.mood}</p>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-adech-border bg-adech-surface px-3 py-1 text-xs text-adech-text-soft">
              {subbranches.length} Subbranches
            </span>

            <span className="rounded-full border border-adech-border bg-adech-surface px-3 py-1 text-xs text-adech-text-soft">
              {tokenCount} Color Tokens
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 md:justify-end">
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

      <SubbranchList
        branch={branch}
        isBusy={isBusy}
        onCreate={onCreateSubbranch}
        onUpdate={onUpdateSubbranch}
        onDelete={onDeleteSubbranch}
      />
    </Card>
  );
}
