import * as React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import projectData from "../data/ProjectData";
import { motion, useAnimation } from "framer-motion";

export default function Work() {
  const controls = useAnimation();

  const handleHover = () => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { type: "tween", duration: 0.3, delay: 0.1 },
    });
  };

  const handleHoverEnd = ()=> {
    controls.start({y:20, opacity: 0})
  }

  return (
    <>
      <Grid container spacing={4}>
        {projectData.map((item) => (
          <Grid item xs={12} sm={6} key={item.id} style={{ height: "50%", height: "50%"}}>
            <motion.div
              style={{ position: "relative", overflow: "hidden" }}
              onHoverStart={handleHover}
              onHoverEnd={handleHoverEnd}
            >
              <motion.img
                src={item.img}
                alt={item.alt}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                animate={{ scale: 1 }}
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={controls}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  background: "rgba(0, 0, 0, 0.7)",
                  padding: "8px",
                }}
              >
                <Typography variant="subtitle1" style={{ color: "#fff" }}>
                  {item.title}
                </Typography>
                {/* Add your icons here with desired animations */}
              </motion.div>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
