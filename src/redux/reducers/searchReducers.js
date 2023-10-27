import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchQuery: "",
    searchedMovies: [],
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchedMovies: (state, action) => {
            state.searchedMovies = action.payload;
        },
        setQueryValue: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
});

export const { setSearchedMovies, setQueryValue } = searchSlice.actions;
export default searchSlice.reducer;
