import { Input } from "@mui/material";
import React, { useState } from "react";
import { Button } from "../../components/common";
import AdminLogin from "./AdminLogin";
import AdminPage from "./AdminPage";

import { ADMIN_ROLES } from "./constants";

import "./styles.css";

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  const onEnter = (password) => {
    switch (password) {
      case "#myfamily228#": {
        setLoggedIn(true);
        setRole(ADMIN_ROLES.ADMIN);
        break;
      }
      case "admin#myfamily228#": {
        setLoggedIn(true);
        setRole(ADMIN_ROLES.SUPER_ADMIN);
        break;
      }
      default:
        alert("Incorrect password");
        break;
    }
  };

  return (
    <div className="admin-body">
      {loggedIn ? <AdminPage role={role} /> : <AdminLogin onEnter={onEnter} />}
    </div>
  );
};

export default Admin;
