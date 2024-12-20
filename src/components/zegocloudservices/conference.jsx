import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "../index";
import { useForm } from "react-hook-form";

function Conference() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const id = Math.floor(10000 + Math.random() * 90000);

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
          label="Name: "
          placeHolder="Enter your name"
          type="name"
          {...register("name", {
            required: true,
          })}
        />
        <Input
          label="Conference ID: "
          placeHolder="Five-digit conference ID"
          type="number"
          min="10000"
          MAX="99999"
          defaultValue={id}
          {...register("conferenceID", {
            required: true,
          })}
        />
        <div className="py-1">
          <Button
            btnType="btn-primary"
            text="Create Conference"
            className="text-lg text-white"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default Conference;
