// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import "./details.css"


const Details = () => {
  const postDetail = useSelector(store => store.searchList.detail)
  console.log(postDetail, 'goodHeroes');
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
              onClick={() => dispatch(detailHeroeAction(item.id))}
            >Edit</button></Link>
          <Link to='details'>
            <button
              className="btn btn-danger btn-m ms-3 float-center"
              onClick={() => dispatch(detailHeroeAction(item.id))}
            >Delete</button></Link>
        </div>
      ))
      }
    </div >
  );
};

export default Details;



