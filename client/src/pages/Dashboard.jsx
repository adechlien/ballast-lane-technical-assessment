import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const stats = [
  { label: "Branches", value: "0" },
  { label: "Subbranches", value: "0" },
  { label: "Color Tokens", value: "0" },
];

export default function Dashboard() {
  return (
    <div>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-adech-text-soft">Dashboard</p>

          <h1 className="mt-2 text-3xl font-semibold text-adech-text">
            Your Branches
          </h1>

          <p className="mt-3 text-adech-text-muted">
            Manage your private and public Branches using the structure of Adech
            Themes.
          </p>
        </div>

        <Button>New Branch</Button>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-5">
            <p className="text-sm text-adech-text-muted">{stat.label}</p>
            <p className="mt-2 text-3xl font-semibold text-adech-text">
              {stat.value}
            </p>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-lg font-semibold text-adech-text">
              No Branches yet
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-adech-text-muted">
              Your authenticated Branch management will appear here. You will be
              able to create a Branch, add Subbranches, define Color Tokens, and
              publish selected Branches.
            </p>
          </div>

          <Button variant="secondary">Create first Branch</Button>
        </div>
      </Card>
    </div>
  );
}
