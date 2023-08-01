import * as React from "react";
import { Grid, Typography } from "@mui/material";
import {Colors} from '../styles/theme/index'
import aboutme2 from "../assets/aboutme2.jpg"
import { RevealRight } from "../animations/RevealRight";
import { RevealLeft } from "../animations/RevealLeft";


export default function About() {
  return (
    <Grid container spacing={8} marginBottom={5} paddingTop={5}  sx={{ maxWidth: "100vw" }}>
      {/* first row */}
      <Grid item xs={12} sm={6} container alignItems="center" justifyContent="center">
        <RevealLeft>
          <Typography variant="h2"  style={{
                color: "#373737",
                textAlign: "left",
                fontWeight: "normal"
                  
                }}>Hi, I'm Claudia Solis! A fullstack developer.</Typography>

          <Typography variant="h6" style={{ textAlign: "left", fontSize:"18px", fontWeight: "100", color: '#373737' }}>
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
                src={aboutme2}
                alt="personal photo"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  boxShadow: "8px 8px 7px -2px rgba(151, 155, 154, 1)",
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" style={{ textAlign: "left", fontSize:"18px", fontWeight: "lighter", color: '#373737'}}>
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
