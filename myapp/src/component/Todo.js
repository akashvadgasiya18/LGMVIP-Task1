import React from "react";
import "./Style.css";

const Todo = ({ items, setEditdata, setItems }) => {
 

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

  const editFormdata = ({ id }) => {
    let edit = items.find((item) => {
      return item.id === id;
    });
    setEditdata(edit);
  };

  return (
    <>
      {items.map((item, index) => (
        <div
          className={item.isComplete ? "complete list-div" : "list-div"}
          key={index}
        >
          <input
            className="list-text"
            value={item.text}
            onChange={(e) => e.preventDefault()}
          />
          <div className="icons" key={item.id}>
            <i
              className={item.isComplete ? "hide" : "fa-solid fa-check"}
              onClick={() => {
                completeData(item.id);
              }}
            ></i>
            <i
              class="fa-solid fa-edit"
              onClick={() => {
                editFormdata(item);
              }}
            ></i>
            <i
              class="fa-solid fa-trash"
              onClick={() => {
                removeData(item.id);
              }}
            ></i>
          </div>
        </div>
      ))}
    </>
  );
};

export default Todo;
