import { createContext, useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import { Padding } from "@mui/icons-material";
import { useHoveredNavLinkContext } from "../ui/HoveredNavLinkContext";

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isHovered, setIsHovered] = useState(false);
  const { setHoveredNavLink } = useHoveredNavLinkContext();

  
  const handleMouseEnter = (navLink) => {
    setHoveredNavLink(navLink);
  };

  const handleMouseLeave = () => {
    setHoveredNavLink(null);
  };

  return (
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
        onMouseEnter={handleMouseEnter}
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
          About
        </NavLink>
        <NavLink 
        to="/work" 
        activeClassName="active-link"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
          Work
        </NavLink>
        <NavLink 
        to="/resume" 
        activeClassName="active-link"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
          Resume
        </NavLink>
        <NavLink 
        to="/contact" 
        activeClassName="active-link"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
          Contact
        </NavLink>
      </Box>
    </Box>
  );
}
