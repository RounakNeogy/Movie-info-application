import {configureStore} from "@reduxjs/toolkit";

import moviesReducer from "./movies/movieSlice.js"

export const store = configureStore({
    reducer: {
        movies: moviesReducer
    },
})