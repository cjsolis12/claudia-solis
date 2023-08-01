import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IconButton, Toolbar, Typography, useMediaQuery, Button} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useHoveredNavLinkContext } from "../ui/HoveredNavLinkContext";
import HeroPage from "./PageHero";

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [heroPage, setHeroPage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const { hoveredNavLink, setHoveredNavLink } = useHoveredNavLinkContext();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [showNavLinks, setShowNavLinks] = useState(false);

  // NavLinks
  const navLinks = [
    { to: "/about", text: "About", pageName: "About Me" },
    { to: "/work", text: "Work", pageName: "My Work" },
    { to: "/skills", text: "Skills", pageName: "My Skills" },
    { to: "/contact", text: "Contact", pageName: "Get in Touch" },
  ];

    //Resume Download
    const handleResumeDownload = () => {
      const fileUrl =
      "https://docs.google.com/document/d/1zsEbW0x16dFTWi2zpNTR1jfq_0-uqW4orMeG2kbzjFs/export?format=pdf";
      window.open(fileUrl);
    };

  const handleNavLinkClick = (pageName) => {
    setHeroPage(pageName);
    if (isSmallScreen) {
      setShowNavLinks(false);
    }
  };

  const handleMouseEnter = (navLinkName) => {
    setHoveredNavLink(navLinkName);
  };

  const handleMouseLeave = () => {
    setHoveredNavLink(null);
  };

  //Toggle the state to show/hide the navLinks on small Screens
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
        {/* Name as Logo in Navbar */}
        <NavLink
          to={"/"}
          className="nav-elements"
          activeClassName="active-link"
          sx={{
            marginRight: "1rem",
            textDecoration: isHomePage && isHovered ? "underline" : "none",
            color: "#373737",
          }}
          onClick={() => handleNavLinkClick()}
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={handleMouseLeave}
        >
          Claudia Solis
        </NavLink>

        {/* Page NavLinks */}
        <div className="nav-container">
          {/* Show/hide navlinks based on state */}
          {(!isSmallScreen || showNavLinks) && (
            <div>
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
                    display: { xs: "none", md: "initial" },
                    color: theme.palette.primary.main,
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

        {/* RESUME PDF BUTTON */}
        <Button variant="contained"
        onClick={handleResumeDownload}
                sx={{ backgroundColor: "#C7A6C5",marginLeft: "5px", height: "2rem" }}><PictureAsPdfIcon></PictureAsPdfIcon> Resume</Button>

        {/* Hamburger menu for small screens */}
        {isSmallScreen && (
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
                      color: theme.palette.primary.main,
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
        )}
      </Toolbar>
      {heroPage && <HeroPage title={heroPage} />}
    </div>
  );
}
