import "./List.css";
import ListItems from "./ListItems";

export default function List({ tasks, setTasks }) {
  const toggleTaskStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const editTask = (id, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, task: updatedTask } : task
      )
    );
  };

  return (
    <div className="List">
      <div className="content">
        {tasks.map((task) => (
          <ListItems
            key={task.id}
            task={task}
            toggleTaskStatus={toggleTaskStatus}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </div>
    </div>
  );
}
