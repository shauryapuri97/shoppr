import React from "react";
import { Box, Toolbar } from "@mui/material";

export const ViewRenderer = ({ children }) => (
  <Box
    sx={{
      height: "100%",
      width: "100%",
      marginLeft: 3,
      marginRight: 3,
    }}
  >
    <Toolbar />
    {children}
  </Box>
);
