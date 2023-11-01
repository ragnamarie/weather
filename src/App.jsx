import "./App.css";
import { uid } from "uid";
import { Form } from "./components/Form/Form.jsx";
import { List } from "./components/List/List";

import { useState } from "react";
import { useEffect } from "react";

import useLocalStorageState from "use-local-storage-state";

export function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  }); // The second argument is the initial value

  function handleAddActivity(newActivity) {
    // Add a unique ID to the new activity
    newActivity.id = uid();
    // Update the activities state with the new activity
    setActivities([...activities, newActivity]);
  }

  const [weather, setWeather] = useState(null);
  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather/europe"
        );
        if (response.ok) {
          const data = await response.json();
          setWeather(data);
        } else {
          console.error("Failed!!");
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchWeather();
    // const timer = setInterval(fetchWeather, 5000);

    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  if (!weather) {
    return (
      <div className="app-loading">
        <strong>Loading...</strong>
      </div>
    );
  }

  return (
    <>
      <h1 className="app-heading">
        <span>{weather.condition}</span>
        <span>{weather.temperature}&nbsp;&#8451;</span>
      </h1>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}

export default App;
