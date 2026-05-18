import Button from "../ui/Button";

const navItems = [
  { label: "Resumen", active: true },
  { label: "Branches" },
  { label: "Subbranches" },
  { label: "Tokens" },
];

export default function DashboardShell({ user, onLogout, children }) {
  return (
    <section className="h-screen w-screen overflow-hidden bg-adech-bg text-adech-text">
      <div className="grid h-full w-full md:grid-cols-[16rem_1fr]">
        <aside className="flex h-full flex-col border-r border-adech-border bg-adech-bg-ink/90 p-5">
          <div className="mb-10 flex items-center gap-3">
            <img src="/adech-logo.svg" alt="Adechen Logo" className="" />
            <div>
              <p className="text-sm font-semibold text-adech-text">Adechen</p>
              <p className="text-xs text-adech-text-muted">
                {user?.name || "Dashboard"}
              </p>
            </div>
          </div>

          <nav className="grid gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                className={[
                  "flex items-center rounded-xl px-3 py-2 text-left text-sm transition",
                  item.active
                    ? "bg-adech-surface text-adech-text-soft"
                    : "text-adech-text-muted hover:bg-adech-surface/60 hover:text-adech-text",
                ].join(" ")}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto">
            <Button variant="ghost" onClick={onLogout} className="w-full justify-start">
              Logout
            </Button>
          </div>
        </aside>

        <main className="h-full overflow-y-auto">
          <div className="mx-auto min-h-full max-w-7xl px-6 py-8 lg:px-10">
            {children}
          </div>
        </main>
      </div>
    </section>
  );
}
