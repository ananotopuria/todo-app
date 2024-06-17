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
          <div className="flex items-center space-x-2 mx-auto">
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#2a4038] placeholder-gray-500 transition duration-200 ease-in-out transform hover:shadow-lg focus:shadow-outline focus:ring-2 focus:ring-[#2a4038] w-[15rem] md:w-[30rem]"
              placeholder="Task name"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#3b593f] hover:bg-[#4d734c] text-white font-bold rounded-md px-4 py-2 transition duration-200 ease-in-out transform hover:shadow-lg focus:shadow-outline focus:outline-none focus:ring-2 focus:ring-[#2a4038]"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
