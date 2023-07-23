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
    <Grid sx={{justifyContent: "center", spacing:"2"}}>
      <Grid item xs={12} md={6}>
        <img src={contactForm} alt="contact" style={{ width: "100%" }} />
      </Grid>
      <Grid item xs={12} md={6}>
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
