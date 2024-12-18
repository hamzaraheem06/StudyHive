import React from "react";
import { Button } from "../index";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import ProfileAttributes from "./ProfileAttributes";

function UserProfile() {
  const userData = useSelector((state) => state.auth.userData);

  return (
    <div className="px-2 min-w-80 mx-auto mt-52 rounded shadow">
      <div className="p-4 flex flex-col justify-center items-center gap-2">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://avatars.githubusercontent.com/u/161157848?v=4" />
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-bold text-lg">{userData.name}</h2>
          <p className="text-gray-400 text-sm font-semibold">
            <i className="bx bxs-briefcase"></i> Admin
          </p>
          <p className="text-gray-400 text-sm font-semibold">
            <i className="bx bxs-calendar-alt"></i> Joined Since:{" "}
            {new Date(userData.$createdAt).toLocaleDateString()}
          </p>
        </div>

        {/* <div className="flex justify-center items-center gap-2">
          <Button text=" Follow " btnType="btn-secondary" />
          <Button text="Message" btnType="" />
        </div> */}
      </div>
      {/* <div className="p-2 opacity-85">
        <h2 className="font-bold text-lg">Socials:</h2>
        <Link className="flex items-center gap-2 py-2 font-medium">
          <i className="bx bxl-instagram"></i> Instagram
        </Link>
        <Link className="flex items-center gap-2 py-2 font-medium">
          <i className="bx bxl-linkedin"></i> LinkedIn
        </Link>
        <Link className="flex items-center gap-2 py-2 font-medium">
          <i className="bx bxl-github"></i> Github
        </Link>
      </div>

      <ProfileAttributes /> */}
    </div>
  );
}

export default UserProfile;
