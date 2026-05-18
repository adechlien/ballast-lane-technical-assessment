import BranchForm from "./BranchForm";
import Card from "../ui/Card";

export default function BranchModal({ onClose, onSubmit, isSubmitting = false }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-adech-bg-ink/80 px-4 backdrop-blur">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        aria-label="Close Branch modal"
      />

      <Card className="relative w-full max-w-lg p-6">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-adech-text">
              Create Branch
            </h2>

            <p className="text-sm leading-6 text-adech-text-muted">
              Start with a visual direction. Later you can add Subbranches and
              Color Tokens inside it.
            </p>
          </div>
        </div>

        <BranchForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
      </Card>
    </div>
  );
}
