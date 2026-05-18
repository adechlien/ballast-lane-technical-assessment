import Card from "../components/ui/Card";
import Input from "../components/ui/Input";

const placeholderBranches = [
  {
    name: "Superior",
    slug: "superior",
    description:
      "The main Branch in Adech Themes, composed of cold and introspective Subbranches.",
    subbranches: ["Boulevard", "Venomous", "Swamp"],
  },
  {
    name: "Boulevard",
    slug: "boulevard",
    description:
      "The city, distance, and the quiet loneliness that can exist even in a crowded world.",
    subbranches: ["4 Color Tokens"],
  },
  {
    name: "Swamp",
    slug: "swamp",
    description:
      "The calm, breathing space, and the quiet strength of staying with yourself.",
    subbranches: ["3 Color Tokens"],
  },
];

export default function PublicBranches() {
  return (
    <div>
      <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_22rem] lg:items-end">
        <div>
          <p className="text-sm text-adech-text-soft">Explore</p>

          <h1 className="mt-2 text-3xl font-semibold text-adech-text">
            Public Branches
          </h1>

          <p className="mt-3 max-w-2xl text-adech-text-muted">
            Browse public visual systems created with Branches, Subbranches, and
            reusable Color Tokens.
          </p>
        </div>

        <Input placeholder="Search public Branches..." />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {placeholderBranches.map((branch) => (
          <Card key={branch.slug} className="p-5">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-adech-text-muted">Public Branch</p>
                <h2 className="mt-1 text-xl font-semibold text-adech-text">
                  {branch.name}
                </h2>
              </div>

              <span className="rounded-full border border-adech-border bg-adech-surface px-3 py-1 text-xs text-adech-text-soft">
                Published
              </span>
            </div>

            <p className="text-sm leading-6 text-adech-text-muted">
              {branch.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {branch.subbranches.map((subbranch) => (
                <span
                  key={subbranch}
                  className="rounded-full border border-adech-border bg-adech-bg-deep/70 px-3 py-1 text-xs text-adech-text-muted"
                >
                  {subbranch}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
