import React from "react";
import "./styles.css";

// const sample = `Assalamualaikum w.b.t\n\n\nSYED HASSAN BIN SYED ALI\n&\nAKMAL BINTI NAZARUDDIN\n\nDengan segala hormatnya mempersilakan\nY.B. / Y.BHG. TAN SRI / PUAN SRI / DATUK / DATO’/ DATIN / TUAN / PUAN / SAUDARA / SAUDARI\nke majlis perkahwinan\n\n\nSYED AHMAD FADHIL BIN SYED HASSAN\n&\nAFIFAH BINTI MUHIDZIR\n\n\nTEMPAT\nKuala Lumpur\n\nTARIKH\n30 Julai 2022\n\nMASA\n11:00 - 16:00`;
const Introduction = () => {
  return (
    <div tabIndex={1} className="intro-container">
      <div data-aos="fade-zoom-in" data-aos-duration={1000}>
        <p className="intro-text-normal" style={{ fontSize: "24px" }}>
          السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
        </p>
        <p
          className="intro-text-big"
          style={{ margin: "30px 0 0" }}
        >{`SYED HASSAN BIN SYED ALI\n&\nAKMAL BINTI NAZARUDDIN`}</p>
        <p className="intro-text-small" style={{ margin: "30px 0 0" }}>
          Dengan segala hormatnya mempersilakan
        </p>
        <p className="intro-text-normal">
          Y.B. / Y.BHG. TAN SRI / PUAN SRI / DATUK / DATO’/ DATIN / TUAN / PUAN
          / SAUDARA / SAUDARI
        </p>
        <p className="intro-text-small">ke majlis perkahwinan</p>
        <p className="intro-text-big" style={{ margin: "50px 0 0" }}>
          {`SYED AHMAD FADHIL BIN SYED HASSAN\n&\nAFIFAH BINTI MUHIDZIR`}
        </p>
        <p className="intro-text-small" style={{ margin: "50px 0 0" }}>
          TEMPAT
        </p>
        <p className="intro-text-normal">Kuala Lumpur</p>
        <p className="intro-text-small" style={{ margin: "30px 0 0" }}>
          TARIKH
        </p>
        <p className="intro-text-normal">30 Julai 2022</p>
        <p className="intro-text-small" style={{ margin: "30px 0 0" }}>
          MASA
        </p>
        <p className="intro-text-normal">11:00 AM - 4:00 PM</p>
      </div>
    </div>
  );
};

export default Introduction;
