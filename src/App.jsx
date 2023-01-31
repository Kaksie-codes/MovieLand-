import { useState, useEffect } from 'react'
import searchIcon from './search.svg'
import './App.css'
import MovieCard from './Components/MovieCard'


// const API_KEY = 'b94225afo'
const API_KEY = 'c032e2d7'

const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`
// const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`

const movie1 = {  
    "Title": "Superman, Spiderman or Batman",
    "Year": "2011",
    "imdbID": "tt2084949",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}


function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const getMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()    
    setMovies(data.Search)
  }

  useEffect(() => {
    getMovies('spiderman')
  },[])

  return (
      <div className='app'>
        <h1>MovieLand</h1>

        <div className='search'>
            <input 
              type="text"
              onChange={(e)=>{setSearchTerm(e.target.value)}}
              placeholder = 'search for movies'
              value={searchTerm}
            />
            <img 
            src={searchIcon} 
            alt="search icon" 
            onClick={() => {getMovies(searchTerm)}}
            />        
        </div>

        {movies.length > 0 ? <div className='container'>
            {movies.map(movie => <MovieCard movie={movie}/>)}            
        </div> : <div><h2 className='empty'>No Movies Found</h2></div>}
      </div>

  )        
  
}

export default App
