import React, { useState, useEffect } from 'react';

const genericPoster = 'https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279';
let windowWidth = document.body.clientWidth;

const MovieList = (props) => {
    
    let movieNomsArray = localStorage.getItem('savedMovieNoms') ? JSON.parse(localStorage.getItem('savedMovieNoms')) : [];

    const [movieNoms, setMovieNoms] = useState(movieNomsArray || []);

    
    function handleAdd(event) {
        let movie = JSON.parse(event.target.value);

        if (!movieNoms.some(e => e.imdbID === movie.imdbID)){
            if (movieNoms.length < 5){
                setMovieNoms(movieNoms => [...movieNoms, movie]);
            }            
        }
    }

    function handleRemove(event) {       
        const nomList = movieNoms.filter((item) => item.imdbID !== event.target.value);
        setMovieNoms(nomList);
    }

    function blurSearch(movieList) {
        if (movieList.length === 5) {
            props.displayBanner(true);
            document.getElementById('search-list').classList.add('max-reached');
        }
        else {
            props.displayBanner();
            document.getElementById('search-list').classList.remove('max-reached');               
        }
    }

    useEffect(() => localStorage.setItem('savedMovieNoms', JSON.stringify(movieNoms)), [movieNoms]);

    useEffect(() => blurSearch(movieNoms));

    return (
        <>
        <div id="search-list" className="movie-list">
            <h2 className='movie-list-title'>
                {props.movies.length === 0 ? "Search for your favorite movies": "Search Results"}
            </h2>              
            <div className={`card-container d-flex w-100 ${windowWidth<787 && props.movies.length!==0 ? 'card-container-sml' : ''}`}>
                {props.movies.map((movie) => 
                <div className="d-flex justify-content-start m-4">
                    <div key={movie.imdbID} className="d-flex flex-column justify-content-start movie-card">
                        <img className="movie-poster" src={movie.Poster === 'N/A' ? genericPoster : movie.Poster} alt={`${movie.Title} movie poster`}></img>
                        <h3 className="h4 text-center">{`${movie.Title} (${movie.Year})`}</h3>
                        <button id={`${movie.imdbID}-btn`} type="button" className={`btn ${!movieNoms.some(e => e.imdbID === movie.imdbID) ? 'btn-success' : 'btn-secondary'} movie-nom-btn`} onClick={handleAdd} value={JSON.stringify(movie)}
                        disabled={(movieNoms.some(e => e.imdbID === movie.imdbID))}>
                            {(movieNoms.some(e => e.imdbID === movie.imdbID)) ? 'Nominated' : 'Nominate'}
                        </button>        
                    </div>
                </div>
                 )}
            
            </div>
        </div>

        <div className="movie-list">
            <h2 className='movie-list-title'>
                {movieNoms.length === 0 ? "": `Your nominated movies (${movieNoms.length} of 5)`}
            </h2>
            <div className="card-container d-flex w-100">
                {movieNoms.map((movie) =>
                <div className="d-flex justify-content-start m-4">
                    <div key={movie.imdbID} className="d-flex flex-column justify-content-start movie-card">
                        <img className="movie-poster" src={movie.Poster === 'N/A' ? genericPoster : movie.Poster} alt={`${movie.Title} movie poster`}></img>
                        <h3 className="h4 text-center">{`${movie.Title} (${movie.Year})`}</h3>
                        <p>{movie.nominated}</p>
                        <button type="button" className="btn btn-danger movie-denom-btn" onClick={handleRemove} value={movie.imdbID}>Remove</button>
                    </div>
                </div>
                )}
            </div>
        </div>
        </>
    );
};

export default MovieList;
