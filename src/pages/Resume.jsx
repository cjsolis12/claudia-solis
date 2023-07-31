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
    <>
      <Grid container spacing={9} sx={{ maxHeight: "100vh" }}>
        {/* Front End Skills */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ padding: "16px", alignItems: "center" }}
        >
          <Grow in={true} easing="ease-in-out" timeout={1200}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "8px",
                minHeight: "300px",
                width: "100%",
              }}
            >
              <Avatar sx={{ backgroundColor: Colors.oliveGreen }}>
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
              <List
                sx={{
                  marginTop: "10px",
                  "& .MuiListItem-dense": { paddingTop: 0, paddingBottom: 0 },
                }}
              >
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
                padding: "8px",
                minHeight: "300px",
                width: "100%",
              }}
            >
              <Avatar sx={{ backgroundColor: Colors.oliveGreen }}>
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
              <List
                sx={{
                  marginTop: "10px",
                  "& .MuiListItem-dense": { paddingTop: 0, paddingBottom: 0 },
                }}
              >
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
                padding: "8px",
                minHeight: "300px",
                width: "100%",
              }}
            >
              <Avatar sx={{ backgroundColor: Colors.oliveGreen }}>
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
              <List
                sx={{
                  marginTop: "10px",
                  "& .MuiListItem-dense": { paddingTop: 0, paddingBottom: 0 },
                }}
              >
                <ListItem>Node JS</ListItem>
                <ListItem>Express</ListItem>
                <ListItem>GraphQL</ListItem>
                <ListItem>Mongo DB</ListItem>
                <ListItem>MySQL</ListItem>
              </List>
            </Paper>
          </Grow>
        </Grid>
      </Grid>
    </>
  );
}
