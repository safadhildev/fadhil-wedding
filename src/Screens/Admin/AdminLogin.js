import { FormControl, Input } from "@mui/material";
import React, { useState } from "react";
import { Button } from "../../components/common";

import "./styles.css";

const ADMIN_ROLES = {
  ADMIN: "ADMIN",
  SUPER_ADMIN: "SUPER_ADMIN",
};

const AdminLogin = ({ onEnter }) => {
  const [password, setPassword] = useState("#myfamily228#");

  return (
    <div className="admin-body">
      <FormControl fullWidth style={{ padding: 0 }}>
        <div className="admin-login-form-content">
          <Input
            style={{
              backgroundColor: "#EEE",
              padding: "5px 10px",
              width: "300px",
            }}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={(event) => {
              const { key } = event;
              if (key === "Enter" && password && password?.length > 0) {
                onEnter(password);
              }
            }}
          />
          <div style={{ width: "300px", margin: "30px 0 0" }}>
            <Button
              text="Enter"
              onClick={() => onEnter(password)}
              disabled={!password || password?.length <= 0}
            />
          </div>
        </div>
      </FormControl>
    </div>
  );
};

export default AdminLogin;
