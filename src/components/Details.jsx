// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { editPost, removePost } from "../redux/actionReducers"
import Form from "./Form";
import "./details.css"


const Details = () => {
  const postDetail = useSelector(store => store.searchList.detail)

  const [renderForm, setRenderForm] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [titleEdit, setTitleEdit] = useState('')
  const [bodyEdit, setBodyEdit] = useState('')

  const dispatch = useDispatch();


  const handleOnKeyDown = (e) => {
    const key = e.keyCode
    if (key === 13 || key === 27) {
      setIsEditing(false)
    }
  }
  const handleOnClickEdit = () => {
    setTitleEdit(postDetail[0].title)
    setBodyEdit(postDetail[0].body)
    setIsEditing(true)
  }
  const handleInputChange = (e) => {
    setBodyEdit(e.target.value)
  }
  const handleInputChangeTitle = (e) => {
    setTitleEdit(e.target.value)
  }
  const handleOnClickEditSubmit = (e) => {
    e.preventDefault
    setTitleEdit(e.target.value)
    setBodyEdit(e.target.value)
    setIsEditing(false)
  }

  return (isEditing ? <div className="contDetail">
    <div className="card1 mb-3 detailcardedit" >
      <div className="card-body">EDIT YOUR POST </div>

      <input
        value={titleEdit}
        onChange={handleInputChangeTitle}
        onKeyDown={handleOnKeyDown}
        className="todoInput"
        placeholder="title..."
      />
      <textarea
        value={bodyEdit}
        onChange={handleInputChange}
        onKeyDown={handleOnKeyDown}
        className="todoInput"
        autoFocus={true}
        placeholder="your post...."
      />

      <div className="editButton" ><button
        className="btn btn-success btn-m ms-3 float-end "
        onClick={handleOnClickEditSubmit}
      >Submit</button></div>

    </div>
  </div> :

    <div >
      {postDetail.map((item) => (
        <div className="contDetail">
          <div key={item.id} className="card1 mb-3 detailcard " >
            <div className="card-body">
              <p>{item.name}</p>
              <div className="user-text">USER:{item.userId} Post: {item.id} </div>
              <div className="title-div">  <span className="card-text">{item.title.toUpperCase()} </span><br /></div>
              <div className="title-div">  <span className="card-text">{item.body} </span><br /></div>
            </div>
            <div className="mb-0" > <button
              className="btn btn-success btn-m ms-3 float-center "
              onClick={() => (setRenderForm(!renderForm))}
            >Post</button>
              <Link to='details'>
                <button
                  className="btn btn-success btn-m ms-3 float-center "
                  onClick={handleOnClickEdit}
                >Edit</button></Link>

              <Link to='home'>
                <button
                  className="btn btn-danger btn-m ms-3 float-center"
                  onClick={() => dispatch(removePost(item.id))}
                >Delete</button></Link></div>

          </div> </div>
      ))
      }
      <div>{renderForm && <Form />}</div>

    </div >
  );
};

export default Details;



