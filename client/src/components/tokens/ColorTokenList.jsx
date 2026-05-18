import { useState } from "react";
import { IconCirclePlus, IconEdit, IconTrash } from "@tabler/icons-react";
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

  function getReadableTokenLabel(token) {
    if (token.usage) return token.usage;

    return token.name
      .replace(/^adech-/, "")
      .replaceAll("-", " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  }

  function getTextColor(hex) {
    const value = hex?.replace("#", "");

    if (!value || ![3, 6].includes(value.length)) {
      return "#0b1020";
    }

    const fullHex =
      value.length === 3
        ? value
            .split("")
            .map((char) => char + char)
            .join("")
        : value;

    const red = parseInt(fullHex.slice(0, 2), 16);
    const green = parseInt(fullHex.slice(2, 4), 16);
    const blue = parseInt(fullHex.slice(4, 6), 16);

    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

    return brightness > 150 ? "#10172a" : "#f8fafc";
  }

  return (
    <div className="mt-4">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        {!showCreateForm &&
        <Button className="flex gap-2"
          variant="primary"
          onClick={() => setShowCreateForm((current) => !current)}
          disabled={isBusy}
        >
          <IconCirclePlus stroke={2} />
          <span className="text-sm">Add Token</span>
        </Button>
        }
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
          <p className="text-sm text-adech-text-muted">
            This Subbranch has no Color Tokens yet.
          </p>
      )}

      {colorTokens.length > 0 && (
        <div className="overflow-hidden rounded-xl border border-adech-border">
          <div
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${colorTokens.length}, minmax(11rem, 1fr))`,
            }}
          >
            {colorTokens.map((token) => {
              const textColor = getTextColor(token.value);

              return (
                <article
                  key={token.id}
                  className="group relative min-h-32 border-r border-black/10 p-3 last:border-r-0"
                  style={{
                    backgroundColor: token.value,
                    color: textColor,
                  }}
                >
                  <div className="flex h-full min-h-28 flex-col justify-between">
                    <div className="flex items-start justify-between gap-3">
                      <p className="line-clamp-1 text-xs opacity-70">
                        {token.name}
                      </p>

                      <div className="flex gap-2 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                        <button
                          type="button"
                          onClick={() => setEditingTokenId(token.id)}
                          disabled={isBusy}
                          className="rounded-lg cursor-pointer"
                          aria-label={`Edit ${token.name}`}
                        >
                          <IconEdit size={15} />
                        </button>

                        <button
                          type="button"
                          onClick={() => onDelete(subbranch.id, token.id)}
                          disabled={isBusy}
                          className="rounded-lg cursor-pointer"
                          aria-label={`Delete ${token.name}`}
                        >
                          <IconTrash size={15} />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-end justify-between gap-3">
                      <p className="text-xs font-medium opacity-80">
                        {token.value}
                      </p>

                      <p className="line-clamp-1 text-right text-sm font-medium">
                        {getReadableTokenLabel(token)}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
