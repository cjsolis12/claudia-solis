import React from "react";
import { Box } from "@mui/material";

const PageLayout= ({ children }) => {
    return (
      <Box
        sx={{
          margin: "auto", 
          padding: "3rem"
        }}
      >
        {children}
      </Box>
    );
  };
  
  export default PageLayout;