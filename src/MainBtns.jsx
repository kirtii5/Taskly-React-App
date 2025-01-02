import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import "./MainBtns.css";

export default function MainBtns({setTasks }) {
  const handleDeleteAll = () => {
    setTasks([]);
  };

  const handleUpperAll = () => {
    setTasks((tasks) =>
      tasks.map((task) => {
        return {
          ...task,
          task: task.task.toUpperCase(),
        };
      })
    );
  };
  const handleLowerAll = () => {
    setTasks((tasks) =>
      tasks.map((task) => {
        return {
          ...task,
          task: task.task.toLowerCase(),
        };
      })
    );
  };
  
  const handleAllDone = () => {
    setTasks((tasks) => {
      return tasks.map((task) => {
        return {
          ...task,
          isDone: true, 
        };
      });
    });
  };
  

  return (
    <div className="MainBtns">
      <Button
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon />}
        sx={{ marginLeft: "10px" }}
        onClick={handleDeleteAll}>
        Delete All
      </Button>
      <Button
        variant="outlined"
        sx={{ marginLeft: "10px", color: "#5050c8" }}
        onClick={handleUpperAll}>
        Uppercase All
      </Button>
      <Button
        variant="outlined"
        sx={{ marginLeft: "10px", color: "#5050c8" }}
        onClick={handleLowerAll}>
        LowerCase All
      </Button>
      <Button
        variant="outlined"
        color="success"
        startIcon={<DoneAllIcon />}
        sx={{ marginLeft: "10px" }}
        onClick={handleAllDone}>
        Mark All Done
      </Button>
    </div>
  );
}
