import React from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../Features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard.js';
import "./MovieListing.scss";
import { settings } from "../../Common/settings.js";
import { getStatus } from '../../Features/movies/movieSlice';
import PageNotFound from '../PageNotFound/PageNotFound';

function MovieListing() {


    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);

    let renderMovies = "", renderShows = "";

    console.log(shows);
    if (movies.Response === "True"){
        renderMovies = movies.Search.map((movie, index) => (
            <MovieCard key={index} data={movie} />
        ))
    }
    else if(movies>=500 && movies<600){
        return (
            <div className="movies-server-error">
                <h3>Internet Server Error</h3>
            </div>
        )
    }
    else if(movies===401 || movies===403){
        return <PageNotFound/>;
    }
    else{
        return(
            <div className='movies-internet-error'>
                <h1>Check Internet connection</h1>
            </div>
        )
    }


    if (shows.Response === "True"){
        renderShows = shows.Search.map((movie, index) => (
            <MovieCard key={index} data={movie} />
        ))
    }
    else if(shows>=500 && shows<600){
        return (
            <div className="movies-server-error">
                <h3>Internet Server Error</h3>
            </div>
        )
    }
    else if(shows===401 || shows===403){
        return <PageNotFound/>;
    }
    else{
        return(
            <div className='movies-internet-error'>
                <h1>Check Internet connection</h1>
            </div>
        )
    }

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
