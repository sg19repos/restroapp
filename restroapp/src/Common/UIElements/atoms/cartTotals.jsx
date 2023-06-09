import React from "react";
import { Box, Typography } from "@mui/material";
import {
  GlobalFont,
  GlobalFontColor,
  themeColor,
} from "../../../Themes/GlobalThemes";
import { Currency } from "./Currency";

const SubtotalTotalComponent = () => {
  const subTotal = 100;
  const taxRate = 0.13;
  const total = subTotal + subTotal * taxRate;

  return (
    <Box
      sx={{
        // border: "1px dotted #000",
        border: `1px solid ${themeColor}`,
        borderRadius: "10px",
        padding: "2rem 2rem",
        ...GlobalFontColor,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", pb: 2 }}>
        <Typography variant="body1" sx={{ pr: 2, ...GlobalFont }}>
          Sub total
        </Typography>
        {/*<Box sx={{ flex: 1, borderBottom: "1px dotted #000" }}></Box>*/}
        <Box sx={{ flex: 1 }}>:</Box>

        <span style={{ paddingLeft: "1rem" }}>
          <Currency amount={subTotal} />
        </span>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="body1" sx={{ pr: 2, ...GlobalFont }}>
          Total
        </Typography>
        {/*<Box sx={{ flex: 1, borderBottom: "1px dotted #000" }}></Box>*/}
        <Box sx={{ flex: 1 }}>:</Box>
        <span style={{ paddingLeft: "1rem" }}>
          <Currency amount={total} />
        </span>
      </Box>
    </Box>
  );
};

export default SubtotalTotalComponent;
