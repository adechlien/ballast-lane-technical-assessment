export default function Card({ children, className = "" }) {
  return (
    <div className={["rounded-lg bg-adech-surface", className, ].join(" ")}>
      {children}
    </div>
  );
}
