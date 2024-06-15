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
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
