import ListItem from "./ListItem";
import "./List.css";
export const List = ({ activities, onDeleteActivity }) => {
  return (
    <ul className="list">
      {activities.map(({ id, name }) => {
        return (
          <ListItem key={id}>
            {name}
            <button
              className="delete-button"
              onClick={() => onDeleteActivity(id)}
            >
              {" "}
              &#x2717;
            </button>
          </ListItem>
        );
      })}
    </ul>
  );
};

export default List;
