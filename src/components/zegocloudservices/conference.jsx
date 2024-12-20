import React /* , { useState } */ from "react";
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button } from "../index";
import { useForm } from "react-hook-form";

function Conference() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  // const [error, setError] = useState("");

  const handleJoin = async (data) => {
    navigate(`/conference/${data.conferenceID}`);
  };
  return (
    <div className="hero mt-40 mb-20 max-w-[850px] mx-auto py-5 rounded-md">
      <form onSubmit={handleSubmit(handleJoin)} className="flex flex-col gap-3">
        <Input
          label="Name: "
          placeHolder="Enter your name"
          type="name"
          {...register("name", {
            required: true,
          })}
        />
        <Input
          label="Conference ID: "
          placeHolder="Enter conference ID"
          type="text"
          {...register("conferenceID", {
            required: true,
          })}
        />
        <div className="py-1">
          <Button
            btnType="btn-primary"
            text="Create Conference"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default Conference;
