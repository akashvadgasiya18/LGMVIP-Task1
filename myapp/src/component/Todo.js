import React from "react";
import './Style.css'

const Todo = ({ items, completeData, removeData }) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          className={item.isComplete ? "complete list-div" : "list-div"}
          key={index}
        >
          <div className="list-text">{item.text}</div>
          <div className="icons" key={item.id}>
            <i
              className={item.isComplete ? 'hide' : 'fa-solid fa-check'}
              onClick={() => {
                completeData(item.id);
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
