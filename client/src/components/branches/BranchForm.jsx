import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const initialForm = {
  name: "",
  description: "",
  mood: "",
};

export default function BranchForm({ onSubmit, isSubmitting = false }) {
  const [form, setForm] = useState(initialForm);

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
      mood: form.mood,
    });

    setForm(initialForm);
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <Input
        label="Branch name"
        placeholder="Superior"
        value={form.name}
        onChange={(event) => updateField("name", event.target.value)}
      />

      <Input
        label="Description"
        placeholder="Main theme in Adech Themes."
        value={form.description}
        onChange={(event) => updateField("description", event.target.value)}
      />

      <Input
        label="Mood"
        placeholder="Cold, calm, introspective"
        value={form.mood}
        onChange={(event) => updateField("mood", event.target.value)}
      />

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creating..." : "Create Branch"}
      </Button>
    </form>
  );
}
