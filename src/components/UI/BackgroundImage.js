import React from "react";
import heistImage from "../../media/heist.jpg";

function BackgroundImage({ opacity }) {
  return (
    <div
      style={{
        backgroundImage: `url(${heistImage})`,
        opacity: opacity,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}

export default BackgroundImage;
