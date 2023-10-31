import axios from "axios";
import { setUser } from "../reducers/profileReducers";

export const getUser = () => async (dispatch, getState) => {
    try {
        const { token } = getState().auth;

        const response = await axios.get(
            `${import.meta.env.VITE_VERCEL_AUTH}/me`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const { data } = response.data;

        dispatch(setUser(data));
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error?.response?.data?.message);
            return;
        }
    }
};
