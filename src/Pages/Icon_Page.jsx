import {useState} from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import InfoIcon from "@mui/icons-material/Info";

export default function SideMenu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, link: "/" },
    { text: "Contact", icon: <ContactMailIcon />, link: "/contact" },
    { text: "About", icon: <InfoIcon />, link: "/about" },
  ];

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<MenuIcon />}
        onClick={toggleDrawer(true)}
      >
        Open Menu
      </Button>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              component="a"
              href={item.link}
              onClick={toggleDrawer(false)} 
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}