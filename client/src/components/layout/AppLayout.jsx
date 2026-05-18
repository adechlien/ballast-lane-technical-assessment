import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AuthModal from "../auth/AuthModal";
import Button from "../ui/Button";
import { IconHome2, IconSearch, IconLogout2, IconLogin2, IconLayoutDashboard, IconUserPlus } from '@tabler/icons-react';

export default function AppLayout() {
  const { isAuthenticated, user, logout } = useAuth();
  const [authMode, setAuthMode] = useState(null);

  const navItems = [
    { to: "/", label: "Home", icon: <IconHome2 /> },
    { to: "/branches", label: "Explore", icon: <IconSearch /> },
    ...(isAuthenticated ? [{ to: "/dashboard", label: "Dashboard", icon: <IconLayoutDashboard /> }] : []),
  ];

  return (
    <div className="h-screen w-screen overflow-hidden bg-adech-bg text-adech-text">
      <div className="grid h-full w-full md:grid-cols-[16rem_1fr]">
        <aside className="flex h-full flex-col bg-adech-bg-ink p-4">
          <div className="mb-10 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <img src="/adech-logo.svg" alt="Adechen Logo" className="size-8" />

            <div>
              <p className="text-sm font-semibold text-adech-text">Adechen</p>
              <p className="text-xs text-adech-text-muted">
                Adech Themes Manager
              </p>
              </div>
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
                    "rounded-xl px-3 py-2 text-sm transition flex items-center gap-2",
                    isActive
                      ? "bg-adech-surface text-adech-text-soft"
                      : "text-adech-text-muted hover:bg-adech-surface/60 hover:text-adech-text",
                  ].join(" ")
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto grid">
            {isAuthenticated ? (
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-sm font-medium text-adech-text flex items-center gap-2">
                  <span className="flex items-center justify-center capitalize size-4 p-4 rounded-full bg-adech-boulevard-4 text-adech-swamp-3">{user?.name[0].toUpperCase()}</span>
                  {user?.name}
                </p>

                <Button variant="flat" onClick={logout} className="flex items-center gap-2 justify-start text-adech-sunny-3">
                  <IconLogout2 stroke={2} />
                </Button>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <Button variant="flat" onClick={() => setAuthMode("login")} className="flex items-center gap-2 justify-start">
                  <IconLogin2 stroke={2} />
                  Login
                </Button>

                <Button onClick={() => setAuthMode("register")} className="flex items-center gap-2 justify-start">
                  <IconUserPlus stroke={2} />
                  Signup
                </Button>
              </div>
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
