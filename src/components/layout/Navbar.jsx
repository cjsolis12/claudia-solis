import { createContext, useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import { Padding } from "@mui/icons-material";
import { useHoveredNavLinkContext } from "../ui/HoveredNavLinkContext";
import HeroPage from "./PageHero";
import { Underline } from "../../animations/Underline";

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [heroPage, setHeroPage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const { setHoveredNavLink } = useHoveredNavLinkContext();

  // NavLinks
  const navLinks = [
    { to: "/", text: "Claudia Solis", pageName: null },
    { to: "/about", text: "About", pageName: "About Me" },
    { to: "/work", text: "Work", pageName: "My Work" },
    { to: "/resume", text: "Resume", pageName: "My Resume / Skills" },
    { to: "/contact", text: "Contact", pageName: "Get in Touch" },
  ];

  const handleNavLinkClick = (pageName) => {
    setHeroPage(pageName);
  };

  const handleMouseEnter = (navLinkName) => {
    setHoveredNavLink(navLinkName);
  };

  const handleMouseLeave = () => {
    setHoveredNavLink(null);
  };

  return (
    <div className="navbar">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            exact={link.to === "/"}
            activeClassName="active-link"
            sx={{
              marginRight: "1rem",
              textDecoration: isHomePage && isHovered ? "underline" : "none",
            }}
            onClick={() => handleNavLinkClick(link.pageName)}
            onMouseEnter={() => handleMouseEnter(link.text)}
            onMouseLeave={handleMouseLeave}
          >
          {link.text}
          </NavLink>
        ))}
      </Box>
      {heroPage && <HeroPage title={heroPage} />}
    </div>
  );
}
