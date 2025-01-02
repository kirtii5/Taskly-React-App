import Paper from "@mui/material/Paper";
import "./Input.css";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import { useState } from "react";

export default function Input({ addTask }) {
  let [newTask, setNewTask] = useState("");

  let updateTask = (event) => {
    setNewTask(event.target.value);
  };

  let handleAddTask = () => {
    if (newTask != "") {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <>
      <div className="Input">
        <Paper
          component="form"
          className="inputBox"
          onChange={updateTask}
          sx={{
            p: "20px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <InputBase
            value={newTask}
            placeholder="Add new..."
            sx={{ flex: 1 }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}>
            <Button
              variant="contained"
              href="#contained-buttons"
              sx={{ marginLeft: "30px", backgroundColor: "#5050c8" }}
              onClick={handleAddTask}>
              Add
            </Button>
          </div>
        </Paper>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "40px",
        }}>
        <Divider variant="middle" sx={{ width: "900px" }} />
      </div>
    </>
  );
}
