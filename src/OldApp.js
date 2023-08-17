import React, {useState} from 'react'

let moviesData = [
    {id:1, title: "The Shawshank Redemption", year: 1994, runtime: 142, genres: ["Crime", "Drama"]},
    {id:2, title: "The Godfather", year: 1972, runtime: 175, genres: ["Crime", "Drama"]},
    {id:3, title: "The Dark Knight", year: 2008, runtime: 152, genres: ["Action", "Crime", "Drama", "Thriller"]},
    {id:4, title: "The Godfather: Part II", year: 1974, runtime: 202, genres: ["Crime", "Drama"]},
    {id:5, title: "The Lord of the Rings: The Return of the King", year: 2003, runtime: 201, genres: ["Action", "Adventure", "Drama", "Fantasy"]},
    {id:6, title: "Pulp Fiction", year: 1994, runtime: 154, genres: ["Crime", "Drama"]},
    {id:7, title: "Schindler's List", year: 1993, runtime: 195, genres: ["Biography", "Drama", "History"]},
]

const App1 = () => {
    const [selectedMovie, setSelectedMovie] = useState("")

    console.log(selectedMovie)
      

    // let arr = moviesData.map((movie)=> movie.genres)
    // console.log(arr)
            
       
    return(
        <div>
            <h1>Movie List</h1> 
            <div className='movies-list'>
                {
                moviesData.map((movie)=>(
                            <h1 onClick={()=>setSelectedMovie(movie)}>{movie.title}</h1>
                        ))
                }
                
 
            </div>
          {  selectedMovie &&
           (
            <div className='movie-display'>
                 <h1> Movie Info</h1>
                <h1>{selectedMovie.title}</h1>
                <p>{selectedMovie.year}</p>
                <p>{selectedMovie.runtime}</p>
                <p>{selectedMovie.genres.join(",")}</p>
                

            </div>
           )
          }
            
        </div>
    )

   
}

export default App1