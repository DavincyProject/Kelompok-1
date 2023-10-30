import axios from "axios";

import { setDetailMovie } from "../reducers/detailsReducers";
import { isAxiosError } from "axios";

export const getDetail = (id) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const response = await axios.get(
      `${import.meta.env.VITE_VERCEL_API_URL}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const { data } = response.data;
    dispatch(setDetailMovie(data));
  } catch (error) {
    if (isAxiosError(error)) {
      alert(error?.response?.data?.message);
      return;
    }
    alert(error?.message);
  }
};
