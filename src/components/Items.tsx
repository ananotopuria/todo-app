import React from "react";
import SingleItem from "./SingleItem";

interface Item {
  id: React.Key | null | undefined;
  name: string;
  completed: boolean;
}

interface ItemsProps {
  items: Item[];
  removeItem: (id: React.Key | null | undefined) => void;
  editItem: (id: React.Key | null | undefined) => void;
}

const Items: React.FC<ItemsProps> = ({ items, removeItem, editItem }) => {
  return (
    <div className="bg-red-500">
      {items.map((item) => (
        <SingleItem
          key={item.id}
          item={item}
          removeItem={removeItem}
          editItem={editItem}
        />
      ))}
    </div>
  );
};

export default Items;
