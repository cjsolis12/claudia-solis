import * as React from "react";
import { Grid, Typography, Box, IconButton } from "@mui/material";
import projectData from "../data/ProjectData";
import { motion, useAnimation } from "framer-motion";
import { GitHub as GitHubIcon } from "@mui/icons-material";
import { Link as InsertLinkIcon } from "@mui/icons-material";

export default function Work() {
  const controls = useAnimation();

  const handleHover = () => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.25 },
    });
  };

  const handleHoverEnd = () => {
    controls.start({ y: 20, opacity: 0 });
  };

  return (
    <>
      <Grid container spacing={4}>
        {projectData.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={item.id}
            style={{ height: "50%", height: "50%" }}
          >
            <motion.div
              style={{ position: "relative", overflow: "hidden" }}
              onHoverStart={handleHover}
              onHoverEnd={handleHoverEnd}
            >
              <motion.img
                src={item.img}
                alt={item.alt}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.3, delay: 0.25 }}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  background: "rgba(0, 0, 0, 0.7)",
                  padding: "8px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="subtitle1" style={{ color: "#fff" }}>
                    {item.title}
                  </Typography>
                </Box>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={controls}
                transition={{ type: "tween", duration: 0.7, delay: 0.1 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff" }}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    href={item.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff" }}
                  >
                    <InsertLinkIcon />
                  </IconButton>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
