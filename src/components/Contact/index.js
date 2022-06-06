import React from "react";
import { Call, WhatsApp } from "@mui/icons-material";
import { TABS } from "../common/constants";
import "./styles.css";
import { Header, BackgroundImage } from "../common";

const contacts = [
  {
    id: 1,
    name: "Syed Hassan Bin Syed Ali\n(Bapa)",
    phone: "+60102283001",
  },
  {
    id: 2,
    name: "Akmal Binti Nazaruddin\n(Ibu)",
    phone: "+60172105107",
  },
  // {
  //   id: 1,
  //   name: "Syed Ahmad Fadhil Bin Syed Hassan (Pengantin Lelaki)",
  //   phone: "+60142326966",
  // },
];

const Contact = () => {
  const onCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`);
  };

  const onWhatsapp = (phoneNumber) => {
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`);
  };

  const renderContact = (item, index) => {
    const { id, name, phone } = item;

    const delay = (index + 1) * 100;
    return (
      <div key={id}>
        <div className="home-section3-contact-item">
          <p data-aos="fade-right" data-aos-delay={delay}>
            {name}
          </p>
          <div
            className="home-section3-contact-icon"
            data-aos="fade-left"
            data-aos-delay={delay}
          >
            <Call
              fontSize="medium"
              onClick={() => {
                onCall(phone);
              }}
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay={delay}
            className="home-section3-contact-icon home-whatsapp"
          >
            <WhatsApp
              fontSize="medium"
              onClick={() => {
                onWhatsapp(phone);
              }}
            />
          </div>
        </div>
        {index !== contacts.length - 1 && <div className="contact-border" />}
      </div>
    );
  };

  return (
    <div
      id={TABS.CONTACT}
      tabIndex={4}
      className="home-section3"
      data-aos="zoom-in"
    >
      <BackgroundImage />
      <Header text="Hubungi" />
      <div className="home-section3-contact-wrapper">
        {contacts.map(renderContact)}
      </div>
    </div>
  );
};

export default Contact;
