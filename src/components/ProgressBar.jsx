import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function ProgressBar({ flag, title, percent,color }) {
  return (
    <Box sx={{ display: "flex", gap: "20px", alignItems: "center" ,width:"100%",marginBottom:"10px"}}>
      <Image src={flag} width={35} style={{borderRadius:"20px"}} />
      <Box sx={{flex:1}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom:"10px"
          }}
        >
          <Typography>{title}</Typography>
          <Typography>{percent}</Typography>
        </Box>
        <Box
          sx={{
            height: "8px",
            width: "100%",
            backgroundColor: "#0A0F14",
            position: "relative",
            borderRadius: "10px",
            overflow:"hidden"
          }}
        >
          <Box
            sx={{
              width: percent,
              height: "100%",
              position: "absolute",
              left: 0,
              top: 0,
              backgroundColor:color,
            
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProgressBar;
