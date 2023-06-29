import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = ({ children, hasHiddenAuthButtons }) => {

  const history = useHistory();

  const logoutHandle = () => {
    localStorage.clear();
    history.push("/");

    window.location.reload();
  }

  const handleRegister = () => {
    history.push("/register");
  }

  const handleLogin = () => {
    history.push("/login")
  }

  const routeToExplore = () => {
    history.push("/");
  }

  if (hasHiddenAuthButtons) {
    return (
      <Box className="header">
        <Box className="header-title">
          <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {children}
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={routeToExplore}
        >
          Back to explore
        </Button>
      </Box>
    );
  }
  return (
    <Box className="header">
      <Box className="header-title">
        <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>
      {children}
      <Stack direction="row" spacing={2} alignItems="center">
        {localStorage.getItem("username") ? (
          <>
            <Avatar
              src="avatar.png"
              alt={localStorage.getItem("username") || "Profile"}
            />

            <p className="userrname-text">{localStorage.getItem("username")}</p>

            <Button type="primary" onClick={logoutHandle}>Logout</Button>
          </>
        ) : (
          <>
            <Button onClick={handleLogin}>Login</Button>
            <Button onClick={handleRegister} variant="contained">Register</Button>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Header;
