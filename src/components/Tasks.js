import Task from "./Task";

const Tasks = ({ tasks, ondelClicked, onDoubleClick }) => {
  return (
    <>
      {tasks.map((taskItem) => (
        <Task
          key={taskItem.id}
          task={taskItem}
          ondelClicked={ondelClicked}
          onDoubleClick={onDoubleClick}
        />
      ))}
    </>
  );
};

export default Tasks;
