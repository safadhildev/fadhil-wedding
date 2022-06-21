import React, { useEffect, useState } from "react";
import moment from "moment";
import "./styles.css";
import { assets } from "../../assets";
import Header from "../common/Header";
import { BackgroundImage } from "../common";

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    hour: "00",
    minute: "00",
    second: "00",
    day: "00",
  });

  const getCountDown = () => {
    const eventDateTime = moment("2022-07-30 11:00:00.000+08:00").format();
    const currentDateTime = moment().format();
    const duration = moment.duration(
      moment(eventDateTime).diff(currentDateTime)
    );

    const day =
      Math.floor(duration.asDays()) < 10
        ? `0$Math.floor(duration.asDays());`
        : Math.floor(duration.asDays());
    const hour =
      duration.get("hours") < 10
        ? `0${duration.get("hours")}`
        : duration.get("hours");
    const minute =
      duration.get("minutes") < 10
        ? `0${duration.get("minutes")}`
        : duration.get("minutes");
    const second =
      duration.get("seconds") < 10
        ? `0${duration.get("seconds")}`
        : duration.get("seconds");

    setCountdown({
      ...countdown,
      day,
      hour,
      minute,
      second,
    });

    return "";
  };

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const eventDateTime = moment("2022-07-30 11:00:00.000+08:00").format();
      const currentDateTime = moment().format();
      const remainingDateTime = moment(eventDateTime).diff(currentDateTime);

      if (remainingDateTime > 0) {
        getCountDown(remainingDateTime);
      } else {
        setCountdown({
          day: "00",
          hour: "00",
          minute: "00",
          second: "00",
        });
      }
    }, 1000);

    return () => {
      clearTimeout(countdownInterval);
    };
  }, []);

  return (
    <div
      tabIndex={2}
      className="home-section-countdown-container"
      data-aos="zoom-in"
    >
      <BackgroundImage />
      <Header text="Menghitung Hari" />
      {/* <div className="countdown-title-border" /> */}
      {/* <div
        className="countdown-border"
        data-aos="fade-right"
        data-aos-duration={1000}
      /> */}
      <div className="home-section-countdown-wrapper">
        <div
          className="home-countdown-item"
          data-aos="flip-down"
          data-aos-delay={50}
        >
          <p>{countdown.day}</p>
          <p>Hari</p>
        </div>
        <p
          className="home-countdown-colon"
          data-aos="flip-down"
          data-aos-delay={100}
        >
          :
        </p>
        <div
          className="home-countdown-item"
          data-aos="flip-down"
          data-aos-delay={150}
        >
          <p>{countdown.hour}</p>
          <p>Jam</p>
        </div>
        <p
          className="home-countdown-colon"
          data-aos="flip-down"
          data-aos-delay={200}
        >
          :
        </p>
        <div
          className="home-countdown-item"
          data-aos="flip-down"
          data-aos-delay={250}
        >
          <p>{countdown.minute}</p>
          <p>Minit</p>
        </div>
        <p
          className="home-countdown-colon"
          data-aos="flip-down"
          data-aos-delay={300}
        >
          :
        </p>
        <div
          id="second"
          className="home-countdown-item"
          data-aos="flip-down"
          data-aos-delay={350}
        >
          <p>{countdown.second}</p>
          <p>Saat</p>
        </div>
      </div>
      {/* <div
        className="countdown-border"
        data-aos="fade-left"
        data-aos-duration={1000}
      /> */}
    </div>
  );
};

export default Countdown;
