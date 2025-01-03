import React from "react";
import { Input, Button } from "../index";
import { useSelector } from "react-redux";

function ProfileAttributes() {
  const dataUser = useSelector((state) => state.auth.userData);

  return (
    <div>
      <h1>Account Details</h1>
      <form className="flex flex-col gap-3">
        <Input
          label="Username: "
          placeHolder="Username"
          type="text"
          isActive={false}
          value={dataUser.name}
        />

        <Input
          label="Email: "
          placeHolder="Email"
          type="text"
          isActive={false}
          value={dataUser.email}
        />

        <Input
          label="Phone: "
          placeHolder="Phone"
          type="text"
          isActive={false}
          value={dataUser.phone}
        />
        <div className="py-1">
          <Button text="Update Profile" btnType="btn-primary" type="submit" />
        </div>
      </form>
    </div>
  );
}

export default ProfileAttributes;
