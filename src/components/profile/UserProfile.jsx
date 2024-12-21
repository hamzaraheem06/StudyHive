import React from "react";
import { useSelector } from "react-redux";

function UserProfile() {
  const userData = useSelector((state) => state.auth.userData);

  return (
    <div className="p-2 w-1/2 min-h-[147px] rounded-2xl shadow">
      <div className="p-4 flex justify-start items-center gap-4">
        <div className="avatar">
          <div className="w-24 rounded-xl">
            <img src="https://avatars.githubusercontent.com/u/161157848?v=4" />
          </div>
        </div>

        <div className="text-start">
          <h2 className="font-bold text-2xl">{userData.name}</h2>
          <p className="text-gray-400 text font-semibold">
            <i className="bx bxl-gmail"></i> {userData.email}
          </p>
        </div>
      </div>
      {/* <div className="flex justify-end items-center gap-2">
        <Button text=" Follow " btnType="btn-secondary" />
        <Button text="Message" btnType="" />
      </div> */}
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
      </div> */}
    </div>
  );
}

export default UserProfile;
