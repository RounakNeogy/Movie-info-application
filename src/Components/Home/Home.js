import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing.js";
import {useDispatch} from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../Features/movies/movieSlice.js';


function Home(){
    const dispatch = useDispatch();
    const movieText="Harry";
    const showText = "Friends"
    useEffect(()=>{
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showText));
    },[dispatch]);

    return (
        <div>
            <div className='banner-img'></div>
            
            <MovieListing/>
            
        </div>
    );
};

export default Home;