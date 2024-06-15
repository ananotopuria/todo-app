import React from "react";

interface Item {
  id: React.Key | null | undefined;
  name: string;
  completed: boolean;
}

interface SingleItemProps {
  item: Item;
  removeItem: (id: React.Key | null | undefined) => void;
  editItem: (id: React.Key | null | undefined) => void;
}

const SingleItem: React.FC<SingleItemProps> = ({
  item,
  removeItem,
  editItem,
}) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed ? "line-through" : "none",
        }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
