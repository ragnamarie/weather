import ListItem from "./ListItem";
export const List = ({ activities }) => {
  return (
    <ul className="list__item-ul">
      {activities.map(({ id, name }) => {
        return (
          <ListItem key={id}>
            {name}
            {/* <button
              className="delete-button"
              onClick={() => onDeleteActivity(id)}
            >
              {" "}
              &#x2717;
            </button> */}
          </ListItem>
        );
      })}
    </ul>
  );
};

export default List;
