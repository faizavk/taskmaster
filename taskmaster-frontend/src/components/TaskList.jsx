import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-4">
        No tasks yet. Add one!
      </p>
    );
  }

  return (
  <div>
    {tasks.map((task) => (
      <TaskCard
        key={task.id}
        task={task}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    ))}
  </div>
);
}