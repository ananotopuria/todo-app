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
    <form onSubmit={handleSubmit}>
      <h4>To Do List</h4>
      <div>
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type="submit">+</button>
      </div>
    </form>
  );
}

export default Form;
