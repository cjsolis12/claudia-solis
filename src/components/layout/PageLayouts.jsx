import React from "react";
import { Box } from "@mui/material";

const PageLayout= ({ children }) => {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          margin: "2rem", 
        }}
      >
        {children}
      </Box>
    );
  };
  
  export default PageLayout;