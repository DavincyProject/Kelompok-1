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
          <li>Name : {profile.name}</li>
          <li>Email : {profile.email}</li>

          <div className="mr-2 flex-1 bg-white bg-opacity-25 mt-5 card justify-content-center align-items-center text-white">
            <div className="card-body">Public Profile</div>
          </div>

          <p className="mt-5">First Name</p>
          <div className="mr-2 flex-1 bg-white-75  card justify-content-center align-items-left text-black mb-4 w-50">
            <div className="card-body">Fahmi</div>
          </div>

          <p className="mt-5">First Last</p>
          <div className="mr-2 flex-1 bg-white-75  card justify-content-center align-items-left text-black mb-4 w-50">
            <div className="card-body">Alfareza</div>
          </div>

          <p className="mt-5">Email</p>
          <div className="mr-2 flex-1 bg-white-75  card justify-content-center align-items-left text-black mb-4 w-50">
            <div className="card-body">Falfareza@binaracademy.org</div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
