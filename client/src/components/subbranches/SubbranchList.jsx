import { useState } from "react";
import ColorTokenList from "../tokens/ColorTokenList";
import Button from "../ui/Button";
import Card from "../ui/Card";
import SubbranchForm from "./SubbranchForm";

export default function SubbranchList({
  branch,
  onCreate,
  onUpdate,
  onDelete,
  onCreateColorToken,
  onUpdateColorToken,
  onDeleteColorToken,
  isBusy = false,
}) {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingSubbranchId, setEditingSubbranchId] = useState(null);

  const subbranches = branch.subbranches || [];
  const editingSubbranch = subbranches.find(
    (subbranch) => subbranch.id === editingSubbranchId
  );

  async function handleCreate(payload) {
    await onCreate(branch.id, payload);
    setShowCreateForm(false);
  }

  async function handleUpdate(payload) {
    await onUpdate(branch.id, editingSubbranchId, payload);
    setEditingSubbranchId(null);
  }

  return (
    <div className="mt-5 border-t border-adech-border pt-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-adech-text">
            Subbranches
          </h3>
          <p className="mt-1 text-xs text-adech-text-muted">
            Palettes that belong to this Branch.
          </p>
        </div>

        <Button
          variant="secondary"
          onClick={() => setShowCreateForm((current) => !current)}
          disabled={isBusy}
        >
          {showCreateForm ? "Close" : "Add Subbranch"}
        </Button>
      </div>

      {showCreateForm && (
        <Card className="mb-4 p-4">
          <SubbranchForm
            onSubmit={handleCreate}
            isSubmitting={isBusy}
            onCancel={() => setShowCreateForm(false)}
          />
        </Card>
      )}

      {editingSubbranch && (
        <Card className="mb-4 p-4">
          <SubbranchForm
            initialValues={editingSubbranch}
            onSubmit={handleUpdate}
            isSubmitting={isBusy}
            onCancel={() => setEditingSubbranchId(null)}
          />
        </Card>
      )}

      {subbranches.length === 0 && (
        <div className="rounded-xl border border-adech-border bg-adech-bg-deep/50 p-4">
          <p className="text-sm text-adech-text-muted">
            This Branch has no Subbranches yet.
          </p>
        </div>
      )}

      {subbranches.length > 0 && (
        <div className="grid gap-3">
          {subbranches.map((subbranch) => (
            <div
              key={subbranch.id}
              className="rounded-xl border border-adech-border bg-adech-bg-deep/50 p-4"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-medium text-adech-text">
                      {subbranch.name}
                    </h4>

                    <span className="rounded-full border border-adech-border bg-adech-surface px-2 py-1 text-xs text-adech-text-muted">
                      {subbranch.colorTokens?.length || 0} tokens
                    </span>
                  </div>

                  {subbranch.description && (
                    <p className="mt-2 text-sm leading-6 text-adech-text-muted">
                      {subbranch.description}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="secondary"
                    onClick={() => setEditingSubbranchId(subbranch.id)}
                    disabled={isBusy}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => onDelete(branch.id, subbranch.id)}
                    disabled={isBusy}
                  >
                    Delete
                  </Button>
                </div>
              </div>

              <ColorTokenList
                subbranch={subbranch}
                isBusy={isBusy}
                onCreate={onCreateColorToken}
                onUpdate={onUpdateColorToken}
                onDelete={onDeleteColorToken}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
