import "./App.css";
import { uid } from "uid";
import { Form } from "./components/Form/Form.jsx";
import { useState } from "react";

export function App() {
  const [activity, setActivity] = useState("");

  function handleAddActivity(newActivity) {
    setActivity({ ...newActivity, id: uid() });
  }

  return (
    <>
      <h1>hello</h1>
      <Form onAddActivity={handleAddActivity} id={uid()}></Form>
    </>
  );
}

export default App;
