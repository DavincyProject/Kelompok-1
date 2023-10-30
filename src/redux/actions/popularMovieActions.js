import axios from "axios";
<<<<<<< HEAD
import { setPopularMovies } from "../reducers/popularMovieReducer";

export const getPopularData = () => async (dispatch, getState) => {
  try {
    const token = getState().popular.token;

    const response = await axios.get(
      `${import.meta.env.VITE_VERCEL_API_URL}/popular`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const { data } = response.data;
    dispatch(setPopularMovies(data));
  } catch (error) {
    // eslint-disable-next-line no-undef
    if (isAxiosError(error)) {
      alert(error?.response?.data?.message);
      return;
    }
    alert(error?.message);
  }
=======
import {
    setPopularMovies,
    setTotalResult,
} from "../reducers/popularMovieReducer";
import { isAxiosError } from "axios";

export const getPopularData = () => async (dispatch, getState) => {
    try {
        const token = getState().popular.token;

        const response = await axios.get(
            `${import.meta.env.VITE_VERCEL_API_URL}/popular`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const { data, total_results } = response.data;
        dispatch(setTotalResult(total_results));
        dispatch(setPopularMovies(data));
    } catch (error) {
        if (isAxiosError(error)) {
            alert(error?.response?.data?.message);
            return;
        }
        alert(error?.message);
    }
>>>>>>> fcc98c4dce77c2e75e5d1631cf5fca052f43a7e9
};

export default getPopularData;
