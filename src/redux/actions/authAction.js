import axios from "axios";
import { setToken, setUser } from "../reducers/authReducer";
import Swal from "sweetalert2";

export const registerLoginWithGoogleAction =
  (accessToken, navigate) => async (dispatch) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_VERCEL_AUTH}/login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      dispatch(setToken(token));

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response.data.message);
        return;
      }
      alert(error.message);
    }
  };

export const logout = () => (dispatch) => {
  dispatch(setToken(null));
  dispatch(setUser(null));
};

export const register =
  (email, name, password, navigate) => async (dispatch) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_VERCEL_AUTH}/register`,
        {
          email,
          name,
          password,
        }
      );

      const { data } = response.data;
      const { token } = data;
      // Save our token and global state
      dispatch(setToken(token));

      Swal.fire({
        title: "Success!",
        text: "Registrasi Berhasil Silahkan Login!",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Swal.fire({
          title: "Failed!",
          text: error?.response?.data?.message,
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      Swal.fire({
        title: "Failed!",
        text: error?.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

export const login = (email, password, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_VERCEL_AUTH}/login`,
      {
        email,
        password,
      }
    );
    const { data } = response.data;
    const { token } = data;

    // Save our token and global state
    dispatch(setToken(token));

    // Redirect to home
    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error?.response?.data?.message);
      return;
    }

    alert(error?.message);
  }
};
