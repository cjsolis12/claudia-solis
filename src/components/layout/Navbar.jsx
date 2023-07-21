import * as React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";


export default function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <NavLink to="/" exact activeClassName="active-link">
        <h2>Claudia Solis</h2>
      </NavLink>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <NavLink to="/about" activeClassName="active-link">
          About
        </NavLink>
        <NavLink to="/work" activeClassName="active-link">
          Work
        </NavLink>
        <NavLink to="/resume" activeClassName="active-link">
          Resume
        </NavLink>
        <NavLink to="/contact" activeClassName="active-link">
          Contact
        </NavLink>
      </Box>
    </Box>
  );
}
