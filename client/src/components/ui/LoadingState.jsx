export default function LoadingState({ message = "Loading..." }) {
  return (
    <div className="rounded-2xl border border-adech-border bg-adech-surface/70 p-6 text-sm text-adech-text-muted">
      {message}
    </div>
  );
}
