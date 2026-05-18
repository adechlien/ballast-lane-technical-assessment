import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";

export default function Login() {
  return (
    <div className="mx-auto max-w-md">
      <Card className="p-6">
        <p className="text-sm text-adech-text-soft">Welcome back</p>

        <h1 className="mt-2 text-2xl font-semibold text-adech-text">
          Login
        </h1>

        <p className="mt-2 text-sm leading-6 text-adech-text-muted">
          Access your Branches, Subbranches, and Color Tokens.
        </p>

        <form className="mt-6 grid gap-4">
          <Input label="Email" type="email" placeholder="you@example.com" />

          <Input label="Password" type="password" placeholder="••••••••" />

          <Button type="submit" className="mt-2">
            Login
          </Button>
        </form>

        <p className="mt-5 text-sm text-adech-text-muted">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-adech-text-soft hover:text-adech-accent"
          >
            Create one
          </Link>
        </p>
      </Card>
    </div>
  );
}
