import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTaskForm from "./components/AddTaskForm";
import { useState } from "react";

/* Managing state in app js file and 2-way communication is carried with 
      vannila state management, components are interacted with props. */

function App() {
  const [showAdd, setshowAdd] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 22,
      name: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 12,
      name: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
  ]);

  const addTask = (task) => {
    console.log(task);

    setTasks([...tasks, task]);
    console.log(tasks);
  };

  return (
    <div className="container">
      <Header
        showAdd={showAdd}
        onbtnClick={() => setshowAdd(!showAdd)}
      ></Header>
      {!showAdd && <AddTaskForm onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks}></Tasks> : <p>No tasks left</p>}
      <Footer />
    </div>
  );
}

export default App;
