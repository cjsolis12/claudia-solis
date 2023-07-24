import * as React from "react";

import { Grid, Typography, Box, IconButton } from "@mui/material";
import projectData from "../data/ProjectData";
import { motion, useAnimation } from "framer-motion";
import { GitHub as GitHubIcon } from "@mui/icons-material";
import { Link as InsertLinkIcon } from "@mui/icons-material";

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null)


  const handleHoverStart = (index) => {
    setHoveredIndex(index)
  };

  const handleHoverEnd = () => {
    setHoveredIndex(null)
  };

  return (
    <>
      <Grid container spacing={6} justifyContent="center">
        {projectData.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={item.id}
            style={{ height: "300px", width: "200px" }}
          >
            <motion.div
              style={{ position: "relative", overflow: "hidden", width: "100%", height: "100%" }}
              onHoverStart={() => handleHoverStart(index)}
              onHoverEnd={handleHoverEnd}
            >
              <motion.img
                src={item.img}
                alt={item.alt}
                style={{ maxWidth: "100%", maxHeightheight: "100%", objectFit: "cover", objectPosition: "center" }}
              />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                style={{
                  position: "absolute",
                  zIndex: "10",
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
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      alignItems: "center",
                      zIndex: "10",
                    }}
                    >
                  <IconButton
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff", zIndex: "1", }}
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
              </Box>
            </motion.div>
          </motion.div>
          </Grid>
        ))}
    </Grid >
    </>
  );
}
