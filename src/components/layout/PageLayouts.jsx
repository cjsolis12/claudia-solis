import React from "react";
import { Box } from "@mui/material";

const PageLayout= ({ children }) => {
    return (
      <Box
        sx={{
          margin: "auto", 
          maxWidth: "960px", 
        }}
      >
        {children}
      </Box>
    );
  };
  
  export default PageLayout;