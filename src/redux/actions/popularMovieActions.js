import axios from "axios";
import {
    setPopularMovies,
    setTotalResult,
} from "../reducers/popularMovieReducer";
import { isAxiosError } from "axios";

export const getPopularData = () => async (dispatch, getState) => {
    try {
        const { token } = getState().auth;

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
        if (isAxiosError(error) && error.response) {
            console.error(error?.response?.data?.message);
            return;
        }
    }
};

export default getPopularData;
