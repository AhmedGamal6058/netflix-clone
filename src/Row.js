
import "./Row.css";
import React from 'react';
import { useState,useEffect } from "react";
import axios from "axios";
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const baseURL="https://image.tmdb.org/t/p/w500";
function Row({title,fetchUrl,largeone}) {
  const [movies,setMovies]=useState([]);
  useEffect(()=>{
    async function fetchdata(){
      const request= await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchdata();
  },[fetchUrl]);
  return (
    <div className="row">
      <div className="title">
          <h2>{title}</h2>
        </div>
      <div className="posters-row">
        {
          movies.map(movie =>(
            <img className={`row-poster ${largeone && "row-largePoster" }`} src={`${baseURL}${largeone ? movie.poster_path : movie.backdrop_path}`} key={movie.id} />
          ))
        }
        
      </div>
    </div>
  )
}

export default Row;