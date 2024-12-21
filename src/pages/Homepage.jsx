import React from "react";
import {
  Hero,
  Features,
  Conference,
  ConferenceMenu,
  UserProfile,
  Chat,
} from "../components/index";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function Homepage() {
  const userStatus = useSelector((state) => state.auth.status);

  return (
    <>
      {userStatus ? (
        <>
          <div className=" w-[850px] mx-auto  mt-24 mb-20 flex flex-col justify-between gap-16">
            <div className="breadcrumbs text-sm">
              <ul>
                <li className="font-medium text-primary">
                  <Link to="/">Home</Link>
                </li>
                <li></li>
              </ul>
            </div>
            <div className=" w-[850px] mx-auto  flex justify-between  items-center gap-20 ">
              <UserProfile />
              <ConferenceMenu />
            </div>
          </div>
        </>
      ) : (
        <>
          <Hero />
          <Features />
        </>
      )}
    </>
  );
}

export default Homepage;
