import { useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import ColorTokenForm from "./ColorTokenForm";

export default function ColorTokenList({
  subbranch,
  onCreate,
  onUpdate,
  onDelete,
  isBusy = false,
}) {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingTokenId, setEditingTokenId] = useState(null);

  const colorTokens = subbranch.colorTokens || [];
  const editingToken = colorTokens.find((token) => token.id === editingTokenId);

  async function handleCreate(payload) {
    await onCreate(subbranch.id, payload);
    setShowCreateForm(false);
  }

  async function handleUpdate(payload) {
    await onUpdate(subbranch.id, editingTokenId, payload);
    setEditingTokenId(null);
  }

  return (
    <div className="mt-4 border-t border-adech-border pt-4">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h5 className="text-sm font-semibold text-adech-text">
            Color Tokens
          </h5>
          <p className="mt-1 text-xs text-adech-text-muted">
            Reusable color values inside this Subbranch.
          </p>
        </div>

        <Button
          variant="secondary"
          onClick={() => setShowCreateForm((current) => !current)}
          disabled={isBusy}
        >
          {showCreateForm ? "Close" : "Add Token"}
        </Button>
      </div>

      {showCreateForm && (
        <Card className="mb-4 p-4">
          <ColorTokenForm
            onSubmit={handleCreate}
            isSubmitting={isBusy}
            onCancel={() => setShowCreateForm(false)}
          />
        </Card>
      )}

      {editingToken && (
        <Card className="mb-4 p-4">
          <ColorTokenForm
            initialValues={editingToken}
            onSubmit={handleUpdate}
            isSubmitting={isBusy}
            onCancel={() => setEditingTokenId(null)}
          />
        </Card>
      )}

      {colorTokens.length === 0 && (
        <div className="rounded-xl border border-adech-border bg-adech-bg-ink/40 p-4">
          <p className="text-sm text-adech-text-muted">
            This Subbranch has no Color Tokens yet.
          </p>
        </div>
      )}

      {colorTokens.length > 0 && (
        <div className="grid gap-3">
          {colorTokens.map((token) => (
            <div
              key={token.id}
              className="grid gap-3 rounded-xl border border-adech-border bg-adech-bg-ink/40 p-3 md:grid-cols-[4rem_1fr_auto]"
            >
              <div
                className="h-14 rounded-lg border border-adech-border"
                style={{ backgroundColor: token.value }}
              />

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-medium text-adech-text">{token.name}</p>

                  <span className="rounded-full border border-adech-border bg-adech-surface px-2 py-1 text-xs text-adech-text-soft">
                    {token.value}
                  </span>
                </div>

                {token.usage && (
                  <p className="mt-1 text-sm leading-6 text-adech-text-muted">
                    {token.usage}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end">
                <Button
                  variant="secondary"
                  onClick={() => setEditingTokenId(token.id)}
                  disabled={isBusy}
                >
                  Edit
                </Button>

                <Button
                  variant="danger"
                  onClick={() => onDelete(subbranch.id, token.id)}
                  disabled={isBusy}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
