import * as React from "react";
import {
  Paper,
  TextField,
  Box,
  Button,

} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import contactForm from "../assets/contactForm.jpg";

export default function Contact() {
  return (
   
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"

      }}
    >
      <img
        src={contactForm}
        alt="contact"
        style={{ width: "300px", height: "200px", objectFit: "cover" }}
      />
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "15px",
          "& .MuiTextField-root": { m: 1, width: "25ch" },
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
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Box>
    </Paper>
  );
}
