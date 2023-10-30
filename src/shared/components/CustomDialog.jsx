import React from "react";
import ReactDOM from "react-dom";
import { Dialog } from "@mui/material";

export const CustomDialog = ({ isOpen, onClose, children }) => {
  return ReactDOM.createPortal(
    <Dialog open={isOpen} onClose={onClose}>
      {children}
    </Dialog>,
    document.getElementById("portal")
  );
};
