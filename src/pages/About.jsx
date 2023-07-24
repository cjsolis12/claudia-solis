import * as React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import image1 from "../assets/me3.jpg";
import image2 from "../assets/me2.jpg";
import { RevealRight } from "../animations/RevealRight";
import { RevealLeft } from "../animations/RevealLeft";

export default function About() {
  return (
    <Grid container spacing={8}>
      {/* first row */}

      <Grid item xs={12} sm={6}>
        <RevealLeft>
          <img
            src={image2}
            alt="personal photo"
            style={{ width: "100%", height: "80%", objectFit: "contain", boxShadow: "6px 6px 7px -2px rgba(151, 155, 154, 1)" }}
          ></img>
        </RevealLeft>
      </Grid>

      <Grid item xs={12} sm={6}>
        <RevealRight>
          <Typography variant="h6">
            With a passion for learning and creativity, I made the leap from
            esthetician to teacher, nurturing minds along the way.
          </Typography>
        </RevealRight>
      </Grid>

      {/* second row */}

      <Grid item xs={12} sm={6}>
        {/* Text on the right */}
        <RevealLeft>
          {/* Add text component here */}
          <Typography variant="h6">
            But it was in the tech industry where I found my true calling,
            embracing innovation, challenges, and opportunities. I am excited to
            keep pushing myself to new heights, expanding my skills, and making a
            meaningful impact in the tech world.{" "}
          </Typography>
        </RevealLeft>
      </Grid>

      <Grid item xs={12} sm={6}>
        <RevealRight>
          <img
            src={image1}
            alt="personal photo"
            style={{ width: "100%", height: "80%", objectFit: "contain", boxShadow: "6px 6px 7px -2px rgba(151, 155, 154, 1)" }}
          ></img>
        </RevealRight>
      </Grid>
    </Grid>
  );
}
