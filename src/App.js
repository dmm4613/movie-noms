import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue) => {
        const url = `https://www.omdbapi.com/?apikey=b1f40189&s=${searchValue}`;
        
        const response = await fetch(url);
        const responseJSON = await response.json();

        if(responseJSON.Search) {
            setMovies(responseJSON.Search);
        };
    };

    useEffect(()=> {
        getMovieRequest(searchValue);
    }, [searchValue]);

    console.log(movies);

    return (
        <div className="container-fluid movie-app">
            <div className='movie-list-heading row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading="Top 5 Movie Nominations" />
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className='row'>
                <MovieList movies={movies} />
            </div>
        </div>
    );
};

export default App;