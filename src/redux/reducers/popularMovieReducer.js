import { createSlice } from "@reduxjs/toolkit";

const initialState = {
<<<<<<< HEAD
  token: localStorage.getItem("token") || null,
  popularMovies: [],
};

const popularSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});

export const { setPopularMovies } = popularSlice.actions;
=======
    token: localStorage.getItem("token") || null,
    totalResult: null,
    popularMovies: [],
};

const popularSlice = createSlice({
    name: "popular",
    initialState,
    reducers: {
        setPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        setTotalResult: (state, action) => {
            state.totalResult = action.payload;
        },
    },
});

export const { setPopularMovies, setTotalResult } = popularSlice.actions;
>>>>>>> fcc98c4dce77c2e75e5d1631cf5fca052f43a7e9
export default popularSlice.reducer;
