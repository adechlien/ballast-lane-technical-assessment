import { Link, NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/branches", label: "Explore" },
  { to: "/login", label: "Login" },
  { to: "/register", label: "Register" },
];

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-adech-bg text-adech-text">
      <header className="border-b border-adech-border bg-adech-bg-ink/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-adech-border bg-adech-surface text-sm font-bold text-adech-text-soft">
              A
            </div>

            <div>
              <p className="text-sm font-semibold tracking-wide text-adech-text">
                Adechen
              </p>
              <p className="text-xs text-adech-text-muted">
                Branches, Subbranches & Color Tokens
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "rounded-xl px-3 py-2 text-sm transition",
                    isActive
                      ? "bg-adech-surface text-adech-text-soft"
                      : "text-adech-text-muted hover:bg-adech-surface/60 hover:text-adech-text",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8">
        <Outlet />
      </main>
    </div>
  );
}
