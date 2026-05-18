import { useState } from "react";
import ColorTokenList from "../tokens/ColorTokenList";
import Button from "../ui/Button";
import Card from "../ui/Card";
import SubbranchForm from "./SubbranchForm";
import { IconEdit, IconTrash, IconCirclePlus } from '@tabler/icons-react';

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
    <div className="mt-4 flex flex-col gap-4">
      {!showCreateForm &&
        <button className="flex items-center gap-2 place-self-end px-3 py-2 bg-adech-boulevard-4 text-adech-swamp-3 rounded-md cursor-pointer"
          onClick={() => setShowCreateForm((current) => !current)}
          disabled={isBusy}
      >
        <IconCirclePlus stroke={2} />
        <span className="text-sm">Add Subbranch</span>
        </button>
      }

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
          <p className="text-sm text-adech-text-muted">
            This Branch has no Subbranches yet.
          </p>
      )}

      {subbranches.length > 0 && (
        <div className="grid gap-3">
          {subbranches.map((subbranch) => (
            <div
              key={subbranch.id}
              className="rounded-lg bg-adech-swamp-3 p-4"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                    <h4 className="font-medium text-adech-text">
                      {subbranch.name}
                    </h4>

                  {subbranch.description && (
                    <p className="text-sm leading-6 text-adech-text-muted">
                      {subbranch.description}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setEditingSubbranchId(subbranch.id)}
                    disabled={isBusy}
                  >
                    <IconEdit />
                  </button>

                  <button
                    className="text-adech-sunny-3 cursor-pointer"
                    onClick={() => onDelete(branch.id, subbranch.id)}
                    disabled={isBusy}
                  >
                    <IconTrash />
                  </button>
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
