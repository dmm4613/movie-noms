import React from 'react';

const stockPoster = '/src/stock-movie-poster.jpg';

const MovieList = (props) => {
    
    return (
        <>
        {props.movies.map((movie, index) => 
            <div className="d-flex justify-content-start m-3">
                <img src={(movie.Poster === 'N/A' ? stockPoster : movie.Poster)} alt='movie poster'></img>
            </div>
        )}
        </>
    );
};

export default MovieList;
