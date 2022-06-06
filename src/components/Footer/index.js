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
import React, { useEffect, useState } from "react";
import { TABS } from "../common/constants";
import "./styles.css";

const Footer = ({ onClick, soundOn }) => {
  const [active, setActive] = useState(null);
  const [audioPlay, setAudioPlay] = useState(true);

  useEffect(() => {
    setActive(TABS.HOME);
  }, []);

  const scrollToSection = (value) => {
    if (value) {
      const el = document.getElementById(value);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log("[DEBUG] :: ", { audioPlay });

  const onClickIcon = (value) => {
    setActive(value);
    scrollToSection(value);
    onClick(value);
    switch (value) {
      case TABS.AUDIO: {
        const audio = document.getElementById("audio");
        console.log("[DEBUG] :: ", { audio });
        if (audioPlay) {
          audio.pause();
          audio.currentTime = 0;
          setAudioPlay(false);
        } else {
          audio.play();
          setAudioPlay(true);
        }
        break;
      }
      default:
        break;
    }
  };

  const getIconColor = (value) => {
    if (active === value) {
      return "primary";
    }
    return "secondary";
  };

  const getIconButtonClassName = (value) => {
    if (active === value) {
      return "footer-icon-button footer-icon-active";
    }
    return "footer-icon-button";
  };

  return (
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
        {audioPlay ? (
          <MusicNote fontSize="medium" />
        ) : (
          <MusicOff fontSize="medium" />
        )}
        <p>Audio</p>
      </div>
      {/* <div
        className={getIconButtonClassName(TABS.CONTACT)}
        onClick={() => {
          onClickIcon(TABS.CONTACT);
        }}
      >
        <LocalPhone fontSize="medium" />
        <p>Contact</p>
      </div> */}
    </div>
  );
};

export default Footer;
