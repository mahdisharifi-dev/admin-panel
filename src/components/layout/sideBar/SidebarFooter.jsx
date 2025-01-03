import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";

function SidebarFooter() {
  return (
    <Box
      sx={{
        width: "100%",
        borderTop: ".5px solid #303840",
        display: "flex",
        justifyContent: "center",
        padding: "0 15px!important",
      }}
    >
      <List
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <ListItem sx={{ padding: "0px" }}>
            <ListItemAvatar sx={{ minWidth: "0px", mr: "10px" }}>
              <Avatar alt="Remy Sharp" src="../../assets/images/user.jpg" />
            </ListItemAvatar>
            <ListItemText
              sx={{ color: "white!important" }}
              primary="Riley Carter"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ color: "white!important", fontSize: "13px" }}
                  >
                    riley@email.com
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <IconButton
            aria-haspopup="true"
            sx={{
              width: "32px",
              height: "32px",
              borderRadius: "12px!important",
              border: "1px solid #303840",
              "&:hover": {
                backgroundColor: "#1D2126",
              },
            }}
          >
            <MoreVertIcon fontSize="small" color="white" />
          </IconButton>
        </Box>
      </List>
    </Box>
  );
}

export default SidebarFooter;
