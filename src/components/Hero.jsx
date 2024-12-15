import React from "react";
import { Button } from "./index";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="mt-40 mb-20 flex justify-center items-center flex-col gap-20 ">
      <div className=" max-w-[850px] flex justify-center items-center flex-col gap-4">
        <h1 className="text-primary font-bold text-4xl">
          Study Smarter, Collaborate Better
        </h1>
        <p className="text-center text-gray-500  opacity-60 font-semibold">
          Transform your group study sessions with our online platform, designed
          to foster collaboration, real-time interaction, and resource sharing.
          Whether you're brainstorming for a project or revising for exams, we
          provide the tools you need to succeed—anytime, anywhere.
        </p>
        <div className="flex gap-4">
          <Button
            text="Get Started"
            onClickHandler={() => {
              navigate("/signup");
            }}
            btnType="btn-primary"
          />
          <Button
            onClickHandler={() => {
              navigate("/about");
            }}
            text="Learn more"
          />
        </div>
      </div>

      <div className="p-5 gradient-bg rounded-md shadow-lg">
        <img src="src\assets\hero-image-removebg-preview.png" />
      </div>
    </div>
  );
}

export default Hero;
