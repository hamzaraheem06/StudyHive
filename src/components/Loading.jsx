import React from "react";

function Loading() {
  return (
    <div className="flex items-center bg-base-100 justify-center h-screen">
      <span className="loading loading-infinity loading-lg bg-primary"></span>
    </div>
  );
}

export default Loading;
