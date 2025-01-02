import { useState } from "react";
import Heading from "./Heading";
import Input from "./Input";
import List from "./List";
import MainBtns from "./MainBtns";
import { v4 as id } from "uuid";

export default function TodoList() {
  const [tasks, setTasks] = useState([
    { id: id(), task: "Plan your day", isDone: false },
  ]);

  const addTask = (newTask) => {
    setTasks((prevTask) => {
        return [
          ...prevTask,
          {
            id: id(),
            task: newTask,
            isDone: false,
          },
        ];
      });
  };

  return (
    <div className="TodoList">
      <Heading />
      <Input addTask={addTask}/>
      <MainBtns tasks={tasks} setTasks={setTasks} />
      <List
        tasks={tasks}
        setTasks={setTasks} 
      />
    </div>
  );
}
