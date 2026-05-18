export default function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "border border-adech-accent bg-adech-accent text-adech-bg-ink hover:bg-adech-text-soft",
    secondary:
      "border border-adech-border bg-adech-surface/70 text-adech-text hover:bg-adech-surface-soft/20",
    flat:
      "p-0",
    ghost:
      "border border-transparent bg-transparent text-adech-text-muted hover:bg-adech-surface/60 hover:text-adech-text",
    danger:
      "border border-adech-danger/30 bg-adech-danger/15 text-adech-danger hover:bg-adech-danger/25",
  };

  return (
    <button
      type={type}
      className={[
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
