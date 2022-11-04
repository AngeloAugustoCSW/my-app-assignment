import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export const PageLayout = () => {
  const DrawerApp = () => (
    <Box>
      <Typography variant="h5">Main Menu</Typography>
      <List>
        <listItem>
          <ListItemButton component="a" to="/">
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </listItem>
        <listItem>
          <ListItemButton component="a" to="about">
            <ListItemText primary={"About"} />
          </ListItemButton>
        </listItem>
        <listItem>
          <ListItemButton component="a" href="album">
            <ListItemText primary={"Album"} />
          </ListItemButton>
        </listItem>
        <listItem>
          <ListItemButton component="a" href="news">
            <ListItemText primary={"News"} />
          </ListItemButton>
        </listItem>
        <listItem>
          <ListItemButton component="a" href="contact">
            <ListItemText primary={"Contact"} />
          </ListItemButton>
        </listItem>
      </List>
    </Box>
  );

  const ContainerMenu = () => {
    const [open, setOpen] = useState(false);

    const lideComMenu = () => {
      setOpen(!open);
    };
    return (
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton onClick={lideComMenu}>
              <MenuIcon></MenuIcon>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box>
          <Drawer open={open}>
            <DrawerApp />
          </Drawer>
        </Box>
      </Box>
    );
  };
  return (
    <>
      <ContainerMenu />

      <Outlet />
    </>
  );
};
