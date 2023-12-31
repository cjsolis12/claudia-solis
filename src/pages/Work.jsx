import  React, {useState} from "react"
import { Grid, Typography, Box, IconButton } from "@mui/material";
import projectData from "../data/ProjectData";
import WorkModal from "../components/ui/WorkModal";
import { motion, useAnimation } from "framer-motion";
import { GitHub as GitHubIcon } from "@mui/icons-material";
import { Link as InsertLinkIcon } from "@mui/icons-material";

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectProject, setSelectedProject] = useState(null);

  const handleHoverStart = (index) => {
    setHoveredIndex(index);
  };

  const handleHoverEnd = () => {
    setHoveredIndex(null);
  };

  const handleImageClick = (index) => {
    setModalOpen(true);
    setSelectedProject(projectData[index])
  }

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null)
  }

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "1rem" }}
      >
        <Grid container spacing={6} justifyContent="center">
          {projectData.map((item, index) => (
            <Grid item xs={12} sm={6} key={item.id}>
              <motion.div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
                  boxShadow: "9px 10px 5px -2px rgba(151, 155, 154, 1)",
                }}
                onHoverStart={() => handleHoverStart(index)}
                onHoverEnd={handleHoverEnd}
                onClick={() => handleImageClick(index)}
              >
                <motion.img
                  src={item.img}
                  alt={item.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    filter: hoveredIndex === index ? "blur(5px)" : "none",
                  }}
                />
                {/* overlay on image hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    hoveredIndex === index ? { opacity: 0.6 } : { opacity: 0 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "black",
                  }}
                />
                <motion.div
                  initial={{ y: -60, opacity: 0 }}
                  animate={
                    hoveredIndex === index
                      ? { y: 0, opacity: 1 }
                      : { y: -20, opacity: 0 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{
                    position: "absolute",
                    zIndex: "10",
                    top: "30px",
                    background: "none",
                    padding: "7px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    style={{
                      color: "#fff",
                      fontSize: "20px",
                      textAlign: "center",
                      width: "100%"
                    }}
                  >
                    {item.description}
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={
                    hoveredIndex === index
                      ? { y: 0, opacity: 1 }
                      : { y: 20, opacity: 0 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 }}
                  style={{
                    position: "absolute",
                    zIndex: "10",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    background: "rgba(0, 0, 0, 0.7)",
                    padding: "4px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginRight: "30px",
                      marginLeft: "30px",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      style={{ color: "#fff", fontSize: "20px" }}
                    >
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
                        style={{ color: "#fff", zIndex: "1" }}
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
        </Grid>
      </div>
      <WorkModal open={modalOpen} handleClose={handleCloseModal} project={selectProject}></WorkModal>
    </>
  );
}
