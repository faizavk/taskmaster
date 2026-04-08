import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ title: "", description: "", priority: "Medium", dueDate: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
  <div className="row">
    <input
      placeholder="Title"
      value={form.title}
      onChange={(e) => setForm({ ...form, title: e.target.value })}
    />

    <textarea
      placeholder="Description"
      value={form.description}
      onChange={(e) => setForm({ ...form, description: e.target.value })}
    />
  </div>

  <div className="row">
    <select
      value={form.priority}
      onChange={(e) => setForm({ ...form, priority: e.target.value })}
    >
      <option>High</option>
      <option>Medium</option>
      <option>Low</option>
    </select>

    <input
      type="date"
      value={form.dueDate}
      onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
    />

    <button>Add Task</button>
  </div>
</form>
  );
}