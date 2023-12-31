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
        backgroundColor: "#C7A6C5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "auto"
      }}
      >
        <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Link href="mailto:cjelizondo12@gmail.com" target="_blank" rel="noopener"  sx={{ fontSize: "24px", margin: "10px" }}>
            <HiOutlineMail />
          </Link>
          <Link
            href="https://github.com/cjsolis12"
            target="_blank" rel="noopener"
            sx={{ fontSize: "24px", margin: "10px"  }}
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/claudia-solis-48599422a/"
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
