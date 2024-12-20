import React from "react";
import { Hero, Features, Conference } from "../components/index";
import { useSelector } from "react-redux";

function Homepage() {
  const userStatus = useSelector((state) => state.auth.status);

  return (
    <>
      {userStatus ? (
        <></>
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
