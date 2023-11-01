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

  function handleDeleteActivity(id) {
    const updatedActivities = activities.filter(
      (activity) => activity.id !== id
    );
    setActivities(updatedActivities);
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
          console.log(data);
        } else {
          console.error("Failed!!");
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchWeather();
    const timer = setInterval(fetchWeather, 5000);

    return () => {
      clearInterval(timer);
      fetchWeather();
    };
  }, []);

  if (!weather) {
    return (
      <div className="app-loading">
        <strong>Loading...</strong>
      </div>
    );
  }

  const isGoodWeather = weather.isGoodWeather;
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  return (
    <>
      <h2>
        {weather.isGoodWeather
          ? "The weather is awesome! Go outside and: "
          : "Bad weather outside! Here is what you can do now:"}
      </h2>
      <h1 className="app-heading">
        <span>{weather.condition}</span>
        <span>{weather.temperature}&nbsp;&#8451;</span>
      </h1>
      <List
        activities={filteredActivities}
        isGoodWeather={isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}

export default App;
