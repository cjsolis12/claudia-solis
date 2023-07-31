import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <>
      <Box
      component="footer"
      sx={{
        p: 2,
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#C7A6C5",
        display: "flex",
        justifyContent: "center",
        gap: "20px", 
      }}
      >
        <Container maxWidth="sm">
          <Link activeClassName="active-link" href="" target="_blank" rel="noopener"  sx={{ fontSize: "24px", margin: "10px" }}>
            <HiOutlineMail />
          </Link>
          <Link
            activeClassName="active-link"
            href="https://github.com/cjsolis12"
            target="_blank" rel="noopener"
            sx={{ fontSize: "24px", margin: "10px"  }}
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/claudia-solis-48599422a/"
            activeClassName="active-link"
            target="_blank" rel="noopener"
            sx={{ fontSize: "24px", margin: "10px"}}
          >
            <FaLinkedinIn />
          </Link>
        </Container>
      </Box>
    </>
  );
}
