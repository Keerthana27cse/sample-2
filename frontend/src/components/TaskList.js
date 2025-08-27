export default function TaskList({ tasks, toggleTask, removeTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => toggleTask(task)}
          >
            {task.title}
          </span>
          <button onClick={() => removeTask(task._id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}
