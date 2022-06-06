import React from "react";
import { assets } from "../../assets";
import { TABS } from "../common/constants";
import "./styles.css";

const InvitationCard2 = () => {
  return (
    <div id={TABS.HOME} tabIndex={0} className="ic2-container">
      <div className="ic2-bg" />

      <div className="ic2-frame">
        <div className="ic2-frame-img">
          <img className="ic2-frame1" src={assets.frame1} alt="" />
        </div>

        <div className="ic2-frame-content">
          <div className="ic2-frame-info">
            <p>{`WALIMATUL URUS`}</p>
          </div>
          <div className="ic2-frame-name">
            <p>Fadhil</p>
            <p>&</p>
            <p>Fify</p>
          </div>
          <div className="ic2-frame-wrapper">
            <p className="ic2-frame-day">Sabtu</p>
            <div className="ic2-frame-date">
              <p>Julai</p>
              <p>30</p>
              <p>2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard2;
