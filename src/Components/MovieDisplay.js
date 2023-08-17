
import React from "react";


const MovieDisplay = ({movieToBeDisplayed}) => {
    // props = {movieToBeDisplayed: {} }
    if(!movieToBeDisplayed) return null

    return(
        <div className='movie-display'>
                    <h2> Movie Info</h2>
                    <h2>{movieToBeDisplayed.title}</h2>
                    <p>{movieToBeDisplayed.year}</p>
                    <p>{movieToBeDisplayed.runtime}</p>
                    <p>{movieToBeDisplayed.genres.join(",")}</p>
                    

        </div>
    )
}

export default MovieDisplay;