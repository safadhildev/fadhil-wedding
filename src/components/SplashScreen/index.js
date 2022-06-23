import React, { useEffect, useRef } from "react";
import { assets } from "../../assets";
import { ClipLoader, BounceLoader } from "react-spinners";
import "./styles.css";
import { Button } from "../common";

const assetArray = [
  assets.frame1,
  assets.appleLogo,
  assets.googleLogo,
  assets.gMapsLogo,
  assets.wazeLogo,
  assets.strokeGold,
  assets.marbleBg,
];

const SplashScreen = ({ visible, onFinish }) => {
  const splashRef = useRef(null);

  useEffect(() => {
    const cacheImages = async () => {
      const promises = await assetArray.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve();
          img.onerror = reject();
        });
      });
      await Promise.all(promises);

      setTimeout(() => {
        onFinish();
      }, 2000);
    };

    cacheImages();
  }, []);
  return (
    <div
      className={`splash-container ${visible ? "shown" : "hidden"}`}
      style={{ overscrollBehavior: "contain", pointerEvents: "none" }}
    >
      {visible && (
        <div className="splash-wrapper">
          <BounceLoader color="#c7ad88" size={100} />
        </div>
      )}
    </div>
  );
};

export default SplashScreen;
