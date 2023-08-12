import * as React from "react";
import { useHoveredNavLinkContext } from "../components/ui/HoveredNavLinkContext";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";
import home from "../../src/assets/color2.jpg";
import about from "../../src/assets/about.jpg";
import work1 from "../../src/assets/fierce.jpg";
import contact from "../../src/assets/hello.jpg";
import resume from "../../src/assets/resume.jpg";


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
  return (
    <>
      <div className="hero-section">
        <div className="hero-container">
          <div className="overlay-text">
            <div>
              <h4>Claudia Solis</h4>
              <p>Full Stack Web Developer</p>
            </div>
            <div>
            <Stack direction="row" spacing={2} alignItems="center" >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#C7A6C5",
                }}
                onClick={handleResumeDownload}
              >
                Resume
              </Button>
              <Button
                variant="contained"
                href="https://github.com/cjsolis12"
                sx={{
                  backgroundColor: "#C7A6C5",
                }}
              >
                Github
              </Button>
            </Stack>
            </div>
          </div>
          <div className="image">
          <div className="image-overlay"></div>
          <img src={headerImage} alt="Header Image" />
            
          </div>
          </div>
      </div>
    </>
  );
}
