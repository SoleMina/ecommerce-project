import { SyncOutlined } from "@ant-design/icons";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center">
      <h2>Loading...</h2>
      <SyncOutlined spin style={{ fontSize: "50px", color: "#08c" }} />
    </div>
  );
};

export default Loading;
