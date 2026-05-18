import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import ErrorMessage from "../components/ui/ErrorMessage";
import Input from "../components/ui/Input";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const redirectTo = location.state?.from?.pathname || "/dashboard";

  function updateField(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setStatus("loading");
      setError("");

      await login(form);

      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-md">
      <Card className="p-6">
        <p className="text-sm text-adech-text-soft">Welcome back</p>

        <h1 className="mt-2 text-2xl font-semibold text-adech-text">Login</h1>

        <p className="mt-2 text-sm leading-6 text-adech-text-muted">
          Access your Branches, Subbranches, and Color Tokens.
        </p>

        {error && <div className="mt-5"><ErrorMessage message={error} /></div>}

        <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={(event) => updateField("password", event.target.value)}
          />

          <Button type="submit" className="mt-2" disabled={status === "loading"}>
            {status === "loading" ? "Logging in..." : "Login"}
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
