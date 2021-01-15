import React, { useState } from 'react';

const genericPoster = 'https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279';

const MovieList = (props) => {

    const [movieNoms, setMovieNoms] = useState([]);
    // const [btnDisabled, setbtnDisabled] = useState(false);
    
    function handleAdd(event) {
        let movie = JSON.parse(event.target.value);

        if (!movieNoms.some(e => e.imdbID === movie.imdbID)){
            if (movieNoms.length < 5){
                setMovieNoms(movieNoms => [...movieNoms, movie]);
                document.getElementById(`${movie.imdbID}-btn`).setAttribute("disabled", "disabled");
            }
            else {
                window.alert("You have nominated 5 movies")
            }
        }
    }

    function handleRemove(event) {
        const nomList = movieNoms.filter((item) => item.imdbID !== event.target.value);
        document.getElementById(`${event.target.value}-btn`).removeAttribute("disabled");
        setMovieNoms(nomList);
    }

    return (
        <>
        <div className="movie-list d-flex w-100">
        {props.movies.map((movie) => 
            <div className="d-flex justify-content-start m-4">
                <div key={movie.imdbID} className="d-flex flex-column justify-content-start movie-card">
                    <img className="movie-poster" src={movie.Poster === 'N/A' ? genericPoster : movie.Poster} alt={`${movie.Title} movie poster`}></img>
                    <h2 className="h4 text-center">{`${movie.Title} (${movie.Year})`}</h2>
                    <button id={`${movie.imdbID}-btn`} type="button" className="btn btn-success movie-nom-btn" onClick={handleAdd} value={JSON.stringify(movie)}>
                        Nominate
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
                    <button type="button" className="btn btn-danger movie-nom-btn" onClick={handleRemove} value={movie.imdbID}>Remove</button>
                </div>
            </div>
            
            )}
        </div>
        </>
    );
};

export default MovieList;
