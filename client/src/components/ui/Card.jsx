export default function Card({ children, className = "" }) {
  return (
    <div
      className={[
        "rounded-2xl border border-adech-border bg-adech-surface/70 shadow-[0_0_40px_rgba(3,10,18,0.24)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
