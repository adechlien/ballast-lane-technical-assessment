import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AuthModal from "../auth/AuthModal";
import Button from "../ui/Button";
import {
  IconHome2,
  IconSearch,
  IconLogout2,
  IconLogin2,
  IconLayoutDashboard,
  IconUserPlus,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

export default function AppLayout() {
  const { isAuthenticated, user, logout } = useAuth();
  const [authMode, setAuthMode] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home", icon: <IconHome2 size={22} /> },
    { to: "/branches", label: "Explore", icon: <IconSearch size={22} /> },
    ...(isAuthenticated
      ? [
          {
            to: "/dashboard",
            label: "Dashboard",
            icon: <IconLayoutDashboard size={22} />,
          },
        ]
      : []),
  ];

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function handleLogout() {
    logout();
    closeSidebar();
  }

  function openAuthModal(mode) {
    setAuthMode(mode);
    closeSidebar();
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-adech-bg text-adech-text">
      <button
        type="button"
        onClick={() => setIsSidebarOpen(true)}
        className="fixed left-4 top-4 z-40 text-adech-text-soft shadow-lg backdrop-blur md:hidden"
        aria-label="Open navigation menu"
      >
        <IconMenu2 size={24} />
      </button>

      {isSidebarOpen && (
        <button
          type="button"
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-adech-bg-ink/70 backdrop-blur-sm md:hidden"
          aria-label="Close navigation menu overlay"
        />
      )}

      <div className="grid h-full w-full md:grid-cols-[16rem_1fr]">
        <aside
          className={[
            "fixed inset-y-0 left-0 z-50 flex h-full w-72 max-w-[82vw] flex-col bg-adech-bg-ink p-4 transition-transform duration-200 md:static md:z-auto md:w-auto md:max-w-none md:translate-x-0",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
        >
          <div className="mb-10 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <img
                src="/adech-logo.svg"
                alt="Adechen Logo"
                className="size-8"
              />

              <div>
                <p className="text-sm font-semibold text-adech-text">
                  Adechen
                </p>
                <p className="text-xs text-adech-text-muted">
                  Adech Themes Manager
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={closeSidebar}
              className="rounded-xl border border-adech-border p-2 text-adech-text-muted hover:bg-adech-surface hover:text-adech-text md:hidden"
              aria-label="Close navigation menu"
            >
              <IconX size={18} />
            </button>
          </div>

          <nav className="grid gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition",
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
                <p className="flex min-w-0 items-center gap-2 truncate text-sm font-medium text-adech-text">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-adech-boulevard-4 text-sm font-semibold capitalize text-adech-swamp-3">
                    {user?.name?.[0]?.toUpperCase()}
                  </span>
                  <span className="truncate">{user?.name}</span>
                </p>

                <Button
                  variant="flat"
                  onClick={handleLogout}
                  className="flex items-center gap-2 justify-start text-adech-sunny-3"
                >
                  <IconLogout2 stroke={2} />
                </Button>
              </div>
            ) : (
              <div className="grid gap-2">
                <Button
                  variant="flat"
                  onClick={() => openAuthModal("login")}
                  className="flex items-center gap-2 justify-start"
                >
                  <IconLogin2 stroke={2} />
                  Login
                </Button>

                <Button
                  onClick={() => openAuthModal("register")}
                  className="flex items-center gap-2 justify-start"
                >
                  <IconUserPlus stroke={2} />
                  Signup
                </Button>
              </div>
            )}
          </div>
        </aside>

        <main className="h-full overflow-y-auto">
          <div className="mx-auto min-h-full max-w-7xl px-6 py-8 pt-20 md:pt-8 lg:px-10">
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
