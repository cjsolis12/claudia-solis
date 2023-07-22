import * as React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import projectData from "../data/ProjectData";

export default function Work() {
  return (
    <>
      <Grid container spacing={8}>
        {projectData.map((item) => (
          <Grid item xs={12} sm={6} key={item.id}>
            <Paper sx={{ padding: 2 }}>
              <img src={item.img} alt={item.alt} />
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body1">{item.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
