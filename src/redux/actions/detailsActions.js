import axios from "axios";

import { setDetailMovie } from "../reducers/detailsReducers";

export const getDetail = (id) => async (dispatch, getState) => {
  try {
    const { token } = getState().popular;
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
  } catch (err) {
    alert.error(`Error: ${err}`);
  }
};
