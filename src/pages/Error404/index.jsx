import React from "react";
import "./Error404.css";
import { basePath } from "../../constants";

const Error404 = () => {
  return (
    <div
      className="Error404"
      style={{ backgroundImage: "url('" + basePath + "/imgs/404.jpg')" }}
    ></div>
  );
};

export default Error404;
