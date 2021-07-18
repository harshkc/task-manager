import { FaTimes } from "react-icons/fa";

const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>
        {task.name + " "}
        <FaTimes style={styleButton}></FaTimes>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

const styleButton = {
  color: "red",
  cursor: "pointer",
};

export default Task;
