import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
// import { SiJavascript, SiNodeDotJs} from "react-icons/si";

export default function Resume() {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{ maxWidth: 600, margin: "auto", border: "1px solid #ccc" }}
    >
      {/* Text Column */}
      <Grid
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
      </Grid>

      <Grid item xs={6} md={6} sx={{ textAlign: "center", padding: "16px" }}>
        <h3>Skills</h3>
        <div>
          {/* <SiJavascript size={48} /> */}
          <p>Frontend</p>
        </div>
        <div>
          {/* <SiNodeDotJs size={48} /> */}
          <p>Backend</p>
        </div>
        <div>
          {/* <SiDatabase size={48} /> */}
          <p>Other</p>
        </div>
      </Grid>
    </Grid>
  );
}
