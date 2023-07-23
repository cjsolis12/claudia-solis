import * as React from "react";
import {
  Paper,
  TextField,
  Box,
  TextareaAutosize,
  Button,
  Grid,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import contactForm from "../assets/contactForm.jpg"

export default function Contact() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <img src={contactForm} alt="contact" style={{ width: "100%", height: "100%", objectFit: "cover"  }} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "15px",
              padding: "20px",
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
      </Grid>
    </Grid>
  );
}
