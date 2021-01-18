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
        const url = `https://www.omdbapi.com/?apikey=b1f40189&s=${searchValue}&type=movie`;
        
        const response = await fetch(url);
        const responseJSON = await response.json();

        if(responseJSON.Search) {
            setMovies(responseJSON.Search);
        };
    };

    useEffect(()=> {
        const timeoutId = setTimeout(() => getMovieRequest(searchValue), 500);
        return () => clearTimeout(timeoutId);
        
    }, [searchValue]);

    function displayBanner(maxReached=false){
        let banner = document.getElementById('banner');
        if (maxReached) {
            banner.innerHTML = 'Max nominations reached!';
        }
        else {
            banner.innerHTML = '';
        }
    }

    return (
        <div className="container-fluid movie-app">
            <div className='movie-list-heading row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading="Top 5 Movie Nominations" />
                <p id="banner" className='col banner'></p>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className='row'>
                <MovieList movies={movies} displayBanner={displayBanner}/>
            </div>
        </div>
    );
};

export default App;