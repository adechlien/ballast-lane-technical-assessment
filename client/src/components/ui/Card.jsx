export default function Card({ children, className = "" }) {
  return (
    <div className={["rounded-2xl bg-adech-surface", className, ].join(" ")}>
      {children}
    </div>
  );
}
