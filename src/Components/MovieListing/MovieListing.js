import React from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { getAllMovies,getAllShows } from '../../Features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard.js';
import "./MovieListing.scss";
import {settings} from "../../Common/settings.js";

function MovieListing() {
    

    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);

    let renderMovies = "",renderShows="";

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

    renderShows = (shows.Response === "True") ? (
        shows.Search.map((show, index) => (
            <MovieCard key={index} data={show} />
        ))
    ) : (
        <div className="movies-error">
            <h3>{movies.Error}</h3>
        </div>
    )

    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                    <Slider {...settings}>{renderMovies}</Slider>
                </div>
            </div>
            <div className='show-list'>
                <h2>Shows</h2>
                <div className='movie-container'>
                    <Slider {...settings}>{renderShows}</Slider>
                </div>
            </div>
        </div >
    )
};

export default MovieListing;