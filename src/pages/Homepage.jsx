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

function Homepage() {
  const userStatus = useSelector((state) => state.auth.status);

  return (
    <>
      {userStatus ? (
        <>
          <div className=" max-w-[850px] mx-auto mt-40 mb-20 flex justify-center  items-center gap-20 ">
            <UserProfile />
            <ConferenceMenu />
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
