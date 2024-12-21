import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input, Button } from "../index";
import { useForm } from "react-hook-form";

function JoinConference() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleJoin = async (data) => {
    navigate(`/conference/${data.conferenceID}`);
  };
  return (
    <div className=" w-[850px] mx-auto  mt-24  mb-20 flex flex-col justify-between gap-16">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Conference</Link>
          </li>
          <li className="font-medium text-primary" to="/">
            Join
          </li>
        </ul>
      </div>
      <div className="hero max-w-[850px] mx-auto py-5 rounded-md">
        <form
          onSubmit={handleSubmit(handleJoin)}
          className="flex flex-col gap-3 w-[300px] mx-auto"
        >
          <Input
            label="Conference ID: "
            placeHolder="Enter your conference ID"
            type="number"
            min="10000"
            max="99999"
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
    </div>
  );
}

export default JoinConference;
