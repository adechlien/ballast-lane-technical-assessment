import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AuthModal from "../auth/AuthModal";
import Button from "../ui/Button";

export default function AppLayout() {
  const { isAuthenticated, user, logout } = useAuth();
  const [authMode, setAuthMode] = useState(null);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/branches", label: "Explore" },
    ...(isAuthenticated ? [{ to: "/dashboard", label: "Dashboard" }] : []),
  ];

  return (
    <div className="h-screen w-screen overflow-hidden bg-adech-bg text-adech-text">
      <div className="grid h-full w-full md:grid-cols-[16rem_1fr]">
        <aside className="flex h-full flex-col border-r border-adech-border bg-adech-bg-ink/90 p-5">
          <div className="mb-10 flex items-center gap-3">
            <img src="/adech-logo.svg" alt="Adechen Logo" className="size-8" />

            <div>
              <p className="text-sm font-semibold text-adech-text">Adechen</p>
              <p className="text-xs text-adech-text-muted">
                Adech Themes Manager
              </p>
            </div>
          </div>

          <nav className="grid gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
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

          <div className="mt-auto grid gap-3">
            {isAuthenticated ? (
              <>
                <div className="rounded-2xl border border-adech-border bg-adech-bg-deep/60 p-3">
                  <p className="text-xs text-adech-text-muted">Signed in as</p>
                  <p className="mt-1 truncate text-sm font-medium text-adech-text">
                    {user?.name}
                  </p>
                </div>

                <Button variant="ghost" onClick={logout} className="justify-start">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="secondary"
                  onClick={() => setAuthMode("login")}
                  className="justify-start"
                >
                  Login
                </Button>

                <Button
                  onClick={() => setAuthMode("register")}
                  className="justify-start"
                >
                  Sign up
                </Button>
              </>
            )}
          </div>
        </aside>

        <main className="h-full overflow-y-auto">
          <div className="mx-auto min-h-full max-w-7xl px-6 py-8 lg:px-10">
            <Outlet />
          </div>
        </main>
      </div>

      {authMode && (
        <AuthModal
          mode={authMode}
          onClose={() => setAuthMode(null)}
          onModeChange={setAuthMode}
        />
      )}
    </div>
  );
}
