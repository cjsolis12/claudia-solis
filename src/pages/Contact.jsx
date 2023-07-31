import * as React from "react";
import { Paper, TextField, Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import contactForm from "../assets/contactForm.jpg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        width: isMobile ? "80vw" : "auto",
        margin: "0 auto",
      }}
    >
      <img
        src={contactForm}
        alt="contact"
        style={{ width: "300px", height: "200px", objectFit: "contain" }}
      />
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "15px",
          "& .MuiTextField-root": { m: 2, width: "25ch" },
          "& .MuiButton-root": { mt: 4 },
        }}
        noValidate
        autoComplete="off"
        variant="outlined"
      >
        <TextField
          type="text"
          name="name"
          label="Name"
          variant="standard"
          required
        />
        <TextField
          type="email"
          name=""
          label="Email Address"
          variant="standard"
          required
        />

        <TextField
          name="message"
          type="text"
          rows={10}
          label="Message"
          style={{ margin: "5px" }}
        ></TextField>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{
            backgroundColor: "#D0CE27",
          }}
        >
          Send
        </Button>
      </Box>
    </Paper>
  );
}
