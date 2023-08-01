import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useHoveredNavLinkContext } from "../ui/HoveredNavLinkContext";
import HeroPage from "./PageHero";

export default function NavbarSmallScreen() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [heroPage, setHeroPage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const { hoveredNavLink, setHoveredNavLink } = useHoveredNavLinkContext();
  const [showNavLinks, setShowNavLinks] = useState(false);

  // NavLinks
  const navLinks = [
    { to: "/about", text: "About", pageName: "About Me" },
    { to: "/work", text: "Work", pageName: "My Work" },
    { to: "/skills", text: "Skills", pageName: "My Skills" },
    { to: "/contact", text: "Contact", pageName: "Get in Touch" },
  ];

  const handleNavLinkClick = (pageName) => {
    setHeroPage(pageName)
    setShowNavLinks(false);
  };

  const handleMouseEnter = (navLinkName) => {
    setHoveredNavLink(navLinkName);
  };

  const handleMouseLeave = () => {
    setHoveredNavLink(null);
  };
  const handleMenuClick = () => {
    setShowNavLinks((prevShowNavLinks) => !prevShowNavLinks);
  };


  return (
    <div className="navbar">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#373737",
        }}
      >
        {/* Hamburger menu for small screens */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              display: { xs: "block", md: "none" },
            }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          {/* Render navLinks as a column under the icon when showNavLinks is true */}
          {showNavLinks && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  exact={link.to === "/"}
                  activeClassName="active-link"
                  sx={{
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
          )}
        </div>
      </Toolbar>
      {heroPage && <HeroPage title={heroPage} />}
    </div>
  );
}