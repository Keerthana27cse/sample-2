import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks, createTask, updateTask, deleteTask } from "./api";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((res) => setTasks(res.data));
  }, []);

  const addTask = async (task) => {
    const res = await createTask(task);
    setTasks([...tasks, res.data]);
  };

  const toggleTask = async (task) => {
    const res = await updateTask(task._id, { completed: !task.completed });
    setTasks(tasks.map((t) => (t._id === task._id ? res.data : t)));
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  return (
    <div className="App">
      <h1>MERN Task Manager ✅</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
    </div>
  );
}

export default App;
