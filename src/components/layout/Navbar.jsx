import * as React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import { Padding } from "@mui/icons-material";


export default function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem"
      }}
    >
      <NavLink to="/" exact activeClassName="active-link" sx={{ marginRight: "1rem" }}>
        <h2>Claudia Solis</h2>
      </NavLink>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center"
        }}
        spacing={7}
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
