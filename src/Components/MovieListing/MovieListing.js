import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../Features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard.js';
import "./MovieListing.scss";

function MovieListing() {
    const movies = useSelector(getAllMovies);
    let renderMovies = "";

    // console.log(movies);
    renderMovies = (movies.Response === "True") ? (
        movies.Search.map((movie, index) => (
            <MovieCard key={index} data={movie} />
        ))
    ) : (
        <div className="movies-error">
            <h3>{movies.Error}</h3>
        </div>
    )

    console.log(renderMovies);
    // if (movies.Response === "True") {
        return (
            <div className='movie-wrapper'>
                <div className='movie-list'>
                    <h2>Movies</h2>
                    {/* {console.log(movies)} */}
                    <div className='movie-container'>
                        {/* {movies.Search.map((movie, index) => {
                            // {console.log(movie)}
                            <MovieCard key={index} data={movie}/>
                        })} */}
                        {renderMovies}
                    </div>
                </div>
            </div >
        )
    // }
    // return (
    //     <div className="movies-error">
    //         <h3>{movies.Error}</h3>
    //     </div>

    // )
};

export default MovieListing;