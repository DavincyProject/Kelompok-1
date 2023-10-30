import axios from "axios";
<<<<<<< HEAD
import { setSearchedMovies, setTotalPages } from "../reducers/searchReducers";
=======
import {
    setSearchedMovies,
    setTotalPages,
    setTotalResult,
} from "../reducers/searchReducers";
>>>>>>> fcc98c4dce77c2e75e5d1631cf5fca052f43a7e9
import { isAxiosError } from "axios";

export const getSearchData =
    (queryValue, pageValue) => async (dispatch, getState) => {
        try {
            const token = getState().popular.token;

            if (queryValue) {
                const response = await axios.get(
                    `${
                        import.meta.env.VITE_VERCEL_SEARCH_URL
                    }?query=${queryValue}&page=${pageValue}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

<<<<<<< HEAD
                const { data } = response.data;
                const { total_pages } = response.data;
                dispatch(setTotalPages(total_pages));
=======

                const { data, total_pages, total_results } = response.data;

                dispatch(setTotalPages(total_pages));
                dispatch(setTotalResult(total_results));
>>>>>>> fcc98c4dce77c2e75e5d1631cf5fca052f43a7e9
                dispatch(setSearchedMovies(data));
            }
        } catch (error) {
            if (isAxiosError(error)) {
                alert(error?.response?.data?.message);
                return;
            }
            alert(error?.message);
        }
    };

export default getSearchData;
