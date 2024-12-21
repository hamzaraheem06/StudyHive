import React from "react";

function Features() {
  const features = [
    {
      name: " Real-Time Collaboration",
      description:
        "Collaborate effortlessly with your study group through a platform offering video conferencing, and real-time chat. Host virtual meetings, exchange ideas instantly in a user-friendly environment designed for teamwork and productivity.",
    },
    {
      name: "Group Management",
      description:
        "Create and manage study groups effortlessly with intuitive tools designed for effective collaboration. Easily organize group members, assign specific roles, and track progress to stay on top of goals and ensure productive teamwork.",
    },
    {
      name: "Smart Scheduling",
      description:
        "Plan your study sessions seamlessly with built-in scheduling tools designed for convenience and organization. Sync group calendars to avoid conflicts, set reminders for important deadlines, and ensure everyone stays coordinated and prepared for productive sessions",
    },
  ];

  return (
    // <div className="flex justify-center items-center flex-col gap-14 py-10 border-t">
    //   <div className=" max-w-[850px] flex justify-center items-center flex-col gap-2">
    //     <p className="text-center text-gray-500  opacity-60 font-semibold">
    //       Explore a range of innovative features tailored to simplify group
    //       studies, enhance collaboration, and streamline resource sharing—all in
    //       one user-friendly platform.
    //     </p>
    //   </div>

    //   <ul className="max-w-[850px] timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
    //     <li>
    //       <div className="timeline-middle">
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 20 20"
    //   fill="#0e72ed"
    //   className="h-5 w-5"
    // >
    //   <path
    //     fillRule="evenodd"
    //     d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
    //     clipRule="evenodd"
    //   />
    // </svg>
    //       </div>
    //       <div className="timeline-start text-gray-400 font-medium mb-10 md:text-end">
    //         <div className="text-2xl text-primary anton">
    //           Real-Time Collaboration
    //         </div>
    //         Collaborate effortlessly with your study group through a platform
    //         offering video conferencing, and real-time chat. Host virtual
    //         meetings, exchange ideas instantly in a user-friendly environment
    //         designed for teamwork and productivity.
    //       </div>
    //       <hr />
    //     </li>
    //     <li>
    //       <hr />
    //       <div className="timeline-middle">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 20 20"
    //           fill="#0e72ed"
    //           className="h-5 w-5"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //       </div>
    //       <div className="timeline-end text-gray-400 font-medium mb-10">
    //         <div className="text-2xl text-primary anton">Group Management</div>
    //         Create and manage study groups effortlessly with intuitive tools
    //         designed for effective collaboration. Easily organize group members,
    //         assign specific roles, and track progress to stay on top of goals
    //         and ensure productive teamwork.
    //       </div>
    //       <hr />
    //     </li>
    //     <li>
    //       <hr />
    //       <div className="timeline-middle">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 20 20"
    //           fill="#0e72ed"
    //           className="h-5 w-5"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //       </div>
    //       <div className="timeline-start text-gray-400 font-medium mb-10 md:text-end">
    //         <div className="text-2xl text-primary anton">Smart Scheduling</div>
    //         Plan your study sessions seamlessly with built-in scheduling tools
    //         designed for convenience and organization. Sync group calendars to
    //         avoid conflicts, set reminders for important deadlines, and ensure
    //         everyone stays coordinated and prepared for productive sessions.
    //       </div>
    //       <hr />
    //     </li>
    //   </ul>
    // </div>

    <div id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl lg:text-balance">
            Everything you need at a single place
          </p>
          <p className="mt-6 text-lg/8 ">
            Explore a range of innovative features tailored to simplify group
            studies, enhance collaboration, and streamline resource sharing—all
            in one user-friendly platform.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg
                      className="size-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]"
                      viewBox="0 0 40 40"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                        className="fill-base-100 stroke-indigo-500"
                      ></path>
                      <path
                        d="M27 25.335L30.25 27l-6.603 3.382a8 8 0 01-7.294 0L9.75 27 13 25.335m14-6.999L30.25 20l-6.603 3.382a8 8 0 01-7.294 0L9.75 20 13 18.336"
                        className="stroke-indigo-500/50"
                      ></path>
                      <path
                        d="M9.75 13l9.338-4.783a2 2 0 011.824 0L30.25 13l-6.603 3.382a8 8 0 01-7.294 0L9.75 13z"
                        className="stroke-indigo-500"
                      ></path>
                    </svg>
                  </div>

                  <p className="text-primary">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base/7 ">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Features;
