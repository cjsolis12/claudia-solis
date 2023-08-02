import * as React from "react";
import { Colors } from "../styles/theme/index";
import { Button, Paper, Typography } from "@mui/material";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import Grow from "@mui/material/Grow";
import PageLayouts from "../components/layout/PageLayouts"

export default function Skills() {
  return (
    <>
    <PageLayouts>
      <Grid container spacing={9} >
        {/* Front End Skills */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ padding: "16px", alignItems: "center", justifyContent:"center" }}
        >
          <Grow in={true} easing="ease-in-out" timeout={1200}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "8px",
                minHeight: "100%",
                width: "100%",
              }}
            >
              <Avatar sx={{ backgroundColor: Colors.oliveGreen, marginTop: "2rem" }}>
                <DevicesOutlinedIcon />
              </Avatar>

              <Typography
                id="basic-list-demo"
                level="body3"
                textTransform="uppercase"
                fontWeight="600"
                marginTop={2}
              >
                Front End Skills
              </Typography>
              <List
                sx={{
                  marginTop: "10px",
                  "& .MuiListItem-dense": { paddingTop: 0, paddingBottom: 0 },
                }}
              >
                <Typography>HTML</Typography>
                <Typography>CSS</Typography>
                <Typography>Javascript</Typography>
                <Typography>React</Typography>
                <Typography>JQuery</Typography>
                <Typography>TailWind</Typography>
                <Typography>Bootstrap</Typography>
                <Typography>Material UI</Typography>
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
                paddingTop: "3rem",
                alignItems: "center",
                padding: "8px",
                minHeight: "100%",
                width: "100%",
              }}
            >
              <Avatar sx={{ backgroundColor: Colors.oliveGreen, marginTop: "2rem" }}>
                <StorageRoundedIcon />
              </Avatar>
              <Typography
                id="basic-list-demo"
                level="body3"
                textTransform="uppercase"
                fontWeight="600"
                marginTop={2}
              >
                Back End Skills
              </Typography>
              <List
                sx={{
                  marginTop: "10px",
                  "& .MuiListItem-dense": { paddingTop: 0, paddingBottom: 0 },
                }}
              >
                <Typography>Node JS</Typography>
                <Typography>Express</Typography>
                <Typography>GraphQL</Typography>
                <Typography>Mongo DB</Typography>
                <Typography>MySQL</Typography>
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
                minHeight: "100%",
                width: "100%",
             
              }}
            >
              <Avatar sx={{ backgroundColor: Colors.oliveGreen, marginTop: "2rem"  }}>
                <PsychologyRoundedIcon />
              </Avatar>
              <Typography
                id="basic-list-demo"
                level="body3"
                textTransform="uppercase"
                fontWeight="600"
                marginTop={2}
              >
                Cross-Industry Experience
              </Typography>
              <List
              dense
                sx={{
                  marginTop: "10px",
                  "& .MuiListItem-dense": { paddingTop: 0, paddingBottom: 0 },
                }}
              >
                <Typography >Patience</Typography>
                <Typography >Communication</Typography>
                <Typography>Collaboration</Typography>
                <Typography>Meets Deadlines</Typography>
                <Typography>Active listening</Typography>
                <Typography>Attention to detail</Typography>
                <Typography>Professionalism</Typography>
              </List>
            </Paper>
          </Grow>
        </Grid>
      </Grid>
      </PageLayouts>
    </>
  );
}
