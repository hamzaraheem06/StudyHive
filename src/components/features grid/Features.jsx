import React from "react";

function Features() {
  return (
    <div className="flex justify-center items-center flex-col gap-14 py-10 border-y">
      <div className=" max-w-[768px] flex justify-center items-center flex-col gap-2">
        <p className="text-center text-gray-500  opacity-60 font-semibold">
          Explore a range of innovative features tailored to simplify group
          studies, enhance collaboration, and streamline resource sharing—all in
          one user-friendly platform.
        </p>
      </div>

      <ul className="max-w-[768px] timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#d18efb"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start text-gray-400 font-medium mb-10 md:text-end">
            <div className="text-2xl font-bold text-primary">
              Real-Time Collaboration
            </div>
            Collaborate effortlessly with your study group through a platform
            offering video conferencing, and real-time chat. Host virtual
            meetings, exchange ideas instantly in a user-friendly environment
            designed for teamwork and productivity.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#d18efb"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end text-gray-400 font-medium mb-10">
            <div className="text-2xl font-bold text-primary">
              Group Management
            </div>
            Create and manage study groups effortlessly with intuitive tools
            designed for effective collaboration. Easily organize group members,
            assign specific roles, and track progress to stay on top of goals
            and ensure productive teamwork.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#d18efb"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start text-gray-400 font-medium mb-10 md:text-end">
            <div className="text-2xl font-bold text-primary">
              Smart Scheduling
            </div>
            Plan your study sessions seamlessly with built-in scheduling tools
            designed for convenience and organization. Sync group calendars to
            avoid conflicts, set reminders for important deadlines, and ensure
            everyone stays coordinated and prepared for productive sessions.
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
}

export default Features;
