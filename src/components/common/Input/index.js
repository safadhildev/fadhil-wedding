import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const Input = ({ value, placeholder, onChange }) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="input-container">
      <div
        className="input-wrapper"
        onClick={() => {
          if (inputRef && inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        {(isFocused || value?.length > 0) && (
          <div className="input-label">
            <p>{placeholder}</p>
          </div>
        )}
        <input
          ref={inputRef}
          className="input"
          type="text"
          value={value}
          placeholder={!isFocused && placeholder}
          onChange={(event) => {
            onChange(event.target.value);
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
        />
      </div>
    </div>
  );
};

export default Input;
