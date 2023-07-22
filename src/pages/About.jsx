import * as React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import image1 from "../assets/me7.jpg"
import image2 from "../assets/me2.jpg"

export default function About() {
  return (
    <Grid
      container
      spacing={2}
    >
      {/* first row */}
      <Grid item xs={12} sm={6}>
        <Paper style={{ height: "100vh"}}>
        <img src={image1} alt="personal photo" style={{ width:"100%", height:"100%", objectFit: "contain"}}></img>
      </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper style={{ height: "100vh", background: "" }}>
          <Typography variant="h6">I made the decision to pursue a career in
            tech after trying the beauty industry as an esthetician and the education field as a teacher.</Typography>
        </Paper>
      </Grid>
      {/* second row */}
      <Grid item xs={12} sm={6}>
        {/* Text on the right */}
        <Paper style={{ height: "100vh", background: "" }}>
          {/* Add text component here */}
          <Typography variant="h6">Text here</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper style={{ height: "100vh"}}>
        <img src={image2} alt="personal photo" style={{ width:"100%", height:"100%", objectFit: "contain"}}></img>
      </Paper>
      </Grid>
    </Grid>
  );
}
