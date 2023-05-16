import React from "react";

function BackgroundImage({ opacity }) {
  return (
    <div
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dsllzbivs/image/upload/v1684252319/heistquest/heist_gj9czs.jpg')`,
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
