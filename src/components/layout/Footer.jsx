
import { NavLink, useLocation } from "react-router-dom";
import { Box } from "@mui/system";


export default function Footer() {
  return (
    <div className="navbar">
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
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
        >
          GitHub
        </NavLink>
        <NavLink 
        to="/work" 
        activeClassName="active-link"
     
        >
         LinkedIn
        </NavLink>
        <NavLink 
        to="/contact" 
        activeClassName="active-link"
        >
          Email
        </NavLink>
      </Box>
    </Box>
    </div>
  );
}