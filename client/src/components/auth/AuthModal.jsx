import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Button from "../ui/Button";
import Card from "../ui/Card";
import ErrorMessage from "../ui/ErrorMessage";
import Input from "../ui/Input";

export default function AuthModal({ mode, onClose, onModeChange }) {
  const { login, register } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const isRegister = mode === "register";

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

      if (isRegister) {
        await register({
          name: form.name,
          email: form.email,
          password: form.password,
        });
      } else {
        await login({
          email: form.email,
          password: form.password,
        });
      }

      onClose();
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-adech-bg-ink/80 px-4 backdrop-blur">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        aria-label="Close authentication modal"
      />

      <Card className="relative w-full max-w-md p-6">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-adech-text-soft">
              {isRegister ? "Create account" : "Welcome back"}
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-adech-text">
              {isRegister ? "Sign up" : "Login"}
            </h2>

            <p className="mt-2 text-sm leading-6 text-adech-text-muted">
              {isRegister
                ? "Start creating your own Adech-inspired Branches."
                : "Access your Branches, Subbranches, and Color Tokens."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-adech-border px-3 py-1 text-sm text-adech-text-muted hover:bg-adech-surface hover:text-adech-text"
          >
            Close
          </button>
        </div>

        {error && (
          <div className="mb-5">
            <ErrorMessage message={error} />
          </div>
        )}

        <form className="grid gap-4" onSubmit={handleSubmit}>
          {isRegister && (
            <Input
              label="Name"
              placeholder="Alejandro"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
            />
          )}

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

          <Button type="submit" disabled={status === "loading"}>
            {status === "loading"
              ? isRegister
                ? "Creating account..."
                : "Logging in..."
              : isRegister
                ? "Create account"
                : "Login"}
          </Button>
        </form>

        <p className="mt-5 text-sm text-adech-text-muted">
          {isRegister ? "Already have an account?" : "Don’t have an account?"}{" "}
          <button
            type="button"
            className="text-adech-text-soft hover:text-adech-accent"
            onClick={() => onModeChange(isRegister ? "login" : "register")}
          >
            {isRegister ? "Login" : "Sign up"}
          </button>
        </p>
      </Card>
    </div>
  );
}
