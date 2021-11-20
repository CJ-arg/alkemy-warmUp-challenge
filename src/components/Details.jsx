// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { editPost, removePost } from "../redux/actionReducers"
import "./details.css"


const Details = () => {
  const postDetail = useSelector(store => store.searchList.detail)
  const dispatch = useDispatch();
  return (
    <div className="contDetail">
      {postDetail.map((item) => (
        <div key={item.id} className="card1 mb-3 detailcard " >
          <div className="card-body">
            <p>{item.name}</p>
            <div className="user-text">USER:{item.userId} Post: {item.id} </div>
            <div className="title-div">  <span className="card-text">{item.title.toUpperCase()} </span><br /></div>
            <div className="title-div">  <span className="card-text">{item.body} </span><br /></div>
          </div>
          <Link to='details'>
            <button
              className="btn btn-success btn-m ms-3 float-center "
              onClick={() => dispatch(editPost(item.id, item))}
            >Edit</button></Link>
          <Link to='home'>
            <button
              className="btn btn-danger btn-m ms-3 float-center"
              onClick={() => dispatch(removePost(item.id))}
            >Delete</button></Link>
        </div>
      ))
      }
    </div >
  );
};

export default Details;



