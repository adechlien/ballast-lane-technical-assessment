import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const emptyForm = {
  name: "",
  value: "",
  usage: "",
};

export default function ColorTokenForm({
  initialValues,
  onSubmit,
  onCancel,
  isSubmitting = false,
}) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (initialValues) {
      setForm({
        name: initialValues.name || "",
        value: initialValues.value || "",
        usage: initialValues.usage || "",
      });
    } else {
      setForm(emptyForm);
    }
  }, [initialValues]);

  function updateField(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await onSubmit({
      name: form.name,
      value: form.value,
      usage: form.usage,
    });

    if (!initialValues) {
      setForm(emptyForm);
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <Input
        label="Token name"
        placeholder="adech-boulevard-1"
        value={form.name}
        onChange={(event) => updateField("name", event.target.value)}
      />

      <div className="grid gap-3 md:grid-cols-[1fr_4rem] md:items-end">
        <Input
          label="Hex value"
          placeholder="#C7DCFF"
          value={form.value}
          onChange={(event) => updateField("value", event.target.value)}
        />

        <div
          className="h-10 rounded-xl border border-adech-border bg-adech-bg-deep"
          style={{
            backgroundColor: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(
              form.value.trim()
            )
              ? form.value
              : undefined,
          }}
          aria-label="Color preview"
        />
      </div>

      <Input
        label="Usage"
        placeholder="Used for soft backgrounds and calm interface surfaces."
        value={form.usage}
        onChange={(event) => updateField("usage", event.target.value)}
      />

      <div className="flex flex-wrap gap-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Saving..."
            : initialValues
              ? "Update Color Token"
              : "Create Color Token"}
        </Button>

        {onCancel && (
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}
