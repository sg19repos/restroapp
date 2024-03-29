import React from "react";
import { Icon } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalDiningOutlinedIcon from "@mui/icons-material/LocalDiningOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const IconComponent = ({ name, color, ...rest }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "FavoriteBorderIcon":
        return <FavoriteBorderIcon />;
      case "StarBorderIcon":
        return <StarBorderIcon />;
      case "ArrowBackIcon":
        return <ArrowBack />;
      case "ShoppingCartIcon":
        return <ShoppingCartIcon />;
      case "AccountCircleIcon":
        return <AccountCircleIcon />;
      case "LocalDiningOutlinedIcon":
        return <LocalDiningOutlinedIcon />;
      case "SearchIcon":
        return <SearchIcon />;
      case "ArrowRightIcon":
        return <ArrowRightIcon />;
      case "Add":
        return <AddIcon />;
      case "Remove":
        return <RemoveIcon />;
      case "RemoveCircleIcon":
        return <RemoveCircleIcon />;
      case "AddCircleIcon":
        return <AddCircleIcon />;
      case "FastfoodRoundedIcon":
        return <FastfoodRoundedIcon />;
      case "HomeRoundedIcon":
        return <HomeRoundedIcon />;
      case "AccountBalanceWalletRoundedIcon":
        return <AccountBalanceWalletRoundedIcon />;
      case "LogoutRoundedIcon":
        return <LogoutRoundedIcon />;
      case "KeyboardArrowRightRoundedIcon":
        return <KeyboardArrowRightRoundedIcon />;
      case "AddBoxIcon":
        return <AddBoxIcon />;
      case "IndeterminateCheckBoxOutlinedIcon":
        return <IndeterminateCheckBoxOutlinedIcon />;
      case "ArrowCircleRightOutlinedIcon":
        return <ArrowCircleRightOutlinedIcon />;
      case "MapsHomeWorkRoundedIcon":
        return <MapsHomeWorkRoundedIcon />;
      case "EmailIcon":
        return <EmailIcon />;
      case "CheckCircleOutlineOutlinedIcon":
        return <CheckCircleOutlineOutlinedIcon />;
      case "edit":
        return "edit";
      case "delete":
        return "delete";
      // Add more cases for other icons as needed
      default:
        return "";
    }
  };
  // return <Icon {...rest}>{name}</Icon>;
  const icon = getIcon(name);
  return (
    <Icon color={color} {...rest}>
      {icon}
    </Icon>
  );
  // return <FavoriteBorderIcon />;
};

export default IconComponent;
