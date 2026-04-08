export default function TaskCard({ task, onToggle, onDelete }) {
  const isOverdue =
    !task.isCompleted && new Date(task.dueDate) < new Date();

  return (
    <div className={`task ${task.isCompleted ? "completed" : ""}`}>
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p><strong>{task.priority}</strong></p>

      <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>

      {isOverdue && <p className="overdue">⚠ Overdue</p>}

      <div className="buttons">
        <button className="complete" onClick={() => onToggle(task.id)}>
          {task.isCompleted ? "Undo" : "Complete"}
        </button>

        <button className="delete" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}