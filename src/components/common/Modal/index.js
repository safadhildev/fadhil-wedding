import React from "react";
import { Grid, Modal as MuiModal } from "@mui/material";
import "./styles.css";
import Input from "../Input";

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
        <div className="modal-title-wrapper">
          <p className="modal-title">{title}</p>
        </div>
        <div style={{ flex: 1 }}>{children}</div>
      </div>
      <div className={`Overlay ${visible ? "Show" : ""}`} onClick={onClose} />
    </>
  );
};

export default Modal;
