import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((taskItem) => (
        <Task key={taskItem.id} task={taskItem} />
      ))}
    </>
  );
};

export default Tasks;
