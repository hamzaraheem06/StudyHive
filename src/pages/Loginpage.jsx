import React from "react";
import { Login } from "../components/index";

function LogInPage() {
  return (
    <div className="hero mt-40 mb-20 max-w-[850px] mx-auto border shadow-sm py-5 rounded-md">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex items-center justify-center overflow-hidden rounded-md lg:text-left">
          <img src="src\assets\logo.png" alt="logo" />
        </div>
        <Login />
      </div>
    </div>
  );
}

export default LogInPage;
