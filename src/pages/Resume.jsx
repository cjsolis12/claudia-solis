import * as React from "react";
import {Colors} from '../styles/theme/index'
import { Button, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import Grow from "@mui/material/Grow";

export default function Resume() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ maxWidth: 600, margin: "auto", maxHeight: "100vh" }}
    >
      {/* Text Column */}
      {/* <Grid
        item
        xs={6}
        md={6}
        sx={{
          textAlign: "center",
          borderRight: "1px solid #ccc",
          padding: "16px",
        }}
      >
        <h2>RESUME</h2>
        <div>
          <Button variant="contained">Resume</Button>
        </div>
      </Grid> */}

      {/* Front End Skills */}
      <Grid item xs={12} md={4} sx={{ padding: "16px", alignItems: "center" }}>
        <Grow in={true} easing="ease-in-out" timeout={800}>
          <Paper sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "16px" }}>
            <Avatar sx={{ backgroundColor: Colors.lilac }}>
              <DevicesOutlinedIcon />
            </Avatar>
            <h4>Front End Skills</h4>
          </Paper>
        </Grow>
      </Grid>

      {/* Back End Skills */}
      <Grid item xs={12} md={4} sx={{ textAlign: "center", padding: "16px" }}>
        <Grow in={true} easing="ease-in-out" timeout={900}>
          <Paper sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "16px"}}>
            <Avatar sx={{ backgroundColor: Colors.lilac }}>
              <StorageRoundedIcon />
            </Avatar>
            <h4>Backend Skills </h4>
          </Paper>
        </Grow>
      </Grid>

      {/* Other */}
      <Grid item xs={12} md={4} sx={{ textAlign: "center", padding: "16px" }}>
        <Grow in={true} easing="ease-in-out" timeout={1000}>
          <Paper sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "16px"}}>
            <Avatar sx={{ backgroundColor: Colors.lilac }}>
              <PsychologyRoundedIcon />
            </Avatar>
            <h4>Cross-Industry Experience </h4>
          </Paper>
        </Grow>
      </Grid>
    </Grid>
  );
}
