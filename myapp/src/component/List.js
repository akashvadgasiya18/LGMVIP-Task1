import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
import "./Style.css";

const List = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [editdata, setEditdata] = useState(null);

  // const addData = (task) => {
  //   if (!task.text) {
  //     return;
  //   }

  //   const newData = [task, ...items];
  //   setItems(newData);
  // };

  return (
    <>
      <Form
        // addData={addData}
        input={input}
        setInput={setInput}
        items={items}
        setItems={setItems}
        editdata={editdata}
        setEditdata={setEditdata}
      />
      <Todo
        items={items}
        setItems={setItems}
        editdata={editdata}
        setEditdata={setEditdata}
      />
    </>
  );
};

export default List;
