import * as React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import image1 from "../assets/me3.jpg";
import image2 from "../assets/me2.jpg";
import { Reveal } from "../animations/aboutpage";

export default function About() {
  return (
    <Grid
      container
      spacing={8}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
      initial="hidden "
      animate="visible"
    >
      {/* first row */}

      <Grid item xs={12} sm={6}>
        <img
          src={image2}
          alt="personal photo"
          style={{ width: "100%", height: "80%", objectFit: "contain" }}
        ></img>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Reveal>
        <Typography variant="h6">
          I made the decision to pursue a career in tech after trying the beauty
          industry as an esthetician and the education field as a teacher.
        </Typography>
        </Reveal>
      </Grid>

      {/* second row */}

      <Grid item xs={12} sm={6}>
        {/* Text on the right */}
        <Paper style={{ height: "20vh", background: "" }}>
          {/* Add text component here */}
          <Typography variant="h6">Text here</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Reveal>
        <img
          src={image1}
          alt="personal photo"
          style={{ width: "100%", height: "80%", objectFit: "contain" }}
        ></img>
        </Reveal>
      </Grid>
    </Grid>
  );
}
