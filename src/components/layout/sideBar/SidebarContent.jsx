import React from "react";
import { Box, Button, List, ListItemButton, ListItemIcon } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import GroupIcon from "@mui/icons-material/Group";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import InfoCard from "@/ui/InfoCard";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const topList = [
  {
    title: "Home",
    icon: <HomeIcon fontSize="small" />,
  },
  {
    title: "Analitycs",
    icon: <AnalyticsIcon fontSize="small" />,
  },
  {
    title: "Clients",
    icon: <GroupIcon fontSize="small" />,
  },
  {
    title: "Tasks",
    icon: <AssignmentIcon fontSize="small" />,
  },
];
const bottomList = [
  {
    title: "Setting",
    icon: <SettingsIcon fontSize="small" />,
  },
  {
    title: "About",
    icon: <InfoIcon fontSize="small" />,
  },
  {
    title: "FeedBack",
    icon: <HelpIcon fontSize="small" />,
  },
];

function SidebarContent() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      sx={{
        width: "100%",
        flexGrow: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "15px 0px",
      }}
    >
      <Box sx={{ padding: "0px 15px!important" }}>
        <List component="nav" aria-label="main mailbox folders">
          {topList.map((item, index) => {
            return (
              <ListItemButton
                selected={selectedIndex === index + 1}
                onClick={(event) => handleListItemClick(event, index + 1)}
                sx={{
                  padding: "0px 5px!important",
                  borderRadius: "7px",
                  "&:hover": { backgroundColor: "#1d2126" },
                  color: "white!important",
                  marginBottom: "2px",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "0px!important",
                    marginRight: "10px",
                    color: "white!important",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            );
          })}
        </List>
      </Box>

      <Box sx={{ padding: "0px 15px!important" }}>
        {bottomList.map((item, index) => {
          return (
            <ListItemButton
              selected={selectedIndex === index + 5}
              onClick={(event) => handleListItemClick(event, index + 5)}
              sx={{
                padding: "0px 5px!important",
                borderRadius: "7px",
                "&:hover": { backgroundColor: "#1d2126" },
                color: "white!important",
                marginBottom: "2px",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "0px!important",
                  marginRight: "10px",
                  color: "white!important",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          );
        })}

        <InfoCard
        styles={{marginTop:"30px"}}
          title={"Plan about to expire"}
          subTitle={"Enjoy 10% off when renewing your plan today."}
          icon={<AutoAwesomeIcon fontSize="small" color="balck" />}
          button={
            <Button
              size="large"
              sx={{
                width: "100%",
                borderRadius: "10px",
                fontSize: "12px",
                backgroundColor: "white!important",
                color: "black!important",
              }}
            >
              Get the discount
            </Button>
          }
        />
      </Box>
    </Box>
  );
}

export default SidebarContent;
