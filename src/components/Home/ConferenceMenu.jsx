import React from "react";
import { Button } from "../index";
import { useNavigate } from "react-router";

function ConferenceMenu() {
  const navigate = useNavigate();
  return (
    <div className="card w-72">
      <div className="card-body">
        <div className="card-actions w-full gap-6 justify-between">
          <Button
            btnType="btn-primary"
            icon={<i className="bx bx-camera-home"></i>}
            text=" Host"
            className="text-lg text-white"
            onClickHandler={() => {
              navigate("/conference/create");
            }}
          />
          <Button
            btnType=""
            icon={<i className="bx bx-plus"></i>}
            text="Join"
            className="text-lg"
            onClickHandler={() => {
              navigate("/conference/join");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ConferenceMenu;
