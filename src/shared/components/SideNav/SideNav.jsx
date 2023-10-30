import React, { useContext } from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Avatar,
  Tooltip,
} from "@mui/material";
import { UsernameContext } from "../../contexts/UsernameContext";
import CategoryIcon from "@mui/icons-material/Category";
import UsersIcon from "@mui/icons-material/Person";
import SideNavItem from "./SideNavItem";
import shopprLogo from "../../../assets/shopprLogo.png";

const DRAWER_WIDTH = 200;

const SIDE_NAV_ITEMS = [
  { label: "Products", path: "/", Icon: CategoryIcon },
  { label: "Users", path: "/users", Icon: UsersIcon },
];

function SideNav() {
  const username = useContext(UsernameContext);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar
          style={{ display: "flex", flex: 1, justifyContent: "space-between" }}
        >
          <img src={shopprLogo} alt="Shoppr Logo" width={DRAWER_WIDTH - 50} />
          <Tooltip title={username}>
            <Avatar alt="Remy Sharp" sx={{ height: 30, width: 30 }} />
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {SIDE_NAV_ITEMS.map(({ label, path, Icon }) => (
              <SideNavItem key={path} path={path} label={label} Icon={Icon} />
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default SideNav;
