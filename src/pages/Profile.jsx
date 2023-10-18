import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const getProfileDetail = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${import.meta.env.VITE_VERCEL_AUTH}/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { data } = response.data;
        setProfile(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error?.response?.data?.message);
          return;
        }
      }
    };
    getProfileDetail();
  }, []);

  return (
    <div className="mt-5 text-white p-3">
      <div>
        <ul>
          <div className="mr-2 flex-1 bg-white bg-opacity-25 mt-5 card justify-content-center align-items-center text-white">
            <div className="card-body ">My Profile</div>
          </div>
          <center>
            <div
              className="mt-4 card center "
              style={{ width: "7rem", borderRadius: "50%" }}
            >
              <img
                className="poto_kosong"
                src="/poto_kosong.png"
                alt="poto_kosong"
              />
            </div>
          </center>

          <div className="d-flex flex-col gap-2">
            <div>
              <p className="m-0">Name </p>
              <div className="mr-2 flex-1 bg-white -25 card justify-content-center align-items-center text-black">
                <div className="card-body">{profile.name}</div>
              </div>
            </div>

            <div>
              <p className="m-0">Email</p>
              <div className="mr-2 flex-1 bg-white -25 card justify-content-center align-items-center text-black">
                <div className="card-body">{profile.email}</div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
