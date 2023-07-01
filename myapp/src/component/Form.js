import React, { useState } from "react";
import './Style.css'

const Form = (props) => {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addData({
      id: Math.floor(Math.random() * 1000000),
      text: data,
      isComplete: false,
    });
    setData("");
  };
  return (
    <>
      <form className="form1">
        <input
          type="text"
          placeholder="Enter Anything.."
          value={data}
          name="text"
          onChange={handleChange}
          className="list-input"
        />
        <button type="submit" className="add-btn" onClick={handleSubmit}>
          ADD
        </button>
      </form>
    </>
  );
};
export default Form;
