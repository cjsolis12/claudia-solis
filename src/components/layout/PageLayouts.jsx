import React from "react";
import { Box } from "@mui/material";

const PageLayout= ({ children }) => {
    return (
      <Box
        sx={{
          margin: "0 auto", 
          maxWidth: "960px", 
          padding: "15px", 
        }}
      >
        {children}
      </Box>
    );
  };
  
  export default PageLayout;