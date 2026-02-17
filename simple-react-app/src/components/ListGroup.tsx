import { useState } from "react";

interface ListGroupProps {
  readonly heading: string;
  readonly items: string[];
  readonly onSelectItem: (item: string) => void;
}

function ListGroup({ heading, items, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const emptyMessage = items.length === 0 && <p>No items found</p>;

  return (
    <>
      <h1>{heading}</h1>
      {emptyMessage}
      <ul // NOSONAR
        tabIndex={0} // NOSONAR - to make it focusable
        className="list-group"
        style={{ outline: "none" }}
      >
        {items.map((item, index) => (
          <li // NOSONAR
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={(_event) => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
