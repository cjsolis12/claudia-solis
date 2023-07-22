import * as React from 'react';
import { useHoveredNavLinkContext } from '../components/ui/HoveredNavLinkContext';
import { Box } from "@mui/system";

import image1 from "../assets/fierce.jpg";
import image2 from "../assets/hello.jpg"

export default function Home() {
  const [headerImage, setHeaderImage] = React.useState(image1);
  const {hoveredNavLink } = useHoveredNavLinkContext();

  React.useEffect(() => {
    // Use a switch statement to set the header image based on the hoveredNavLink
    console.log("hovered Navlink", hoveredNavLink);
    switch (hoveredNavLink) {
      case "about":
        setHeaderImage(image1);
        break;
      case "work":
        setHeaderImage(image1);
        break;
      case "resume":
        setHeaderImage(image1);
        break;
      case "contact":
        setHeaderImage(image2);
        break;
      default:
        setHeaderImage(image2);
        break;
    }
  }, [hoveredNavLink]);
  console.log("headerImage", headerImage);

  return (
    <Box  sx={{
     display: "flex", 
     alignItems: "center",
     height: "100vh"
    }}>
       <img src={headerImage} alt="Header Image" className='header-images'/>
    </Box>
  );
}
