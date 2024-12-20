import React, { useState } from "react";
import { useParams } from "react-router";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import config from "../config/config";
import { useSelector } from "react-redux";

function Conferencepage() {
  const { conferenceID } = useParams();
  const user = useSelector((state) => state.auth.userData);
  console.log(user);

  const conference = async (element) => {
    const appId = 1516525922;
    const serverSecret = config.zegocloudSecret;
    const token = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      conferenceID,
      user.$id,
      user.name
    );

    const zegoCloud = ZegoUIKitPrebuilt.create(token);
    zegoCloud.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Share link",
          url: `https://localhost:3000/conference/${conferenceID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };

  return (
    <div className="hero mt-16 mx-auto py-5 rounded-md">
      <div ref={conference} />
    </div>
  );
}

export default Conferencepage;
