import React from "react";
import { assets } from "../../assets";
import { BackgroundImage } from "../common";
import "./styles.css";

const texts = {
  intro1: "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
};

// const sample = `Assalamualaikum w.b.t\n\n\nSYED HASSAN BIN SYED ALI\n&\nAKMAL BINTI NAZARUDDIN\n\nDengan segala hormatnya mempersilakan\nY.B. / Y.BHG. TAN SRI / PUAN SRI / DATUK / DATO’/ DATIN / TUAN / PUAN / SAUDARA / SAUDARI\nke majlis perkahwinan\n\n\nSYED AHMAD FADHIL BIN SYED HASSAN\n&\nAFIFAH BINTI MUHIDZIR\n\n\nTEMPAT\nKuala Lumpur\n\nTARIKH\n30 Julai 2022\n\nMASA\n11:00 - 16:00`;
const Introduction = () => {
  return (
    <div tabIndex={1} className="intro-container">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.5,
        }}
      >
        <img
          alt=""
          src={assets.marbleBg}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div data-aos="fade-zoom-in" data-aos-duration={1000}>
        <p className="intro-text-normal" style={{ fontSize: "24px" }}>
          السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
        </p>
        <p
          className="intro-text-big bold"
          style={{ margin: "30px 0 0" }}
        >{`SYED HASSAN BIN SYED ALI\n&\nAKMAL BINTI NAZARUDDIN`}</p>
        <p className="intro-text-small" style={{ margin: "30px 0 0" }}>
          Dengan segala hormatnya mempersilakan
        </p>
        <p className="intro-text-normal bold">
          Y.B. / Y.BHG. TAN SRI / PUAN SRI / DATUK / DATO’/ DATIN / TUAN / PUAN
          / SAUDARA / SAUDARI
        </p>
        <p className="intro-text-small">dan pasangan ke majlis perkahwinan</p>
        <p className="intro-text-small">anakanda kami</p>
        <p className="intro-text-big bold" style={{ margin: "50px 0 0" }}>
          {`SYED AHMAD FADHIL BIN SYED HASSAN\n&\nAFIFAH BINTI MUHIDZIR`}
        </p>
        <p className="intro-text-small" style={{ margin: "50px 0 0" }}>
          TEMPAT
        </p>
        <p className="intro-text-normal bold">
          {`Dewan Merak Kayangan, Balai Felda,\nKuala Lumpur`}
        </p>
        <p className="intro-text-small" style={{ margin: "30px 0 0" }}>
          TARIKH
        </p>
        <p className="intro-text-normal bold">
          30 Julai 2022 | 1 Muharram 1444H
        </p>
        <p className="intro-text-small" style={{ margin: "30px 0 0" }}>
          MASA
        </p>
        <p className="intro-text-normal bold">11:00 AM - 4:00 PM</p>
      </div>
    </div>
  );
};

export default Introduction;
