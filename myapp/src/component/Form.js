import React, { useEffect } from "react";
import "./Style.css";

const Form = ({
  // addData,
  input,
  setItems,
  setInput,
  items,
  editdata,
  setEditdata,
}) => {
  // const [data, setData] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const updateTodo = (text, id, isComplete) => {
    const newTodo = items.map((item) => {
      return item.id === id ? { text, id, isComplete } : item;
    });
    setItems(newTodo);
    setEditdata("");
  };

  useEffect(() => {
    if (editdata) {
      setInput(editdata.text);
    } else {
      setInput("");
    }
  }, [setInput, editdata]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editdata) {
      setItems([
        ...items,
        {
          id: Math.floor(Math.random() * 1000000),
          text: input,
          isComplete: false,
        },
      ]);
      setInput("");
    } else {
      updateTodo(input, editdata.id, editdata.isComplete);
    }
  };
  return (
    <>
      <form className="form1" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Anything.."
          value={input}
          onChange={handleChange}
          className="list-input"
          required
        />
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </>
  );
};
export default Form;
