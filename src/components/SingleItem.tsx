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
    <div className="flex justify-center gap-5">
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
        className="bg-red-800"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
