import * as React from "react";
import { Grid, Typography } from "@mui/material";
import {Colors} from '../styles/theme/index'
import PageLayout from "../components/layout/PageLayouts";
import color1 from "../assets/color1.jpg"
import { RevealRight } from "../animations/RevealRight";
import { RevealLeft } from "../animations/RevealLeft";


export default function About() {
  return (
    <PageLayout>
    <Grid container spacing={6} marginBottom={10} paddingTop={5} sx={{ maxWidth: "100vw" }}>
    {/* First Column */}
    <Grid item xs={12} sm={12} md={6} container alignItems="center" paddingBottom={4}>
      <RevealLeft>
        <Typography variant="h2" style={{
          color: "#373737",
          textAlign: "left",
          fontWeight: "normal",
          paddingBottom: "2rem"
        }}>
          Hi, I'm Claudia Solis! <span style={{ color: '#D0CE27' }}>A fullstack web developer.</span>
        </Typography>
  
        <Typography variant="body1" style={{ textAlign: "left", fontSize: "20px", fontWeight: "100", color: '#373737' }}>
        I transitioned from esthetician to teacher, driven by a love for learning and creativity. Yet, is was in the tech industry where I discovered my true passion. Embracing innovation, I now thrive on exciting challenges and endless possibilities. 
        </Typography>
      </RevealLeft>
    </Grid>
  
    {/* Second Column */}
    <Grid item xs={12} sm={12} md={6} container alignItems="center">
      <RevealRight>
        <Grid item xs={12}>
          <img
            src={color1}
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
          <Typography variant="body1" style={{ textAlign: "left", fontSize: "20px", fontWeight: "lighter", color: '#373737', paddingTop: '3rem' }}>
           As a full-stack web developer, I find joy in both frontend and backend work. However, I have a special interest in the backend technologies. I am fascinated by how different technologies work together to create amazing user experiences. My experience includes working with with <span style={{ color: '#C7A6C5' }}>Node.js, Express, MongoDB and MySQL.</span>  I am deeply motivated to continue learning and refining my skills to make an impact in tech.
          </Typography>
        </Grid>
      </RevealRight>
    </Grid>
  </Grid>
  </PageLayout>
  
  );
}
