import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import ErrorMessage from "../components/ui/ErrorMessage";
import Input from "../components/ui/Input";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

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

      await register(form);

      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

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

        {error && <div className="mt-5"><ErrorMessage message={error} /></div>}

        <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
          <Input
            label="Name"
            type="text"
            placeholder="Alejandro"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
          />

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
            placeholder="At least 8 characters"
            value={form.password}
            onChange={(event) => updateField("password", event.target.value)}
          />

          <Button type="submit" className="mt-2" disabled={status === "loading"}>
            {status === "loading" ? "Creating account..." : "Create account"}
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
