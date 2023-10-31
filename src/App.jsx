import "./App.css";
import Form from "./components/Form/Form.jsx";
import { useState } from "react";

export function App() {
  const [activity, setActivity] = useState("");

  function handleAddActivity(newActivity) {
    setActivity(newActivity);
  }

  return (
    <>
      <h1>hello</h1>
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}

export default App;
