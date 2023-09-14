import {} from "react";

function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia"];

  return (
    <>
      <h1>ListGroup</h1>
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
