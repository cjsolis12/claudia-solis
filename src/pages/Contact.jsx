import { Paper, TextField, Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import contactForm from "../assets/contactForm.jpg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PageLayouts from "../components/layout/PageLayouts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// For Email
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  //Email Functions
  const form = useRef();

  // Function to show toast notification
  const notifySuccess = () => {
    toast.success("Email sent successfully!", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000,
    });
  };

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
          notifySuccess();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <PageLayouts>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "90vh", md: "60vh" },
          width: { xs: "80vw", md: "auto" },
          margin: "0 auto",
          padding: "50px 40px",
          boxSizing: "border-box",
        }}
      >
        {/* Container for the image */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: { xs: 0, md: "20px" },
            marginBottom: { xs: "20px", md: 0 },
            width: "100%",
          }}
        >
          <img
            src={contactForm}
            alt="contact"
            style={{ width: "300px", height: "200px", objectFit: "contain" }}
          />
        </Box>

        {/* Container for the form*/}
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
            "& .MuiTextField-root": { m: 2, width: "100%" },
            "& .MuiButton-root": { mt: 4 },
            width: "100%",
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
        <ToastContainer></ToastContainer>
      </Paper>
    </PageLayouts>
  );
}
