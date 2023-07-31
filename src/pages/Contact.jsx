import { Paper, TextField, Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import contactForm from "../assets/contactForm.jpg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// For Email
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  //Email Functions
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const user_email = e.target.elements.user_email.value;

    emailjs
      .sendForm(
        "service_b49i52f",
        "template_dbj0gog",
        form.current,
        "g3ShUZPhcjLjaPsm_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
        ref={form}
        onSubmit={sendEmail}
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
          name="from_name"
          label="Name"
          variant="standard"
          required
        />
        <TextField
          type="email"
          name="user_email"
          label="Email Address"
          variant="standard"
          required
        />

        <TextField
          name="message"
          type="text"
          multiline
          rows={5}
          label="Message"
          style={{ margin: "5px" }}
        ></TextField>
        <Button
          type="submit"
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
