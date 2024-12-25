import React from "react";
import {
  Hero,
  Features,
  ConferenceMenu,
  UserProfile,
  AddTodo,
  Todo,
  Team,
} from "../components/index";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import store from "../store/store";
import { Provider } from "react-redux";

function Homepage() {
  const userStatus = useSelector((state) => state.auth.status);

  return (
    <>
      {userStatus ? (
        <>
          {/* <div className="max-w-[850px] mx-auto  mt-24 mb-20 flex flex-col justify-between gap-16">
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

            <div className="card bg-base-100 w-96 p-8 shadow">
              <h2 className="card-title">Todo List</h2>
              <Provider store={store}>
                <AddTodo />
                <Todo />
              </Provider>
            </div>
           */}
          <div className="mt-24 ml-10 breadcrumbs text-sm">
            <ul>
              <li className="font-medium text-primary">
                <Link to="/">Home</Link>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-center text-base/7 font-semibold text-primary">
              Something Here is
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight sm:text-5xl">
              Everything you need at a single place
            </p>
            <div className="my-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg  bg-base-100 lg:rounded-l-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight  max-lg:text-center">
                      Responsive Design
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6  max-lg:text-center">
                      Access your account from any device, and it would still be
                      pleasing to the eyes unlike SOME <strong>L</strong>earning{" "}
                      <strong>M</strong>anagement <strong>S</strong>ystems.
                    </p>
                  </div>
                  <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                    <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                      <img
                        className="size-full object-cover object-top"
                        src="src\assets\image.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
              </div>

              <div className="relative max-lg:row-start-1">
                <div className="absolute inset-px rounded-lg bg-base-100 max-lg:rounded-t-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight  max-lg:text-center">
                      Profile
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6  max-lg:text-center">
                      I do not know what to write here. Imagine something is
                      written here.
                    </p>
                  </div>
                  <div className="flex flex-1 px-10 items-center max-lg:pb-12 max-lg:pt-3 sm:px-10 lg:pb-2">
                    <UserProfile />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
              </div>
              <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                <div className="absolute inset-px rounded-lg  bg-base-100"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight  max-lg:text-center">
                      Conference
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6  max-lg:text-center">
                      Working on a project with your team? Start a conference
                    </p>
                  </div>
                  <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                    <ConferenceMenu />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
              </div>
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg  bg-base-100 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight  max-lg:text-center">
                      Todo List
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6  max-lg:text-center">
                      Keep track of your tasks with a todo list
                    </p>
                  </div>
                  <div className="relative min-h-[30rem] w-full grow">
                    <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl">
                      <div className="flex flex-col justify-center items-start ring-1 ring-white/5">
                        <Provider store={store}>
                          <AddTodo />
                          <Todo />
                        </Provider>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              </div>
            </div>
          </div>
          <div className="mt-10 ml-10 breadcrumbs text-sm">
            <Team />
          </div>
        </>
      ) : (
        <>
          <Hero />
          <Features />
          <Team />
        </>
      )}
    </>
  );
}

export default Homepage;
