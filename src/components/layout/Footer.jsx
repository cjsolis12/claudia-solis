import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


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
          Padding: "7rem",
          fontSize: "25px"
        }}
        spacing={10}
      >
        <NavLink 
        to="/about" 
        activeClassName="active-link"
        >
          <HiOutlineMail/>
        </NavLink>
        <NavLink 
        to="/work" 
        activeClassName="active-link"
     
        >
        <FaGithub/>
        </NavLink>
        <NavLink 
        to="/contact" 
        activeClassName="active-link"
        >
          <FaLinkedinIn/>
        </NavLink>
      </Box>
    </Box>
    </div>
  );
}