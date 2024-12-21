import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input, Button, Working } from "../index";
import { useForm } from "react-hook-form";

function Conference() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const id = Math.floor(10000 + Math.random() * 90000);

  const handleJoin = async (data) => {
    navigate(`/conference/${data.conferenceID}`);
  };
  return (
    <div className=" mx-auto  mt-24  mb-20 flex flex-col justify-between gap-10">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="ml-10 breadcrumbs text-sm">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Conference</Link>
          </li>
          <li className="font-medium text-primary" to="/">
            Create
          </li>
        </ul>
      </div>

      <div role="alert" className="alert bg-transparent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info h-6 w-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>
          After hanging the conference, to go back to home page. Click on the
          back arrow once and refresh the browser.
        </span>
      </div>

      <div className="hero max-w-[850px] mx-auto py-5 rounded-md">
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
            max="99999"
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

      <Working />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}

export default Conference;
