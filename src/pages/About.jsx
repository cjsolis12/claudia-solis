import * as React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import image1 from "../assets/me3.jpg";
import image3 from "../assets/me1.jpg";
import image2 from "../assets/me2.jpg";
import { RevealRight } from "../animations/RevealRight";
import { RevealLeft } from "../animations/RevealLeft";
import ImageSlideshow from "../components/ui/ImageChange";

export default function About() {
  return (
    <Grid container spacing={8}>
      {/* first row */}
      <Grid item xs={12} sm={6} container alignItems="center" justifyContent="center">
        <RevealLeft>
          <h1  style={{
                fontSize: "50px",
                color: "",
                textAlign: "left",
                fontWeight: "normal"
                  
                }}>Hi, I'm Claudia Solis. A fullstack developer in the making</h1>

          <Typography variant="h6" style={{ textAlign: "left", fontSize:"20px" }}>
            With a passion for learning and creativity, I made the leap from
            esthetician to teacher, nurturing minds along the way.
          </Typography>
        </RevealLeft>
      </Grid>
      {/* Second Column */}

      <Grid item xs={12} sm={6}>
        <RevealRight>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <img
                src={image3}
                alt="personal photo"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  boxShadow: "6px 6px 7px -2px rgba(151, 155, 154, 1)",
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6">
                But it was in the tech industry where I found my true calling,
                embracing innovation, challenges, and opportunities. I am
                excited to keep pushing myself to new heights, expanding my
                skills, and making a meaningful impact in the tech world.
              </Typography>
            </Grid>
          </Grid>
        </RevealRight>
      </Grid>
    </Grid>
  );
}
