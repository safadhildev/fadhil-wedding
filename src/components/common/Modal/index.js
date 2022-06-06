import React from "react";
import { Grid, Modal as MuiModal } from "@mui/material";
import "./styles.css";
import Input from "../Input";
import { Cancel } from "@mui/icons-material";

const Modal = ({
  visible,
  onClose,
  title,
  renderContent = () => {},
  children = null,
}) => {
  return (
    <>
      <div className={`Modal ${visible ? "Show" : ""}`}>
        <div className="modal-wrapper">
          <div className="modal-title-wrapper">
            <p className="modal-title">{title}</p>
            <div className="modal-close-wrapper" onClick={onClose}>
              <Cancel color="secondary" fontSize="medium" />
            </div>
          </div>
          <div style={{ flex: 1 }}>{children}</div>
        </div>
      </div>
      <div className={`Overlay ${visible ? "Show" : ""}`} onClick={onClose} />
    </>
  );
};

export default Modal;
