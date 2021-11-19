import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { searchHeroesAction } from '../redux/actionReducers'
import './home.css'
import SearcList from "./SearchList";


const Home = () => {
  const dispatch = useDispatch();

  // const goodHeroes = useSelector(store => store.searchList.goodOnes)
  // const badHeroes = useSelector(store => store.searchList.badOnes)

  // const setProperties = () => {
  //   if (goodHeroes.length === 3 && badHeroes.length === 3) {
  //     let arrayHeroes = [...goodHeroes, ...badHeroes];
  //     const arrayIntelValue = arrayHeroes.map(heroe => {
  //       if (heroe.powerstats.intelligence === "null") {
  //         return 0;
  //       } else {
  //         return parseInt(heroe.powerstats.intelligence);
  //       }
  //     });
  //     let intelHeroesValue = arrayIntelValue.reduce((acumulador, elementoActual) => acumulador + elementoActual);
  //     setIntelligence(intelHeroesValue);
  //   }
  // }

  useEffect(() => {
    dispatch(searchHeroesAction())
  }, [])
  // useEffect(() => {
  //   const dataG = localStorage.getItem('goodteam')

  //   console.log(dataG);
  //   setGoodList(JSON.parse(dataG));
  //   const dataB = localStorage.getItem('badteam')
  //   setBadList(JSON.parse(dataB))
  //   if ((badList && badList.length === 3) && (goodList && goodList.length === 3)) {
  //     setPower(true)
  // }
  //   setProperties();
  // }, [])
  return (
    <>
      <div className="homeContainer">
        <SearcList />
      </div>

    </>
  );
};

export default Home;



