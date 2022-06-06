import {
  CalendarMonthOutlined,
  HistoryEduOutlined,
  HomeOutlined,
  LocalPhone,
  ManOutlined,
  MapOutlined,
  MusicNote,
  MusicOff,
  Speaker,
  VolumeOff,
  VolumeUp,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { amber } from "@mui/material/colors";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../assets";
import { TABS } from "../common/constants";
import "./styles.css";

const Footer = ({ onClick, soundOn }) => {
  const audioRef = useRef(null);
  const [active, setActive] = useState(null);
  const [mute, setMute] = useState(true);

  const onMuteAudio = () => {
    console.log("[DEBUG] - mute audio");
    const audioDom = document.getElementById("audio");
    audioDom.pause();
    setMute(true);
  };

  const onUnmuteAudio = () => {
    console.log("[DEBUG] - unmute audio");
    const audioDom = document.getElementById("audio");
    audioDom.play();
    setMute(false);
  };

  useEffect(() => {
    window.addEventListener("focus", onUnmuteAudio);
    window.addEventListener("blur", onMuteAudio);

    return () => {
      window.removeEventListener("focus", onUnmuteAudio);
      window.removeEventListener("blur", onMuteAudio);
    };
  }, []);

  useEffect(() => {
    setActive(TABS.HOME);
  }, []);

  const scrollToSection = (value) => {
    if (value) {
      const el = document.getElementById(value);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onClickIcon = (value) => {
    setActive(value);
    scrollToSection(value);
    onClick(value);
    switch (value) {
      case TABS.AUDIO: {
        const audio = document.getElementById("audio");
        console.log("[DEBUG] :: ", { audio });
        if (mute) {
          audio.play();
          setMute(false);
        } else {
          audio.pause();
          setMute(true);
          audio.currentTime = 0;
        }
        break;
      }
      default:
        break;
    }
  };

  const getIconButtonClassName = (value) => {
    if (active === value) {
      return "footer-icon-button footer-icon-active";
    }
    return "footer-icon-button";
  };

  return (
    <>
      <div className="footer">
        <div
          className={getIconButtonClassName(TABS.HOME)}
          onClick={() => {
            onClickIcon(TABS.HOME);
          }}
        >
          <HomeOutlined fontSize="medium" />
          <p>Home</p>
        </div>
        <div className="footer-divider" />
        <div
          className={getIconButtonClassName(TABS.CALENDAR)}
          onClick={() => {
            onClickIcon(TABS.CALENDAR);
          }}
        >
          <CalendarMonthOutlined fontSize="medium" />
          <p>Calendar</p>
        </div>
        <div className="footer-divider" />
        <div
          className={getIconButtonClassName(TABS.RSVP)}
          onClick={() => {
            onClickIcon(TABS.RSVP);
          }}
        >
          <HistoryEduOutlined fontSize="medium" />
          <p>RSVP</p>
        </div>
        <div className="footer-divider" />
        <div
          className={getIconButtonClassName(TABS.LOCATION)}
          onClick={() => {
            onClickIcon(TABS.LOCATION);
          }}
        >
          <MapOutlined fontSize="medium" />
          <p>Location</p>
        </div>
        <div className="footer-divider" />
        <div
          className={getIconButtonClassName(TABS.AUDIO)}
          onClick={() => {
            onClickIcon(TABS.AUDIO);
          }}
        >
          {mute ? (
            <MusicOff fontSize="medium" />
          ) : (
            <MusicNote fontSize="medium" />
          )}
          <p>Audio</p>
        </div>
      </div>
      <audio
        id="audio"
        className="bg-music"
        playsInline
        autoPlay
        loop
        hidden
        controls
        muted={mute}
        preload="auto"
      >
        <source src={assets.song.stillLife} type="audio/mpeg" />
      </audio>
    </>
  );
};

export default Footer;
