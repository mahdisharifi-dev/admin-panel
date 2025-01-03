"use client";
import { Box } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import SidebarContent from "./SidebarContent";

export default function SidebarAccountMenu() {
  return (
    <Box
      sx={{
        backgroundColor: "hsl(220, 30%, 7%)!important",
        height: "100%",
        flexDirection: "column",
        color: "#B7B8BA!important",
        display: "flex",
      }}
    >
      <SidebarHeader />
      <SidebarContent />
      <Divider />
      <SidebarFooter />
    </Box>
  );
}
