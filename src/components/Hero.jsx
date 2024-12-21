// function Hero() {
//   const navigate = useNavigate();

//   return (
//     <div className="mt-40 mb-20 flex justify-center items-center flex-col gap-20 ">
//       <div className=" max-w-[850px] flex justify-center items-center flex-col gap-4">
//         <h1 className="text-primary font-bold text-4xl">
//           Study Smarter, Collaborate Better
//         </h1>
//         <p className="text-center text-gray-500  opacity-60 font-semibold">
//           Transform your group study sessions with our online platform, designed
//           to foster collaboration, real-time interaction, and resource sharing.
//           Whether you're brainstorming for a project or revising for exams, we
//           provide the tools you need to succeed—anytime, anywhere.
//         </p>
//         <div className="flex gap-4">
//           <Button
//             text="Get Started"
//             onClickHandler={() => {
//               navigate("/signup");
//             }}
//             btnType="btn-primary"
//           />
//           <Button
//             onClickHandler={() => {
//               navigate("/about");
//             }}
//             text="Learn more"
//           />
//         </div>
//       </div>

//       <div className="p-5 gradient-bg rounded-md shadow-lg">
//         <img src="src\assets\hero-image-removebg-preview.png" />
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React from "react";
import { Button } from "./index";
import { Link, useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-base-100 pb-10">
        <div className="relative isolate px-6 pt-14 lg:px-8">
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
          <div className="mx-auto max-w-2xl py-12  lg:py-14">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6  ring-1 ring-gray-900/10 hover:ring-primary">
                Check out our new collaborative study tools.{" "}
                <Link to="/about" className="font-semibold text-indigo-600">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Learn more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
                Study Smarter, Collaborate Better
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                Transform your group study sessions with our online platform,
                designed to foster collaboration, real-time interaction, and
                resource sharing. Whether you're brainstorming for a project or
                revising for exams, we provide the tools you need to
                succeed—anytime, anywhere.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
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
          </div>

          <div className="p-5 m-auto w-[600px] gradient-bg rounded-md shadow-lg hidden sm:block">
            <img
              src="src\assets\hero-image-removebg-preview.png"
              className="m-auto"
            />
          </div>

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
      </div>
    </>
  );
}
