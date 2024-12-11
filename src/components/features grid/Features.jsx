import React from "react";
import Feature from "./Feature";

function Features() {
  let features = [
    {
      title: "Real-Time Collaboration",
      desc: "Collaborate seamlessly with your study group using integrated tools for video conferencing, real-time chat, and shared workspaces.",
      icon: "src\\assets\\collabration.svg",
    },
    {
      title: "Group Management",
      desc: "Create and manage study groups effortlessly. Organize members, assign roles, and track progress with intuitive group management features.",
      icon: "src\\assets\\manage.svg",
    },
    {
      title: "Smart Scheduling",
      desc: "Plan your study sessions with built-in scheduling tools. Sync calendars, set reminders, and ensure everyone stays on the same page.",
      icon: "src\\assets\\smart.svg",
    },
  ];

  return (
    <div className="flex justify-center items-center flex-col gap-5 pb-10">
      <div className=" max-w-[768px] flex justify-center items-center flex-col gap-2">
        <h1 className="text-secondary font-mono font-bold text-2xl">
          SERVICES <span className="text-primary-content">WE ARE OFFERING</span>
        </h1>
        <p className="text-center text-gray-500  opacity-60 font-semibold">
          Explore a range of innovative features tailored to simplify group
          studies, enhance collaboration, and streamline resource sharing—all in
          one user-friendly platform.
        </p>
      </div>

      <div className="flex gap-6">
        {features.map((feature) => (
          <Feature
            desc={feature.desc}
            title={feature.title}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
