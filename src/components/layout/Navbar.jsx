import { createContext, useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useHoveredNavLinkContext } from "../ui/HoveredNavLinkContext";
import HeroPage from "./PageHero";

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [heroPage, setHeroPage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const { hoveredNavLink, setHoveredNavLink } = useHoveredNavLinkContext();

  // NavLinks
  const navLinks = [
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
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            display: { xs: "block", md: "none" },
          }}
          onClick={() => {}}
        >
          <MenuIcon />
        </IconButton>
        <NavLink
          to={"/"}
          className="nav-elements"
          activeClassName="active-link"
          sx={{
            marginRight: "1rem",
            textDecoration: isHomePage && isHovered ? "underline" : "none",
          
          }}
          onClick={() => handleNavLinkClick()}
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={handleMouseLeave}
        >
          Claudia Solis
        </NavLink>
        <div className="nav-container">
          {navLinks.map((link) => (
            <NavLink
              className="nav-elements"
              key={link.to}
              to={link.to}
              exact={link.to === "/"}
              activeClassName="active-link"
              sx={{
                marginRight: "1rem",
                textDecoration:
                  isHomePage && hoveredNavLink === link.text
                    ? "underline"
                    : "none",
                animation: `0.3s ease-in-out`,
              }}
              onClick={() => handleNavLinkClick(link.pageName)}
              onMouseEnter={() => handleMouseEnter(link.text)}
              onMouseLeave={handleMouseLeave}
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      </Toolbar>
      {heroPage && <HeroPage title={heroPage} />}
    </div>
  );
}
