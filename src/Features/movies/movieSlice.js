import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from "../../Common/apis/movieApi.js";
import {APIkey} from "../../Common/apis/MovieApiKey.js";


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', 
    async(term) => {
        const response = await movieApi
            .get(`?apiKey=${APIkey}&s=${term}&type=movie`);

    //dispatch(addMovies(response.data));
    return response.data;
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', 
    async(term) => {
        const seriesText = "Friends";
        const response = await movieApi
            .get(`?apiKey=${APIkey}&s=${term}&type=series`);

    //dispatch(addMovies(response.data));
    return response.data;
})

export const fetchAsyncMovieOrShowDetails = createAsyncThunk('movies/fetchAsyncMovieOrShowDetails', 
    async(id) => {
        const seriesText = "Friends";
        const response = await movieApi
            .get(`?apiKey=${APIkey}&i=${id}&plot=full`);

    //dispatch(addMovies(response.data));
    return response.data;
})

const initialState = {
    movies: {},
    shows: {},
    selectedMovieorShow: {},
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) =>{
            state.selectedMovieorShow = {}; 
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]: (state,{payload}) => {
            console.log("Fetched Successfully!");
            return {...state, movies: payload};
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected!");
        },
        [fetchAsyncShows.fulfilled]: (state,{payload}) => {
            console.log("Fetched Successfully!");
            return {...state, shows: payload};
        },
        [fetchAsyncMovieOrShowDetails.fulfilled]: (state,{payload}) => {
            console.log("Fetched Successfully!");
            return {...state, selectedMovieorShow: payload};
        },
    }
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieorShow
export default movieSlice.reducer;