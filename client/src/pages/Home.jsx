import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const featuredBranches = [
  {
    name: "Superior",
    description:
      "The main visual direction inside Adech Themes, structured through cold, calm, and introspective Subbranches.",
    subbranches: ["Boulevard", "Venomous", "Swamp"],
  },
  {
    name: "Boulevard",
    description:
      "The city, distance, and the quiet loneliness that can exist even in a crowded world.",
    subbranches: ["adech-boulevard-1", "adech-boulevard-2", "adech-boulevard-3"],
  },
  {
    name: "Venomous",
    description:
      "Nature, ancient presence, and the magical force of everything we cannot fully explain.",
    subbranches: ["adech-venomous-1", "adech-venomous-2", "adech-venomous-3"],
  },
];

export default function Home() {
  return (
    <div className="grid gap-12">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium text-adech-text-soft">
            Adech Themes · Superior
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-adech-text md:text-6xl">
            Create Branches with the structure of Adech Themes.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-adech-text-muted">
            Adechen follows the Superior logic from Adech Themes: a Branch
            defines a visual direction, Subbranches act as palettes, and Color
            Tokens become reusable interface decisions.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/branches">
              <Button>Explore Branches</Button>
            </Link>

            <Link to="/register">
              <Button variant="secondary">Create account</Button>
            </Link>
          </div>
        </div>

        <Card className="overflow-hidden p-4">
          <div className="rounded-xl border border-adech-border bg-adech-bg-ink/70 p-5">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-adech-text-muted">
                  Branch preview
                </p>
                <h2 className="text-xl font-semibold text-adech-text">
                  Superior
                </h2>
              </div>

              <span className="rounded-full border border-adech-border bg-adech-surface px-3 py-1 text-xs text-adech-text-soft">
                Public
              </span>
            </div>

            <div className="grid gap-5">
              <section>
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-adech-text">
                      Boulevard
                    </p>
                    <p className="text-xs text-adech-text-muted">
                      Cold city distance
                    </p>
                  </div>

                  <p className="text-xs text-adech-text-muted">4 tokens</p>
                </div>

                <div className="grid grid-cols-4 overflow-hidden rounded-xl border border-adech-border">
                  <div className="h-16 bg-adech-boulevard-1" />
                  <div className="h-16 bg-adech-boulevard-2" />
                  <div className="h-16 bg-adech-boulevard-3" />
                  <div className="h-16 bg-adech-boulevard-4" />
                </div>
              </section>

              <section>
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-adech-text">
                      Venomous
                    </p>
                    <p className="text-xs text-adech-text-muted">
                      Nature and ancient presence
                    </p>
                  </div>

                  <p className="text-xs text-adech-text-muted">5 tokens</p>
                </div>

                <div className="grid grid-cols-5 overflow-hidden rounded-xl border border-adech-border">
                  <div className="h-16 bg-adech-venomous-1" />
                  <div className="h-16 bg-adech-venomous-2" />
                  <div className="h-16 bg-adech-venomous-3" />
                  <div className="h-16 bg-adech-venomous-4" />
                  <div className="h-16 bg-adech-venomous-5" />
                </div>
              </section>

              <section>
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-adech-text">
                      Swamp
                    </p>
                    <p className="text-xs text-adech-text-muted">
                      Calm and quiet strength
                    </p>
                  </div>

                  <p className="text-xs text-adech-text-muted">3 tokens</p>
                </div>

                <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-adech-border">
                  <div className="h-16 bg-adech-swamp-1" />
                  <div className="h-16 bg-adech-swamp-2" />
                  <div className="h-16 bg-adech-swamp-3" />
                </div>
              </section>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-adech-text-soft">Public library</p>
            <h2 className="text-2xl font-semibold text-adech-text">
              Featured Branches
            </h2>
          </div>

          <Link
            className="text-sm text-adech-text-soft hover:text-adech-accent"
            to="/branches"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {featuredBranches.map((branch) => (
            <Card key={branch.name} className="p-5">
              <h3 className="text-lg font-semibold text-adech-text">
                {branch.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-adech-text-muted">
                {branch.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {branch.subbranches.map((subbranch) => (
                  <span
                    key={subbranch}
                    className="rounded-full border border-adech-border bg-adech-surface/70 px-3 py-1 text-xs text-adech-text-soft"
                  >
                    {subbranch}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
