import React from "react";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

const ProductListItem = ({ product }) => {
  const { id, title } = product;
  return (
    <ListItem key={id} disablePadding>
      <ListItemButton>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};

export default ProductListItem;
