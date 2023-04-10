import React from "react";
import "./BgAnimated.scss";
import { Pannellum } from "pannellum-react";
import jap from "../img/jap.jfif";

function BgAnimated({ image }) {
  return (
    <div className="screen">
      <Pannellum
        width="100%"
        height="100%"
        image={jap}
        yaw={100}
        hfov={100}
        autoLoad
        autoRotate={-2}
        compass={false}
        showFullscreenCtrl={false}
        showZoomCtrl={false}
        mouseZoom={false}
        onLoad={() => {
          console.log("panorama loaded");
        }}
      ></Pannellum>
    </div>
  );
}

export default BgAnimated;
