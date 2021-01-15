import React, { useState } from 'react';

const genericPoster = 'https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279';

const MovieList = (props) => {

    const [movieNoms, setMovieNoms] = useState([]);
    
    function handleAdd(event) {
        let movie = JSON.parse(event.target.value);

        if (movieNoms.length === 4) {
            document.getElementById('search-list').classList.add('max-reached');
            // document.querySelectorAll('button.movie-nom-btn')
            //     .forEach((e) => {e.setAttribute("disabled", "disabled");});  possible to come back to and disable all buttons 
        }

        if (!movieNoms.some(e => e.imdbID === movie.imdbID)){
            if (movieNoms.length < 5){
                setMovieNoms(movieNoms => [...movieNoms, movie]);
            }
            
        }
    }

    function handleRemove(event) {
        if (movieNoms.length === 5) {
            document.getElementById('search-list').classList.remove('max-reached');
            // document.querySelectorAll('button.movie-nom-btn')
            //     .forEach((e) => {e.removeAttribute("disabled");}); need to come back to this if it doesn't reset all buttons.
        }
        const nomList = movieNoms.filter((item) => item.imdbID !== event.target.value);
        // document.getElementById(`${event.target.value}-btn`).removeAttribute("disabled");
        setMovieNoms(nomList);
    }

    return (
        <>
        <div id="search-list" className="movie-list d-flex w-100">
        {props.movies.map((movie) => 
            <div className="d-flex justify-content-start m-4">
                <div key={movie.imdbID} className="d-flex flex-column justify-content-start movie-card">
                    <img className="movie-poster" src={movie.Poster === 'N/A' ? genericPoster : movie.Poster} alt={`${movie.Title} movie poster`}></img>
                    <h2 className="h4 text-center">{`${movie.Title} (${movie.Year})`}</h2>
                    <button id={`${movie.imdbID}-btn`} type="button" className="btn btn-success movie-nom-btn" onClick={handleAdd} value={JSON.stringify(movie)}
                     disabled={(movieNoms.some(e => e.imdbID === movie.imdbID))}>
                         {(movieNoms.some(e => e.imdbID === movie.imdbID)) ? 'Nominated' : 'Nominate'}
                    </button>        
                </div>
            </div>
        )}
        </div>
        <div className="movie-list d-flex w-100">
            {movieNoms.map((movie) =>
                <div className="d-flex justify-content-start m-4">
                <div key={movie.imdbID} className="d-flex flex-column justify-content-start movie-card">
                    <img className="movie-poster" src={movie.Poster === 'N/A' ? genericPoster : movie.Poster} alt={`${movie.Title} movie poster`}></img>
                    <h2 className="h4 text-center">{`${movie.Title} (${movie.Year})`}</h2>
                    <p>{movie.nominated}</p>
                    <button type="button" className="btn btn-danger movie-denom-btn" onClick={handleRemove} value={movie.imdbID}>Remove</button>
                </div>
            </div>
            
            )}
        </div>
        </>
    );
};

export default MovieList;
