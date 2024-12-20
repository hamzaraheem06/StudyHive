import React from "react";

function UserProfile() {
  return (
    <div className="card bg-base-100 w-96 shadow">
      <div className="card-body">
        <h2 className="card-title">User Profile</h2>
        <div className="avatar">
          <img
            src="https://i.pravatar.cc/150?img=68"
            alt="profile"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="card-title">John Doe</h2>
          <p className="text-sm text-opacity-80"> </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
