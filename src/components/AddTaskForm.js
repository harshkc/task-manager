import { useState } from "react";
const AddTaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDateTime, setTaskDateTime] = useState("");
  const [isReminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !taskDateTime) {
      alert("Don't leave the fields empty");
      return;
    }

    onAdd({
      text: taskName,
      day: taskDateTime,
      reminder: isReminder,
      id: Math.floor(Math.random(1000) * 13) + 1,
    });

    setTaskName("");
    setTaskDateTime("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task name</label>
        <input
          type="text"
          value={taskName}
          placeholder="Enter task name"
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Task date & time</label>
        <input
          type="text"
          value={taskDateTime}
          placeholder="Enter date and time"
          onChange={(e) => setTaskDateTime(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <input
          type="checkbox"
          checked={isReminder}
          value={isReminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTaskForm;
