import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from "../../Common/apis/movieApi.js";
import {APIkey} from "../../Common/apis/MovieApiKey.js";



export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', 
    async(term,{ rejectWithValue }) => {
        try{
            const response = await movieApi
            .get(`?apiKey=${APIkey}&s=${term}&type=movie`)
            return response.data;
        }
        catch(err){
            return rejectWithValue(err.response.status);
        }

    //dispatch(addMovies(response.data));
    //return response.data;
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', 
    async(term,{ rejectWithValue }) => {
        try{
            const response = await movieApi
            .get(`?apiKey=${APIkey}&s=${term}&type=series`);
            return response.data;
        }
        catch(err){
            return rejectWithValue(err.response.status);
        }

    //dispatch(addMovies(response.data));
    //return response.data;
})

export const fetchAsyncMovieOrShowDetails = createAsyncThunk('movies/fetchAsyncMovieOrShowDetails', 
    async(id,{ rejectWithValue }) => {
        const seriesText = "Friends";
        try{
            const response = await movieApi
            .get(`?apiKey=${APIkey}&i=${id}&plot=full`);
            return response.data;
        }
        catch(err){
            return rejectWithValue(err.response.status);
        }

    //dispatch(addMovies(response.data));
    //return response.data;
})

const initialState = {
    movies: {},
    shows: {},
    selectedMovieorShow: {},
    error: null,
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
        [fetchAsyncMovies.rejected]: (state,{payload}) => {
            console.log("Rejected");
            return {...state,error: payload};
        },
        [fetchAsyncShows.pending]: () => {
            console.log("Pending")
        },
        [fetchAsyncShows.fulfilled]: (state,{payload}) => {
            console.log("Fetched Successfully!");
            return {...state, shows: payload};
        },
        [fetchAsyncShows.rejected]: (state,{payload}) => {
            console.log("Rejected");
            return {...state,error: payload};
        },
        [fetchAsyncMovieOrShowDetails.pending]: () => {
            console.log("Pending")
        },
        [fetchAsyncMovieOrShowDetails.fulfilled]: (state,{payload}) => {
            console.log("Fetched Successfully!");
            return {...state, selectedMovieorShow: payload};
        },
        [fetchAsyncMovieOrShowDetails.rejected]: (state,{payload}) => {
            console.log("Rejected");
            return {...state,error: payload};
        },
    }
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => (state.movies.error)?state.movies.error:state.movies.movies
export const getAllShows = (state) => (state.movies.error)?state.movies.error:state.movies.shows
export const getSelectedMovieOrShow = (state) => (state.movies.error)?state.movies.error:state.movies.selectedMovieorShow;
//export const getStatus=status;
export default movieSlice.reducer;
