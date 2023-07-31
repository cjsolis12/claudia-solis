import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
        }}
      >
        <Container maxWidth="sm">
          <Link activeClassName="active-link" href="" target="_blank" rel="noopener">
            <HiOutlineMail />
          </Link>
          <Link
            activeClassName="active-link"
            href="https://github.com/cjsolis12"
            target="_blank" rel="noopener"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/claudia-solis-48599422a/"
            activeClassName="active-link"
            target="_blank" rel="noopener"
          >
            <FaLinkedinIn />
          </Link>
        </Container>
      </Box>
    </>
  );
}
