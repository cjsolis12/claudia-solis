import * as React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import image1 from "../assets/me3.jpg";
import image2 from "../assets/me2.jpg";
import { RevealRight } from "../animations/RevealRight";
import { RevealLeft } from "../animations/RevealLeft";

export default function About() {
  return (
    <Grid
      container
      spacing={8}
    >
      {/* first row */}

      <Grid item xs={12} sm={6}>
        <RevealLeft>
          <img
            src={image2}
            alt="personal photo"
            style={{ width: "100%", height: "80%", objectFit: "contain" }}
          ></img>
        </RevealLeft>
      </Grid>

      <Grid item xs={12} sm={6}>
        <RevealRight>
          <Typography variant="h6">
            I made the decision to pursue a career in tech after trying the
            beauty industry as an esthetician and the education field as a
            teacher.
          </Typography>
        </RevealRight>
      </Grid>

      {/* second row */}

      <Grid item xs={12} sm={6}>
        {/* Text on the right */}
        <RevealLeft>
          <Paper style={{ height: "20vh", background: "" }}>
            {/* Add text component here */}
            <Typography variant="h6">Text here</Typography>
          </Paper>
        </RevealLeft>
      </Grid>

      <Grid item xs={12} sm={6}>
        <RevealRight>
          <img
            src={image1}
            alt="personal photo"
            style={{ width: "100%", height: "80%", objectFit: "contain" }}
          ></img>
        </RevealRight>
      </Grid>
    </Grid>
  );
}
