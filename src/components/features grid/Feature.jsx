import React from "react";

function Feature({ title, desc, icon }) {
  return (
    <div className="bg-base-200 w-72 h-44 p-4 gap-3 shadow-md hover:bg-primary rounded-md flex justify-center flex-col items-start transition">
      <div className="flex gap-2 items-center">
        <img src={icon} alt={title} />
        <h1 className="font-semibold">{title}</h1>
      </div>
      <p className="text-sm font-medium opacity-60">{desc}</p>
    </div>
  );
}

export default Feature;
