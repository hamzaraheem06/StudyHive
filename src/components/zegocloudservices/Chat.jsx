import React, { useEffect, useState } from "react";

import { ZIMKitManager, Common } from "@zegocloud/zimkit-react";
// import "@zegocloud/zimkit-react/index.css"

import config from "../../config/config";

import { useSelector } from "react-redux";

function Chat() {
  const user = useSelector((state) => state.auth.userData);
  console.log(user);

  const [appConfig, setAppConfig] = useState({
    appId: config.zegocloudID,
    serverSecret: config.zegocloudSecret,
    userAvatarUrl: "https://avatars.githubusercontent.com/u/161157848?v=4",
  });

  const [userInfo, setUserInfo] = useState({
    userId: user.$id,
    userName: user.name,
  });

  useEffect(() => {
    const intChat = async () => {
      const zimkit = new ZIMKitManager();
      const token = zimkit.generateKitTokenForTest(
        appConfig.appId,
        appConfig.serverSecret,
        userInfo.userId,
        userInfo.userName
      );
      await zimkit.init(appConfig.appId);
      await zimkit.connectUser(userInfo, token);
    };

    intChat();
  }, []);

  return (
    <>
      <Common />
    </>
  );
}

export default Chat;
