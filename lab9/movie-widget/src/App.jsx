import React, { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import { movies } from './data/movies';

function App() {
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    // Sequential switching using localStorage
    const lastIndex = parseInt(localStorage.getItem('lastMovieIndex') || '-1', 10);
    const nextIndex = (lastIndex + 1) % movies.length;
    setCurrentMovie(movies[nextIndex]);
    localStorage.setItem('lastMovieIndex', nextIndex.toString());
  }, []);

  return (
    <div className="app-container">
      {currentMovie && <MovieCard movie={currentMovie} />}
    </div>
  );
}

export default App;
