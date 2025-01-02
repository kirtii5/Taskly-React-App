import TaskAltIcon from "@mui/icons-material/TaskAlt";
import "./Heading.css";
export default function Heading() {
  return (
    <div className="Heading">
      <h1>
        Taskly
        <TaskAltIcon
          fontSize="large"
          sx={{ marginLeft: "15px", verticalAlign: "middle" }}
        />
      </h1>
    </div>
  );
}
