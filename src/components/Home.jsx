import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { searchHeroesAction } from '../redux/actionReducers'
import './home.css'
import SearcList from "./SearchList";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchHeroesAction())
  }, [])
  return (
    <>
      <div className="homeContainer">
        <SearcList />
      </div>

    </>
  );
};

export default Home;



