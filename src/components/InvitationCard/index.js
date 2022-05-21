import React from "react";
import { assets } from "../../assets";
import { TABS } from "../common/constants";
import "./styles.css";

const InvitationCard = () => {
  return (
    <div id={TABS.HOME} tabIndex={0} className="home-section1">
      {/* <div className="home-s1-bg" /> */}
      <div className="inv-bg">
        <img alt="" src={assets.blackTexture1} />
      </div>
      <div className="inv-flower" data-aos="zoom-out" data-aos-duration={1000}>
        <img alt="" src={assets.flower} />
      </div>
      <div
        className="inv-flower-bottom"
        data-aos="zoom-out"
        data-aos-duration={1000}
      >
        <img alt="" src={assets.flower} />
      </div>

      <div className="home-s1-card">
        <div
          className="inv-frame-1"
          data-aos="fade"
          delay={100}
          data-aos-duration={1000}
        >
          <div />
        </div>
        <div
          className="inv-frame-2"
          data-aos="fade"
          delay={300}
          data-aos-duration={1000}
        >
          <div />
        </div>
        <div className="home-s1-card-info">
          <p>{`WALIMATUL URUS`}</p>
        </div>
        <div className="home-s1-card-name">
          <p>Fadhil</p>
          <p>&</p>
          <p>Fify</p>
        </div>
        {/* <div className="home-s1-card-info">
            <p>{`Undangan\nMajlis Perkahwinan`}</p>
          </div> */}
        <div className="inv-date-wrapper">
          <p className="inv-date-day">Sabtu</p>
          <div className="inv-date">
            <p>Julai</p>
            <p>30</p>
            <p>2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
