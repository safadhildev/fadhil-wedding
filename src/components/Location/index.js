import React, { useEffect, useState } from "react";
import { Button, Modal } from "../common";
import ICalendarLink from "react-icalendar-link";
import moment from "moment";
import "./styles.css";
import { assets } from "../../assets";
import QRCode from "react-qr-code";

const gMapLink = "https://goo.gl/maps/tgTSgar5mNq12BUR8";
const wazeLink =
  "https://ul.waze.com/ul?ll=3.16839024%2C101.71716571&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location";

const address = `Dewan Merak Kayangan\nBalai Felda, Jalan Gurney 1, 54000 Kuala Lumpur\nWilayah Persekutuan Kuala Lumpur`;

const Location = ({ visible, onClose }) => {
  const onCloseModal = () => {
    onClose();
  };

  const onOpenGoogleMaps = () => {
    window.open(gMapLink);
  };

  const onOpenWaze = () => {
    window.open(wazeLink);
  };

  return (
    <Modal visible={visible} title="Location" onClose={onCloseModal}>
      <div className="location-wrapper">
        <div className="location-header-wrapper">
          <p className="location-header">{address}</p>
        </div>
        <div className="location-maps-wrapper">
          <div className="location-maps-item" onClick={onOpenWaze}>
            <img alt="" src={assets.wazeLogo} />
            <p>Waze</p>
          </div>
          <div className="location-maps-item" onClick={onOpenGoogleMaps}>
            <img alt="" src={assets.gMapsLogo} />
            <p>Google Maps</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Location;
