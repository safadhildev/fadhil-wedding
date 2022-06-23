import React from "react";
import { Grid, Modal as MuiModal } from "@mui/material";
import "./styles.css";
import Input from "../Input";
import { Cancel } from "@mui/icons-material";
import BackgroundImage from "../BackgroundImage";
import { assets } from "../../../assets";

const Modal = ({
  visible,
  onClose,
  title,
  renderContent = () => {},
  children = null,
}) => {
  return (
    <MuiModal open={visible} onClose={onClose}>
      <div className="modal-container">
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
        <div className="modal-wrapper">
          <div style={{}}>
            <div className="modal-title-wrapper">
              <p className="modal-title">{title}</p>
              <div className="modal-close-wrapper" onClick={onClose}>
                <Cancel color="secondary" fontSize="medium" />
              </div>
            </div>
            <div style={{ position: "relative" }}>{children}</div>
          </div>
        </div>
      </div>
    </MuiModal>
  );
};

export default Modal;
