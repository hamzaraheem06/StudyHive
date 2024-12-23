import React from "react";
import { Login } from "../components/index";
import { Link } from "react-router";

function LogInPage() {
  return (
    <div className="mx-auto mt-24 mb-20 flex flex-col justify-between gap-16">
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

      <div className="mt-24 ml-10 breadcrumbs text-sm">
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
          <div className="sm:flex items-center justify-center overflow-hidden rounded-md hidden lg:text-left">
            <img src="src\assets\logo.png" alt="logo" />
          </div>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
