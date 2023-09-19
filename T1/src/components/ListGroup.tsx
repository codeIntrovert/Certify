import {} from "react";

function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia"];
  const Message =
    items.length === 0 ? <p>There are no items in the list.</p> : null;
  return (
    <>
      <h1>ListGroup</h1>
      {Message}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
