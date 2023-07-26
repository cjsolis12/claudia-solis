import * as React from 'react';
import { useHoveredNavLinkContext } from '../components/ui/HoveredNavLinkContext';
import { Box } from "@mui/system";

import about from "../assets/me1.jpg";
import work from "../assets/fierce.jpg";
import work1 from "../assets/fierce1.jpg";
import contact from "../assets/hello.jpg"
import resume from "../assets/resume.jpg"
import home from "../assets/home.png"

export default function Home() {
  const [headerImage, setHeaderImage] = React.useState(work);
  const {hoveredNavLink } = useHoveredNavLinkContext();

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
        setHeaderImage(work);
        break;
    }
  }, [hoveredNavLink]);
  console.log("headerImage", headerImage);

  return (
    <Box  sx={{
     display: "flex", 
     alignItems: "center",
     height: "100vh",
     maxHeight: "800px",
     margin: "0 auto"
    }}>
       <img src={headerImage} alt="Header Image" className='header-images'/>
    </Box>
  );
}
