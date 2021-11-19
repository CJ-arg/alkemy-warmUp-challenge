import React from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addGoodHeroeAction, addBadHeroeAction } from "../redux/actionReducers"
import { detailHeroeAction } from "../redux/actionReducers"
// import Details from "./Details";
import "./searchList.css"

const SearcList = () => {
  // @ts-ignore
  const heroes = useSelector(store => store.searchList.array)
  const dispatch = useDispatch();
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4" >
      {heroes &&
        heroes.map(item => (
          <div className="card" >
            <div key={item.id} className="gridcard" >
              <div className="card-body">
                <div className="user-text">USER:{item.userId} Post: {item.id} </div>
                <div className="title-div">  <span className="card-text">{item.title.toUpperCase()} </span><br /></div>


                {/* {(item.biography.alignment === "good") ? <button
                    className="btn btn-dark btn-sm"
                    onClick={() => dispatch(addGoodHeroeAction(item.id))}
                  >Add good team </button> :
                    <button
                      className="btn btn-dark btn-sm "
                      onClick={() => dispatch(addBadHeroeAction(item.id))}
                    >Add bad team </button>
                  } */}
                <div className="buttons-div">
                  <Link to='details'>
                    <button
                      className="btn btn-info btn-m x1 float-center"
                      onClick={() => dispatch(detailHeroeAction(item.id))}
                    >Info</button></Link>

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



              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default SearcList;
