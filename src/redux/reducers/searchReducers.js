import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchQuery: "",
    totalPages: "",
<<<<<<< HEAD
=======
    totalResult: "",
>>>>>>> fcc98c4dce77c2e75e5d1631cf5fca052f43a7e9
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
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
<<<<<<< HEAD
    },
});

export const { setSearchedMovies, setQueryValue, setTotalPages } =
    searchSlice.actions;
=======
        setTotalResult: (state, action) => {
            state.totalResult = action.payload;
        },
    },
});

export const {
    setSearchedMovies,
    setQueryValue,
    setTotalPages,
    setTotalResult,
} = searchSlice.actions;
>>>>>>> fcc98c4dce77c2e75e5d1631cf5fca052f43a7e9
export default searchSlice.reducer;
