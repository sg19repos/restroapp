import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IconComponent from "../Icons";

const TopNavBar = () => {
  const navigate = useNavigate();
  const handleIconClick = () => {
    navigate("/");
  };
  return (
    <AppBar position="absolute" elevation={0} color={"transparent"}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="back"
          onClick={handleIconClick}
        >
          <IconComponent
            name="ArrowBackIcon"
            sx={{
              color: "#774936",
            }}
          />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center" }}
        ></Typography>
        <div className={"navbar-icons-alignment"}>
          <IconButton edge="end" color="inherit" aria-label="cart">
            <IconComponent
              name="LocalDiningOutlinedIcon"
              sx={{
                color: "#774936",
              }}
            />
          </IconButton>
          <IconButton color="inherit" aria-label="account">
            <IconComponent
              name="AccountCircleIcon"
              sx={{
                color: "#774936",
              }}
            />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
