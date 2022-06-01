import { CircularProgress } from "@mui/material";
import React from "react";
import "./styles.css";

const Button = ({ onClick = () => {}, text, loading, disabled }) => {
  return (
    <div
      className={disabled ? "button-container-disabled" : "button-container"}
      onClick={disabled ? null : onClick}
    >
      {loading ? (
        <CircularProgress size={22} />
      ) : (
        <p className="button-text">{text}</p>
      )}
    </div>
  );
};

export default Button;
