import * as React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import projectData from "../data/ProjectData";

export default function Work() {
  return (
    <>
      <Grid container spacing={4}>
        {projectData.map((item) => (
          <Grid item xs={12} sm={6} key={item.id} style={{ height: "50%", height: "50%"}}>
              <img src={item.img} alt={item.alt} style={{ width: "100%", height: "100%", objectFit: "contain" }} />  
          </Grid>
        ))}
      </Grid>
    </>
  );
}
