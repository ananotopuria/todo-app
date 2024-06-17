import React, { useState } from "react";
import Form from "../components/Form";
import { nanoid } from "nanoid";
import Items from "../components/Items";

interface Item {
  name: string;
  completed: boolean;
  id: string;
}

const App: React.FC = () => {
  const getLocalStorage = (): Item[] => {
    let list = localStorage.getItem("list");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };

  const setLocalStorage = (items: Item[]) => {
    localStorage.setItem("list", JSON.stringify(items));
  };

  const defaultList: Item[] = getLocalStorage();

  const [items, setItems] = useState<Item[]>(defaultList);

  const addItem = (itemName: string) => {
    const newItem: Item = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (itemId: React.Key | null | undefined) => {
    if (typeof itemId === "string") {
      const newItems = items.filter((item) => item.id !== itemId);
      setItems(newItems);
      setLocalStorage(newItems);
    }
  };

  const editItem = (itemId: React.Key | null | undefined) => {
    if (typeof itemId === "string") {
      const newItems = items.map((item) => {
        if (item.id === itemId) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      setItems(newItems);
      setLocalStorage(newItems);
    }
  };

  return (
    <div className="bg-[#172621] w-full h-screen bg-cover bg-center text-center">
      <section className="bg-[#172621]  w-full h-screen">
        <h1 className="text-white text-6xl p-4">Taskboard</h1>
        <Form addItem={addItem} />
        <Items items={items} removeItem={removeItem} editItem={editItem} />
      </section>
    </div>
  );
};

export default App;
