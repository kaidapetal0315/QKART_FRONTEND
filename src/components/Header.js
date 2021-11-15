import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";

const Header = () =>
  {

    return (
      <Box className="header">
        <Box
          className="header-title"
        >
          <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        <Button
          startIcon={<ArrowBackIcon />}
          variant="text"
          sx={{ color: "#00a278" }}
        >
          Back to explore
        </Button>
      </Box>
    );
  };

export default Header;
