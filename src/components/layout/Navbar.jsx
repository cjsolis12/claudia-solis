import { createContext, useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import { Padding } from "@mui/icons-material";
import { useHoveredNavLinkContext } from "../ui/HoveredNavLinkContext";
import HeroPage from "./PageHero"

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [heroPage, setHeroPage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const { setHoveredNavLink } = useHoveredNavLinkContext();

  const handleNavLinkClick = (pageName) => {
    setHeroPage(pageName);
  }

  
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
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <NavLink
        to="/"
        exact
        activeClassName="active-link"
        sx={{ marginRight: "1rem",  textDecoration: isHomePage && isHovered ? "underline" : "none", }}
        onMouseEnter={() => handleMouseEnter("/")}
        onMouseLeave={handleMouseLeave}
      >
        <h2>Claudia Solis</h2>
      </NavLink>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          Padding: "1rem",
        }}
        spacing={7}
      >
        <NavLink 
        to="/about" 
        activeClassName="active-link"
        onClick={() => handleNavLinkClick("About Me")}
        onMouseEnter={() => handleMouseEnter("about")}
        onMouseLeave={handleMouseLeave}
        >
          About
        </NavLink>
        <NavLink 
        to="/work" 
        activeClassName="active-link"
        onClick={() => handleNavLinkClick("My Work")}
        onMouseEnter={() => handleMouseEnter("work")}
        onMouseLeave={handleMouseLeave}
        >
          Work
        </NavLink>
        <NavLink 
        to="/resume" 
        activeClassName="active-link"
        onClick={() => handleNavLinkClick("My Resume / Skills")}
        onMouseEnter={() => handleMouseEnter("resume")}
        onMouseLeave={handleMouseLeave}
        >
          Resume
        </NavLink>
        <NavLink 
        to="/contact" 
        activeClassName="active-link"
        onClick={() => handleNavLinkClick("Get in Touch")}
        onMouseEnter={() => handleMouseEnter("contact")}
        onMouseLeave={handleMouseLeave}
        >
          Contact
        </NavLink>
      </Box>
      
    </Box>
    {heroPage && <HeroPage title={heroPage} />}
    </div>
  );
}
