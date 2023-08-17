import React, {useState} from 'react'
import MovieList from './Components/MovieList'
import MovieDisplay from './Components/MovieDisplay'

const App = () => {
    
    const [selectedMovie, setSelectedMovie] = useState("")
  

    // console.log(selectedMovie)
      

            
       
    return(
        <div>
            <h1>Movie List</h1> 
            <MovieList  addMovie={setSelectedMovie}/>
            <MovieDisplay  movieToBeDisplayed={selectedMovie}/>
           
            
        </div>
    )

   
}

export default App


// const hello = () =>{
//     console.log("hello")
// }

// hii = hello