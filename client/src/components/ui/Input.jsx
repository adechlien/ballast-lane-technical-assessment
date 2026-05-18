export default function Input({ label, error, className = "", ...props }) {
  return (
    <label className="block">
      {label && (
        <span className="mb-2 block text-sm font-medium text-adech-text-soft">
          {label}
        </span>
      )}

      <input
        className={[
          "w-full rounded-lg bg-adech-swamp-3 px-3 py-2 text-sm text-adech-text outline-none placeholder:text-adech-text-muted focus:border-adech-accent",
          className,
        ].join(" ")}
        {...props}
      />

      {error && <p className="mt-2 text-xs text-adech-danger">{error}</p>}
    </label>
  );
}
