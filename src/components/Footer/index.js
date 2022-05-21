import {
  CalendarMonthOutlined,
  HistoryEduOutlined,
  HomeOutlined,
  LocalPhone,
  ManOutlined,
  MapOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { amber } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { TABS } from "../common/constants";
import "./styles.css";

const Footer = ({ onClick }) => {
  const [active, setActive] = useState(null);

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
    if (value === TABS.CALENDAR) {
      window.open("content://com.android.calendar/time");
    }
    onClick(value);
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
        className={getIconButtonClassName(TABS.CONTACT)}
        onClick={() => {
          onClickIcon(TABS.CONTACT);
        }}
      >
        <LocalPhone fontSize="medium" />
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Footer;
