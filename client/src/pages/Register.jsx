import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";

export default function Register() {
  return (
    <div className="mx-auto max-w-md">
      <Card className="p-6">
        <p className="text-sm text-adech-text-soft">Create account</p>

        <h1 className="mt-2 text-2xl font-semibold text-adech-text">
          Register
        </h1>

        <p className="mt-2 text-sm leading-6 text-adech-text-muted">
          Start creating your own Adech-inspired visual Branches.
        </p>

        <form className="mt-6 grid gap-4">
          <Input label="Name" type="text" placeholder="Alejandro" />

          <Input label="Email" type="email" placeholder="you@example.com" />

          <Input
            label="Password"
            type="password"
            placeholder="At least 8 characters"
          />

          <Button type="submit" className="mt-2">
            Create account
          </Button>
        </form>

        <p className="mt-5 text-sm text-adech-text-muted">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-adech-text-soft hover:text-adech-accent"
          >
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
}
