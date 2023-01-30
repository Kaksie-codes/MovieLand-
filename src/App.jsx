import { useState, useEffect } from 'react'

import './App.css'


const API_KEY = 'b94225afo'
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`

function App() {

  const getMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
  }

  useEffect(() => {
    
  },[])

  return (
      <h1>cow</h1>

  )        
  
}

export default App
