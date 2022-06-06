import React, { useEffect, useRef, useState } from "react";
import { Container, Stack, Typography } from "@mui/material";
import "./styles.css";
import { TABS } from "../../components/common/constants";
import { Call, SetMealOutlined, WhatsApp } from "@mui/icons-material";
import moment from "moment";
import {
  Countdown,
  Contact,
  Introduction,
  InvitationCard,
  Tentative,
  RSVP,
  Calendar,
  Location,
  SplashScreen,
} from "../../components";
import { assets } from "../../assets";
import Guestbook from "../../components/Guestbook";
import InvitationCard2 from "../../components/InvitationCard2";

const Home = ({ section, showModal, onCloseModal }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const splashScreenDom = document.getElementsByClassName("splash-container");
    console.log("[DEBUG] :: ", { splashScreenDom });
  }, [document]);

  return (
    <>
      <SplashScreen
        visible={loading}
        onFinish={() => {
          setLoading(false);
        }}
      />

      <div className={`home-body ${loading ? "home-hidden" : "home-shown"}`}>
        <div className="home-container">
          <InvitationCard2 />
          <Introduction />
          <Tentative />
          <Countdown />
          <Guestbook />
          <Contact />
          <Calendar
            visible={showModal?.visible && showModal?.type === TABS.CALENDAR}
            onClose={onCloseModal}
          />
          <RSVP
            visible={showModal?.visible && showModal?.type === TABS.RSVP}
            onClose={onCloseModal}
          />
          <Location
            visible={showModal?.visible && showModal?.type === TABS.LOCATION}
            onClose={onCloseModal}
          />

          <div tabIndex={4} className="home-footer">
            <div className="home-footer-credit">
              <p>
                Icons made by{" "}
                <a href="https://www.flaticon.com/authors/flat-icons">
                  Flat Icons
                </a>{" "}
                and{" "}
                <a href="https://www.flaticon.com/authors/freepik">Freepik</a>{" "}
                from www.flaticon.com
              </p>
              <p>
                rectangular png from{" "}
                <a href="https://pngtree.com/so/rectangular">pngtree.com/</a>
              </p>
              <p>
                <a href="https://www.freepik.com/photos/black-sand">
                  Black sand photo created by Vectorium - www.freepik.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
