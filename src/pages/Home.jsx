import * as React from "react";
import { useHoveredNavLinkContext } from "../components/ui/HoveredNavLinkContext";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import home from "../assets/color2.jpg";
import about from "../assets/about.jpg";
import work1 from "../assets/fierce.jpg";
import contact from "../assets/hello.jpg";
import resume from "../assets/resume.jpg";

export default function Home() {
  const [headerImage, setHeaderImage] = React.useState(work1);
  const { hoveredNavLink } = useHoveredNavLinkContext();

  //Resume Download
  const handleResumeDownload = () => {
    const fileUrl =
      "https://docs.google.com/document/d/1zsEbW0x16dFTWi2zpNTR1jfq_0-uqW4orMeG2kbzjFs/export?format=pdf";
    window.open(fileUrl);
  };

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
      case "Skills":
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
    <>
      <div className="hero-section">
        <div className="hero-container">
          <div className="overlay-text">
            <h1>Claudia Solis</h1>
            <p>Full Stack Web Developer</p>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "#C7A6C5",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#C7A6C5",
                  marginRight: "5px",
                  height: "2rem",
                }}
                onClick={handleResumeDownload}
              >
                Resume
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#C7A6C5",
                  marginLeft: "5px",
                  height: "2rem",
                }}
              >
                {" "}
                <a
                  href="https://github.com/cjsolis12"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Github
                </a>
              </Button>
            </Box>
          </div>

          <div className="header-images-container">
            <img
              src={headerImage}
              alt="Header Image"
              className="header-images"
            />
          </div>
          <div className="svg-decoration"></div>
        </div>
      </div>
    </>
  );
}
