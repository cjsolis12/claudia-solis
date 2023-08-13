import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import MenuIcon from "@mui/icons-material/Menu";
import { useUIContext } from "../ui/context";
import HeroPage from "./PageHero"

export default function Nav() {
  const { setDrawerOpen } = useUIContext();
  const [heroPage, setHeroPage] = useState(null);

  
  const handleNavLinkClick = () => {
    setHeroPage(pageName);
    setDrawerOpen(true);
  };

  //Resume Download
  const handleResumeDownload = () => {
    const fileUrl =
      "https://docs.google.com/document/d/1zsEbW0x16dFTWi2zpNTR1jfq_0-uqW4orMeG2kbzjFs/export?format=pdf";
    window.open(fileUrl);
  };
  return (
    <React.Fragment>
      <AppBar position="fixed" sx={{ backgroundColor: "#C7A6C5" }}>
        <Toolbar>
          <IconButton onClick={() => setDrawerOpen(true)} sx={{ margin: ".5rem", backgroundColor: "#D0CE27" }}>
            <MenuIcon sx={{ color: "white", fontSize: "1.5rem" }}/>
          </IconButton>
          <Button
            variant="contained"
            onClick={handleResumeDownload}
            sx={{
              backgroundColor: "#D0CE27",
              marginLeft: "auto",
              height: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PictureAsPdfIcon sx={{ margin: "5px" }} /> Resume
          </Button>
        </Toolbar>
      </AppBar>
      {heroPage && <HeroPage title={heroPage} />}
    </React.Fragment>
  );
}
