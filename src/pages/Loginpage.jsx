import React from "react";
import { Login } from "../components/index";
import { Link } from "react-router";

function LogInPage() {
  return (
    <div className=" w-[850px] mx-auto mt-24 mb-20 flex flex-col justify-between gap-16">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link aria-disabled="true">User</Link>
          </li>
          <li className="font-medium text-primary" to="/">
            Login
          </li>
        </ul>
      </div>

      <div className="hero max-w-[850px] mx-auto py-5 rounded-md">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex items-center justify-center overflow-hidden rounded-md lg:text-left">
            <img src="src\assets\logo.png" alt="logo" />
          </div>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
