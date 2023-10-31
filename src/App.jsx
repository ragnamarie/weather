import "./App.css";
import { uid } from "uid";
import { Form } from "./components/Form/Form.jsx";
import { useState } from "react";
import { List } from "./components/List/List";

export function App() {
  const [activities, setActivities] = useState([]); // Initialize with an empty array
  function handleAddActivity(newActivity) {
    // Add a unique ID to the new activity
    newActivity.id = uid();
    // Update the activities state with the new activity
    setActivities([...activities, newActivity]);
  }

  return (
    <>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}

export default App;
