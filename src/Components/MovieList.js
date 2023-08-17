import React,{useState} from "react";
import moviesData from "../datas/moviesData";
import MovieDisplay from "./MovieDisplay";


const MovieList = ({addMovie}) => {
     
     return(
        <div className='movies-list'>
                {
                moviesData.map((movie)=>(
                            <h1 onClick={()=>(movie)}>{movie.title}</h1>
                        ))
                }
                
       
 
        </div>
     )

}

export default MovieList;