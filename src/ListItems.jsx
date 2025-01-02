import { useState } from "react";
import {
  TextField,
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

export default function ListItems({
  task,
  toggleTaskStatus,
  deleteTask,
  editTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.task);

  const handleToggle = () => {
    toggleTaskStatus(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, editedTask);
    }
    setIsEditing(!isEditing);
  };

  return (
    <>
      <ListItem
        sx={{
          padding: "10px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          marginBottom: "8px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
        }}>
        <Checkbox
          color="success"
          checked={task.isDone}
          onClick={handleToggle}
        />
        {isEditing ? (
          <TextField
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            sx={{ flex: 1 }}
          />
        ) : (
          <ListItemText
            primary={task.task}
            sx={{
              marginLeft: "16px",
              flex: 1,
              textDecoration: task.isDone ? "line-through" : "none",
            }}
          />
        )}
        <div className="actions">
        {isEditing ? (<IconButton
            edge="end"
            aria-label="edit"
            sx={{ marginLeft: "10px" }}
            onClick={handleEdit}>
            <AddIcon fontSize="small" />
          </IconButton>) :(<IconButton
            edge="end"
            aria-label="edit"
            sx={{ marginLeft: "10px" }}
            onClick={handleEdit}>
            <Edit fontSize="small" />
          </IconButton>)}
          <IconButton
            edge="end"
            aria-label="delete"
            sx={{ marginLeft: "10px", marginRight: "10px" }}
            onClick={handleDelete}>
            <Delete fontSize="small" />
          </IconButton>
        </div>
      </ListItem>
    </>
  );
}
