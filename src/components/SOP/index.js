import React, { useEffect, useState } from "react";
import { Button, Modal } from "../common";
import ICalendarLink from "react-icalendar-link";
import moment from "moment";
import "./styles.css";
import { assets } from "../../assets";

const event = {
  title: "Walimatul Urus Fadhil & Fify",
  description: "Fadhil & Fify | Walimatul Urus",
  startTime: "2022-07-30T11:00:00+08:00",
  endTime: "2022-07-30T16:00:00+08:00",
  location:
    "Dewan Merak Kayangan, Bangunan Balai Felda, Kampung Datuk Keramat, 54000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
};

const SOP = ({ visible, onClose }) => {
  const onCloseModal = () => {
    onClose();
  };

  const onSaveToGoogleCalendar = () => {
    const link =
      "https://calendar.google.com/calendar/r/eventedit?text=Walimatul Urus Fadhil & Fify&dates=20220730T110000/20220730T160000&location=Dewan Merak Kayangan, Bangunan Balai Felda, Kampung Datuk Keramat, 54000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur&sf=true&output=xml";

    window.open(link);
  };

  return (
    <Modal visible={visible} title="Calendar" onClose={onCloseModal}>
      <div className="calendar-header">
        <p>30 Julai 2022 | 11AM - 4PM</p>
      </div>
      <div className="calendar-container">
        <div className="calendar-img-wrapper">
          <ICalendarLink event={event} filename={`fadhil&fify-inv.ics`}>
            <div>
              <img
                className="calendar-img-apple"
                alt=""
                src={assets.appleLogo}
              />
              <p>Apple Calendar</p>
            </div>
          </ICalendarLink>
        </div>

        <div className="calendar-img-wrapper" onClick={onSaveToGoogleCalendar}>
          <img className="calendar-img-google" alt="" src={assets.googleLogo} />
          <p>Google Calendar</p>
        </div>
      </div>
    </Modal>
  );
};

export default SOP;
