import Button from "./Button";
import Card from "./Card";

export default function ConfirmModal({
  title = "Confirm action",
  message = "Are you sure you want to continue?",
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  isLoading = false,
  onConfirm,
  onCancel,
}) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-adech-bg-ink/80 px-4 backdrop-blur">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        onClick={onCancel}
        aria-label="Close confirmation modal"
        disabled={isLoading}
      />

      <Card className="relative w-full max-w-md p-6">
        <div>
          <h2 className="mt-2 text-2xl font-semibold text-adech-text">
            {title}
          </h2>

          <p className="mt-3 text-sm leading-6 text-adech-text-muted">
            {message}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap justify-end gap-3">
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
            disabled={isLoading}
          >
            {cancelLabel}
          </Button>

          <Button
            type="button"
            variant="danger"
            onClick={onConfirm}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : confirmLabel}
          </Button>
        </div>
      </Card>
    </div>
  );
}
