import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const emptyForm = {
  name: "",
  description: "",
};

export default function SubbranchForm({
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
        description: initialValues.description || "",
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
      description: form.description,
    });

    if (!initialValues) {
      setForm(emptyForm);
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <Input
        label="Subbranch name"
        placeholder="Boulevard"
        value={form.name}
        onChange={(event) => updateField("name", event.target.value)}
      />

      <Input
        label="Description"
        placeholder="The city, distance, and quiet urban loneliness."
        value={form.description}
        onChange={(event) => updateField("description", event.target.value)}
      />

      <div className="flex flex-wrap gap-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Saving..."
            : initialValues
              ? "Update Subbranch"
              : "Create Subbranch"}
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
