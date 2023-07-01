import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
import './Style.css'

const List = () => {
  const [items, setItems] = useState([]);

  const addData = (task) => {
    if (!task.text) {
      return;
    }

    const newData = [task, ...items];
    setItems(newData);
  };

  const removeData = (id) => {
    let updatedData = [...items].filter((task) => task.id !== id);
    setItems(updatedData);
  };

  const completeData = (id) => {
    let updatedData = items.map((task) => {
      if (task.id === id) {
        task.isComplete = true;
      }

      return task;
    });
    setItems(updatedData);
  };

  return (
    <>
      <Form addData={addData} />
      <Todo items={items} completeData={completeData} removeData={removeData} />
    </>
  );
};

export default List;
