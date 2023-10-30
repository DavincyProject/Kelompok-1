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
      const token = getState().auth.token;

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
=======
        const { data, total_pages, total_results } = response.data;

        dispatch(setTotalPages(total_pages));
        dispatch(setTotalResult(total_results));
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
>>>>>>> f1bbc58e4ccf69a06f087a1e56b45d659c580abc

export default getSearchData;
