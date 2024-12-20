import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "../index";
import { useForm } from "react-hook-form";

function JoinConference() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleJoin = async (data) => {
    navigate(`/conference/${data.conferenceID}`);
  };
  return (
    <div className="hero mt-40 mb-20 max-w-[850px] mx-auto py-5 rounded-md">
      <form
        onSubmit={handleSubmit(handleJoin)}
        className="flex flex-col gap-3 w-[300px] mx-auto"
      >
        <Input
          label="Conference ID: "
          placeHolder="Enter your conference ID"
          type="number"
          min="10000"
          MAX="99999"
          {...register("conferenceID", {
            required: true,
          })}
        />
        <div className="py-1">
          <Button
            btnType="btn-primary"
            text="Join Conference"
            type="submit"
            className="text-lg text-white"
          />
        </div>
      </form>
    </div>
  );
}

export default JoinConference;
