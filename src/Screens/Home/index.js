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
} from "../../components";
import { assets } from "../../assets";
import Guestbook from "../../components/Guestbook";
import InvitationCard2 from "../../components/InvitationCard2";

const Home = ({ section, showRSVP, onCloseRSVP }) => {
  const audioRef = useRef(null);
  const [mute, setMute] = useState(false);

  const onPlayAudio = () => {
    if (audioRef && audioRef?.current) {
      audioRef?.current.play();
      audioRef.current.volume = 0.01;
    }
  };

  useEffect(() => {
    onPlayAudio();
    document.body.addEventListener("touchstart", onPlayAudio);
  }, [audioRef]);

  const onMuteAudio = () => {
    setMute(true);
  };

  const onUnmuteAudio = () => {
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

  return (
    <div className="home-body">
      <div className="home-container">
        <audio
          ref={audioRef}
          id="audio"
          className="bg-music"
          playsInline
          autoPlay
          loop
          hidden
          controls
          muted={mute}
        >
          <source src={assets.song.stillLife} type="audio/mpeg" />
        </audio>

        <InvitationCard2 />
        <Introduction />
        <Tentative />
        <Countdown />
        <Guestbook />
        <Contact />
        <RSVP
          visible={showRSVP}
          onClose={() => {
            onCloseRSVP();
          }}
        />

        <div tabIndex={4} className="home-footer">
          <div className="home-footer-credit">
            <p>
              Icons made by{" "}
              <a href="https://www.flaticon.com/authors/flat-icons">
                Flat Icons
              </a>{" "}
              and <a href="https://www.flaticon.com/authors/freepik">Freepik</a>{" "}
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
  );
};

export default Home;
