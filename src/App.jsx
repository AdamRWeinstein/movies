import { useState, useEffect } from 'react'
import './App.css'
import Movie from './components/Movie'

function App() {
 const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('/api/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
  }, [])

  return (
    <div>
      <header>
        <h1>Movies</h1>
      </header>
      <main>
        {movies.map((movie, index) => (
            <Movie 
              key={index}
              movie={movie}
            />
        ))}
      </main>
    </div>
  )
}

export default App
