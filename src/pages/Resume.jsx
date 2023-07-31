import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';

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
      <Grid item xs={6} md={4} sx={{ padding: "16px" }}>
        <div> <DevicesOutlinedIcon size={48} /></div>
        <h4>Front End Skills</h4>
      </Grid>

         {/* Back End Skills */}
      <Grid item xs={6} md={4} sx={{ textAlign: "center", padding: "16px" }}>
       <div> <StorageRoundedIcon size={48} /></div>
       <h4>Backend Skills </h4>
     
 
      </Grid>

      {/* Other */}
      <Grid item xs={6} md={4} sx={{ textAlign: "center", padding: "16px" }}>
       <div> <PsychologyRoundedIcon size={48} /></div>
       <h4>Cross-Industry Experience </h4>
    
      </Grid>
    </Grid>
  );
}
