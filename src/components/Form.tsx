import { useState } from "react";

interface FormProps {
  addItem: (itemName: string) => void;
}

function Form({ addItem }: FormProps) {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!newItemName) return;
    addItem(newItemName);
    setNewItemName("");
  };

  return (

    <div className="p-4">
      {" "}
      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <div className="flex">
          <input
            type="text"
            className="border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:border-green-500"
            placeholder="Add your task"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-r-md px-4 py-2"
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
