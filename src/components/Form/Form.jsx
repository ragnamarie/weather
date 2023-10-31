export function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Extract the values
    const name = formData.get("name");
    const isForGoodWeather = formData.get("checkbox") === "on";

    // Create the data object
    const data = {
      name,
      isForGoodWeather,
    };

    // Call onAddActivity and pass the data object as an argument
    onAddActivity(data);

    event.target.reset();
    console.log(data);
  }

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <h2 className="entry-form__title">Add new activity:</h2>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="motto">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="entry-form__field">
          <input type="checkbox" id="checkbox" name="checkbox" />
          <label htmlFor="checkbox">Good-weather activity</label>
        </div>
        <div className="entry-form__button-wrapper">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}
