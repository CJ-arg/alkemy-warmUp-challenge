import React, { useState } from "react";
import "./form.css";


const Form = ({ addTask }) => {
  const [inputTitleValue, setInputTitleValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleFormSub = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    addTask({ title: inputValue, completed: false, priority: checked });
    setInputValue("");
  };


  return (
    <form onSubmit={handleFormSub}>
      <div className="row">
        <div className="col-sm-2"></div>

        <div className="col-sm-6">
          <input
            value={inputValue}
            onChange={handleInputChange}
            className="todoInput"
            placeholder="title..."
          />
          <input
            value={inputValue}
            onChange={handleInputChange}
            className="todoInput"
            placeholder="your post...."
          />
          <div>
          </div>
        </div>
        <div className="col-sm-4 todoButton2">
          <button
            className="btn btn-danger btn-m ms-3 float-center"
            onClick={() => dispatch(newPost(item.id))}
          >Post</button>
        </div>
      </div>
    </form >
  );
};

export default Form;
