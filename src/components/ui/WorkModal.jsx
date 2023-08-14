import React from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  DialogTitle,
} from "@mui/material";
import { GitHub, GitHub as GitHubIcon } from "@mui/icons-material";
import { Link as InsertLinkIcon } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

export default function WorkModal({ open, handleClose, project }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent sx={{ textAlign: "center", backgroundColor: "#C7A6C5" }}>
        <DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        {project && (
          <>
            <Typography variant="h4" sx={{ marginBottom: "2rem" }}>
              {project.title}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
              {project.description}
            </Typography>
            <div>
              <IconButton
                sx={{ backgroundColor: "#D0CE27", margin: "10px" }}
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
              </IconButton>
              <IconButton
                sx={{ backgroundColor: "#D0CE27", margin: "10px" }}
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InsertLinkIcon />
              </IconButton>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
