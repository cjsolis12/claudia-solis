import * as React from "react";
import { useHoveredNavLinkContext } from "../components/ui/HoveredNavLinkContext";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import about from "../assets/me1.jpg";
import work from "../assets/fierce.jpg";
import work1 from "../assets/fierce1.jpg";
import contact from "../assets/hello.jpg";
import resume from "../assets/resume.jpg";
import home from "../assets/home.jpg";

export default function Home() {
  const [headerImage, setHeaderImage] = React.useState(work);
  const { hoveredNavLink } = useHoveredNavLinkContext();

  React.useEffect(() => {
    // Use a switch statement to set the header image based on the hoveredNavLink
    console.log("hovered Navlink", hoveredNavLink);
    switch (hoveredNavLink) {
      case "About":
        setHeaderImage(about);
        break;
      case "Work":
        setHeaderImage(work1);
        break;
      case "Resume":
        setHeaderImage(resume);
        break;
      case "Contact":
        setHeaderImage(contact);
        break;
      default:
        setHeaderImage(home);
        break;
    }
  }, [hoveredNavLink]);
  console.log("headerImage", headerImage);

  return (
    <div>
      <div className="hero-container">
        <div className="home-img">
          {" "}
          <img src={headerImage} alt="Header Image" className="header-images" />
        </div>

        <div class="overlay-text">
          <h1>Claudia Solis</h1>
          <p>Full Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
}
