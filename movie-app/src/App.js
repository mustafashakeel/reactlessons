import './App.css';
import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');


  const getMovieRequest = async () => {
    console.log("searchValue", searchValue);
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=670b42a5&s=${searchValue}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log("!!", responseJson.Search);
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }

  }

  useEffect(() => {
    getMovieRequest();
  }, [searchValue])
  return (
    <div className="container-fluid">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
