import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

/* Managing state in app js file and 2-way communication is carried with 
      vannila state management, components are interacted with props. */

function App() {
  const tasks = [
    {
      id: 1,
      name: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      name: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
  ];
  return (
    <div className="container">
      <Header btnText="Add"></Header>
      <Tasks tasks={tasks}></Tasks>
      <Footer />
    </div>
  );
}

export default App;
