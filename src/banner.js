import "./banner.css"
import React from 'react';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import request from './requests';
const baseURL="https://image.tmdb.org/t/p/w500";
function Banner(){
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        async function fetchdata(){
            const requests = await axios.get(request.netflixOriginal);
            setMovies(requests.data.results[Math.floor(Math.random()* requests.data.results.length)]);
            return requests;
        }
        fetchdata();
    },[])
    console.log(movies);
    return(
        <header className='banner' style={{backgroundSize:"cover", height:'40vh', backgroundImage:`url(${baseURL}${movies.poster_path})`, backgroundPosition:"center center"}}>
            <div className='banner-container' >
                <div className='banner-content' >
                    <h1 className="banner-title" >{movies?.name || movies?.title }</h1>
                    <div className='banner-buttons'>
                        <button type="" className='banner-button'>Play</button>
                        <button type="" className='banner-button'>List</button>
                    </div>
                    <h1 className='banner-description'>{movies?.overview}</h1>
                </div>
            </div>
            <div className="banner-fadebutton"/>
        </header>
    )
}
export default Banner;