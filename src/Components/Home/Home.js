import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing.js";
import movieApi from "../../Common/apis/movieApi.js";
import {APIkey} from "../../Common/apis/MovieApiKey.js";
import {useDispatch} from 'react-redux';
import { addMovies } from '../../Features/movies/movieSlice.js';

function Home(){
    const movieText = "Harry";
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchMovies = async() =>{
            const response = await movieApi
                .get(`?apiKey=${APIkey}&s=${movieText}&type=movie`)
                .catch((err) => {
                    console.log("Err :", err);
                })
            
            dispatch(addMovies(response.data));

        };

        fetchMovies();
    },[]);

    return (
        <div>
            <div className='banner-img'></div>
            
            <MovieListing/>
            
        </div>
    );
};

export default Home;