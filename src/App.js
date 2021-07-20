import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTaskForm from "./components/AddTaskForm";
import About from "./components/About";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

/* Managing state in app js file and 2-way communication is carried with 
      vannila state management, components are interacted with props. */

function App() {
  const [showAdd, setshowAdd] = useState(true);
  const [tasks, setTasks] = useState([]);

  const apiEndpoint = "http://localhost:5000/";

  useEffect(() => {
    const getTasks = async () => {
      const taskArray = await fetchTasks();
      setTasks(taskArray);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch(apiEndpoint + "tasks");
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(apiEndpoint + `tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const addTask = async (task) => {
    const res = await fetch(apiEndpoint + "tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  const deleteTask = async (id) => {
    const res = await fetch(apiEndpoint + `tasks/${id}`, {
      method: "DELETE",
    });
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert("Error deleting the task");
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(apiEndpoint + `tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          showAdd={showAdd}
          onbtnClick={() => setshowAdd(!showAdd)}
        ></Header>
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {!showAdd && <AddTaskForm onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  ondelClicked={deleteTask}
                  onDoubleClick={toggleReminder}
                ></Tasks>
              ) : (
                <p>No tasks left</p>
              )}
            </>
          )}
        ></Route>
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
