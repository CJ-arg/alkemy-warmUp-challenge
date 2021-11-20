import React, { useState } from "react";
import { newPost } from "../redux/actionReducers"
import { useDispatch } from 'react-redux'
import "./form.css";


const Form = ({ addTask }) => {

  const dispatch = useDispatch();
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

        <div className="col-sm-8">
          <input
            value={inputValue}
            onChange={handleInputChange}
            className="todoInput"
            placeholder="title..."
          />
          <textarea
            value={inputValue}
            onChange={handleInputChange}
            className="todoInput"
            placeholder="your post...."
          />
          <div>
          </div>
        </div>
        <br />
      </div>

      <div className="todoButton2">

        <button
          className="btn btn-dark btn-m ms-3 float-center"
          onClick={() => dispatch(newPost(item.id))}
        >Post</button>
      </div>
    </form >
  );
};

export default Form;
