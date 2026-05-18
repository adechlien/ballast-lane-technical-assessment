import SubbranchList from "../subbranches/SubbranchList";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { IconTrash } from '@tabler/icons-react';

export default function DashboardBranchCard({
  branch,
  onPublish,
  onUnpublish,
  onDelete,
  onCreateSubbranch,
  onUpdateSubbranch,
  onDeleteSubbranch,
  onCreateColorToken,
  onUpdateColorToken,
  onDeleteColorToken,
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
          <div className="flex flex-wrap items-center gap-2">
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
            <p className="mt-2 text-sm text-adech-text-soft">{branch.mood}</p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 md:justify-end">
          {branch.isPublic ? (
            <Button
              variant="ghost"
              onClick={() => onUnpublish(branch.id)}
              disabled={isBusy}
            >
              Unpublish
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => onPublish(branch.id)}
              disabled={isBusy}
            >
              Publish
            </Button>
          )}

          <button className="text-adech-sunny-3 cursor-pointer"
            onClick={() => onDelete(branch.id)}
            disabled={isBusy}
          >
            <IconTrash />
          </button>
        </div>
      </div>

      <SubbranchList
        branch={branch}
        isBusy={isBusy}
        onCreate={onCreateSubbranch}
        onUpdate={onUpdateSubbranch}
        onDelete={onDeleteSubbranch}
        onCreateColorToken={onCreateColorToken}
        onUpdateColorToken={onUpdateColorToken}
        onDeleteColorToken={onDeleteColorToken}
      />
    </Card>
  );
}
