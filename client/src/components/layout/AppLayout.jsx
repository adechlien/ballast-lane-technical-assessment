import { Link, NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "../ui/Button";

export default function AppLayout() {
  const { isAuthenticated, user, logout } = useAuth();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/branches", label: "Explore" },
    ...(isAuthenticated ? [{ to: "/dashboard", label: "Dashboard" }] : []),
  ];

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

          <div className="hidden items-center gap-3 md:flex">
            <nav className="flex items-center gap-2">
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

            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-adech-text-muted">
                  {user?.name}
                </span>
                <Button variant="secondary" onClick={logout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/register">
                  <Button>Create account</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8">
        <Outlet />
      </main>
    </div>
  );
}
