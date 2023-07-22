import * as React from 'react';
import { useHoveredNavLinkContext } from '../components/ui/HoveredNavLinkContext';


export default function Home() {
  const [headerImage, setHeaderImage] = React.useState("../assets/me1.png");
  const {hoveredNavLink } = useHoveredNavLinkContext();

  React.useEffect(() => {
    // Use a switch statement to set the header image based on the hoveredNavLink
    switch (hoveredNavLink) {
      case "about":
        setHeaderImage("../me1.jpg");
        break;
      case "work":
        setHeaderImage("../assets/fierce.jpg");
        break;
      case "resume":
        setHeaderImage("../assets/fierce.jpg");
        break;
      case "contact":
        setHeaderImage("../assets/fierce.jpg");
        break;
      default:
        setHeaderImage("./assets/me2.jpg");
        break;
    }

    console.log("hovered Navlink", hoveredNavLink)
  }, [hoveredNavLink]);

  return (
    <div>
       <img src={headerImage} alt="Header Image" />
    </div>
  );
}
