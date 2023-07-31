import * as React from "react";
import { Colors } from "../styles/theme/index";
import { Button, Paper, Typography } from "@mui/material";
import List from "@mui/material/List"; 
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import Grow from "@mui/material/Grow";

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
      <Grid item xs={12} md={4} sx={{ padding: "16px", alignItems: "center" }}>
        <Grow in={true} easing="ease-in-out" timeout={1200}>
          <Paper
           elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "16px",
            }}
          >
            <Avatar sx={{ backgroundColor: Colors.lilac }}>
              <DevicesOutlinedIcon />
            </Avatar>

            <Typography
              id="basic-list-demo"
              level="body3"
              textTransform="uppercase"
              fontWeight="lg"
            >
              Front End Skills
            </Typography>
            <List>
              <ListItem>HTML</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>Javascript</ListItem>
              <ListItem>React</ListItem>
              <ListItem>JQuery</ListItem>
              <ListItem>TailWind</ListItem>
              <ListItem>Bootstrap</ListItem>
              <ListItem>Material UI</ListItem>
            </List>
          </Paper>
        </Grow>
      </Grid>

      {/* Back End Skills */}
      <Grid item xs={12} md={4} sx={{ textAlign: "center", padding: "16px" }}>
        <Grow in={true} easing="ease-in-out" timeout={1400}>
          <Paper
          elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "16px",
            }}
          >
            <Avatar sx={{ backgroundColor: Colors.lilac }}>
              <StorageRoundedIcon />
            </Avatar>
            <Typography
              id="basic-list-demo"
              level="body3"
              textTransform="uppercase"
              fontWeight="lg"
            >
              Back End Skills
            </Typography>
            <List>
              <ListItem>Node JS</ListItem>
              <ListItem>Express</ListItem>
              <ListItem>GraphQL</ListItem>
              <ListItem>Mongo DB</ListItem>
              <ListItem>MySQL</ListItem>
          
            </List>
          </Paper>
        </Grow>
      </Grid>

      {/* Other */}
      <Grid item xs={12} md={4} sx={{ textAlign: "center", padding: "16px" }}>
        <Grow in={true} easing="ease-in-out" timeout={1600}>
          <Paper
           elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "16px",
            }}
          >
            <Avatar sx={{ backgroundColor: Colors.lilac }}>
              <PsychologyRoundedIcon />
            </Avatar>
            <Typography
              id="basic-list-demo"
              level="body3"
              textTransform="uppercase"
              fontWeight="lg"
            >
              Cross-Industry Experience
            </Typography>
          </Paper>
        </Grow>
      </Grid>
    </Grid>
  );
}
