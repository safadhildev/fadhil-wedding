import React from "react";
import Header from "../common/Header";
import "./styles.css";

const tentativeData = [
  {
    id: "tentative-01",
    time: "12:00 PM",
    text: "Ketibaan Tetamu",
  },
  {
    id: "tentative-02",
    time: "12:30 PM",
    text: "Ketibaan Pengantin",
  },
  {
    id: "tentative-03",
    time: "1:00 PM",
    text: "Makan Beradap",
  },
  {
    id: "tentative-04",
    time: "2:00 PM",
    text: "Sesi Bergambar",
  },
  {
    id: "tentative-05",
    time: "4:00 PM",
    text: "Tamat",
  },
];

const Tentative = () => {
  const renderItem = (item, index) => {
    const { id, time, text } = item;
    const delay = (index + 1) * 200;
    return (
      <div
        key={id}
        className="tentative-item-wrapper"
        data-aos="flip-down"
        data-aos-delay={delay}
      >
        <div className="tentative-time">
          <p>{time}</p>
        </div>
        <div className="tentative-item">
          <p>{text}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="tentative-container" data-aos="fade-in">
      {/* <p className="tentative-title">Aturcara</p>
      <div className="tentative-title-border" /> */}
      <Header text="Aturcara" />
      <div className="tentative-table-wrapper">
        {tentativeData?.map(renderItem)}
      </div>
    </div>
  );
};

export default Tentative;
