import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex min-h-[calc(100vh-6rem)] items-center">
      <section className="grid w-full gap-8 lg:grid-cols-[1fr_26rem] lg:items-center">
        <div className="max-w-2xl">

          <h1 className="text-4xl font-semibold tracking-tight text-adech-text md:text-6xl">
            Manage visual Branches with color tokens.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-adech-text-muted">
            Adechen is a small full-stack manager for Branches, Subbranches, and
            reusable Color Tokens inspired by the Adech design ecosystem.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/branches">
              <Button variant="flat">Explore Branches</Button>
            </Link>

            {isAuthenticated && (
              <Link to="/dashboard">
                <Button variant="primary">Go to Dashboard</Button>
              </Link>
            )}
          </div>
        </div>

        <Card className="p-5">
          <div className="mb-5">
            <p className="text-xs text-adech-text-muted">Structure</p>
            <h2 className="mt-1 text-xl font-semibold text-adech-text">
              Branch → Subbranch → Color Token
            </h2>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-adech-border bg-adech-bg-deep/60 p-4">
              <p className="text-sm font-semibold text-adech-text">Superior</p>
              <p className="mt-1 text-sm text-adech-text-muted">
                A Branch defines a visual direction.
              </p>
            </div>

            <div className="rounded-2xl border border-adech-border bg-adech-bg-deep/60 p-4">
              <p className="text-sm font-semibold text-adech-text">
                Boulevard, Venomous, Swamp
              </p>
              <p className="mt-1 text-sm text-adech-text-muted">
                Subbranches organize related palettes.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-adech-border">
              <div className="grid grid-cols-4">
                <div className="h-16 bg-adech-boulevard-1" />
                <div className="h-16 bg-adech-boulevard-2" />
                <div className="h-16 bg-adech-boulevard-3" />
                <div className="h-16 bg-adech-boulevard-4" />
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
