import { useState } from "react";
import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useUIContext } from "../ui/context";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import HeroPage from "./PageHero";

export default function NavDrawer() {
  const { drawerOpen, setDrawerOpen } = useUIContext();
  const [heroPage, setHeroPage] = useState(null);

  const navigate = useNavigate();

  const handleNavLinkClick = (link) => {
   navigate({pathname:link.to, state:{ heroPage: link.pageName}});
   setHeroPage(link.pageName)
  }

  // NavLinks
  const navLinks = [
    { to: "/about", text: "About", pageName: "About Me" },
    { to: "/work", text: "Work", pageName: "My Work" },
    { to: "/skills", text: "Skills", pageName: "My Skills" },
    { to: "/contact", text: "Contact", pageName: "Get in Touch" },
  ];

  return (
    <>
      {drawerOpen && (
        <CloseIcon
          onClick={() => setDrawerOpen(false)}
          sx={{
            fontSize: "2rem",
            position: "absolute",
            top: 10,
            left: 180,
            zIndex: 1999,
            color: "#D0CE27",
            border: "solid 1px #D0CE27",
            borderRadius: "50px",
          }}
        />
      )}
      <Drawer open={drawerOpen}>
        <List>
          {navLinks.map((link) => (
            <ListItemButton
              key={link.pageName}
              onClick={() => handleNavLinkClick(link)}
            >
              <ListItemText>{link.text}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      {heroPage && <HeroPage title={heroPage} />}
    </>
  );
}
