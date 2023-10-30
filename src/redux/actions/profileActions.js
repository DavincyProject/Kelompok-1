import axios from "axios";
import { setUser } from "../reducers/profileReducers";

export const getUser =
  (navigate, navigatePathSuccess, navigatePathError) =>
  async (dispatch, getState) => {
    try {
      const { token } = getState().auth;

      const { data } = await axios.get(
        `${import.meta.env.VITE_VERCEL_AUTH}/me`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(setUser(data?.data));
      if (navigatePathSuccess) navigate(navigatePathSuccess, { replace: true });
    } catch (err) {
      if (navigatePathError) navigate(navigatePathError, { replace: true });
    }
  };
