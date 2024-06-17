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
    <div className="flex gap-10">
          <button
            className="bg-[#97051d] hover:bg-[#ef233c] text-white font-bold rounded-md px-2 py-1 transition duration-200 ease-in-out transform hover:shadow-lg focus:shadow-outline focus:outline-none focus:ring-2 focus:ring-[#2a4038]"
            type="button"
            onClick={() => removeItem(item.id)}
          >
            x
          </button>
      <input
        type="checkbox"
        className="appearance-none h-6 w-6 border-2 border-[#fff] rounded-full checked:bg-[#fff] checked:border-transparent focus:outline-none transition duration-150 ease-in-out"
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
    </div>
  );
};

export default SingleItem;
