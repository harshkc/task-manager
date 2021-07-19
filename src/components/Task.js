import { FaTimes } from "react-icons/fa";

const Task = ({ task, ondelClicked, onDoubleClick }) => {
  const delTask = () => {
    ondelClicked(task.id);
  };
  const toggleReminder = () => {
    onDoubleClick(task.id);
  };

  return (
    <div
      className={task.reminder ? "task reminder" : "task"}
      onDoubleClick={toggleReminder}
    >
      <h3>
        {task.text + " "}
        <FaTimes style={styleButton} onClick={delTask}></FaTimes>
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
