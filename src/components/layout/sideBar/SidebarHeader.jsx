import React from "react";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import DevicesIcon from "@mui/icons-material/Devices";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import ConstructionIcon from "@mui/icons-material/Construction";
import AddIcon from "@mui/icons-material/Add";
import {
    Box,
    Button,
    MenuItem,
    ListItem,
    Typography,
    IconButton,
    ListItemText,
    Menu,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: "rgb(55, 65, 81)",
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "4px 0",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
        ...theme.applyStyles("dark", {
            color: theme.palette.grey[300],
        }),
    },
}));

function SidebarHeader() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                borderBottom: ".5px solid #303840",
            }}
        >
            <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                sx={{
                    width: "100%!important",
                    margin: "10px!important",
                    padding: "0px!important",
                    display: "flex",
                    backgroundColor: "#111317",
                    border: "1px solid #303840",
                    borderRadius: "10px",
                }}
            >
                <ListItem
                    sx={{
                        padding: "0px",
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "5px 10px",
                    }}
                >
                    <IconButton
                        id="fade-button"
                        aria-controls={open ? "fade-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        sx={{
                            border: "1px solid #303840",
                        }}
                    >
                        <DevicesIcon
                            fontSize="small"
                            sx={{
                                color: "#B7B8BA!important",
                                marginRight: "0px!important",
                            }}
                        />
                    </IconButton>
                    <ListItemText
                        sx={{
                            color: "white!important",
                            marginLeft: "10px",
                            textTransform: "initial",
                        }}
                        primary="Sitemark-web"
                        secondary={
                            <React.Fragment>
                                <Typography sx={{ color: "#B7B8BA!important", fontSize: "13px" }}>
                                    Web app
                                </Typography>
                            </React.Fragment>
                        }
                    />
                    <UnfoldMoreIcon color="white" />
                </ListItem>
            </Button>

            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{ marginLeft: "-7px!important" }}
            >
                <Typography
                    sx={{
                        margin: "1px!important",
                        paddingBottom: "5px",
                        color: "#707378",
                        paddingLeft: "12px",
                        fontSize: "15px",
                    }}
                >
                    production
                </Typography>
                <MenuItem
                    onClick={handleClose}
                    disableRipple
                    sx={{
                        width: "206px",
                        backgroundColor: "#1D2126",
                        "&:hover": { backgroundColor: "#003B7566!important" },
                    }}
                >
                    <ListItem
                        sx={{
                            width: "100%",
                            padding: "0px!important",
                        }}
                    >
                        <IconButton
                            id="fade-button"
                            aria-controls={open ? "fade-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            sx={{
                                border: "1px solid #303840",
                            }}
                        >
                            <DevicesIcon
                                fontSize="small"
                                sx={{
                                    color: "#B7B8BA!important",
                                    marginRight: "0px!important",
                                }}
                            />
                        </IconButton>
                        <ListItemText
                            sx={{
                                color: "white!important",
                                marginLeft: "10px",
                                textTransform: "initial",
                                // border: "1px solid red",
                            }}
                            primary="Sitemark-web"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ color: "#B7B8BA!important", fontSize: "13px" }}
                                    >
                                        Web app
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    <ListItem
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "0px!important",
                        }}
                    >
                        <IconButton
                            id="fade-button"
                            aria-controls={open ? "fade-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            sx={{
                                border: "1px solid #303840",
                            }}
                        >
                            <SmartphoneIcon
                                fontSize="small"
                                sx={{
                                    color: "#B7B8BA!important",
                                    marginRight: "0px!important",
                                }}
                            />
                        </IconButton>
                        <ListItemText
                            sx={{
                                color: "white!important",
                                marginLeft: "10px",
                            }}
                            primary="Sitemark-app"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ color: "#B7B8BA!important", fontSize: "13px" }}
                                    >
                                        Mobile application
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    <ListItem
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "0px!important",
                        }}
                    >
                        <IconButton
                            id="fade-button"
                            aria-controls={open ? "fade-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            sx={{
                                border: "1px solid #303840",
                            }}
                        >
                            <DevicesIcon
                                fontSize="small"
                                sx={{
                                    color: "#B7B8BA!important",
                                    marginRight: "0px!important",
                                }}
                            />
                        </IconButton>
                        <ListItemText
                            sx={{
                                color: "white!important",
                                marginLeft: "10px",
                                textTransform: "initial",
                                // border: "1px solid red",
                            }}
                            primary="Sitemark-Store"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ color: "#B7B8BA!important", fontSize: "13px" }}
                                    >
                                        Web app
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </MenuItem>
                <Typography
                    sx={{
                        margin: "1px!important",
                        paddingBottom: "5px",
                        color: "#707378",
                        paddingLeft: "12px",
                        fontSize: "15px",
                    }}
                >
                    development
                </Typography>
                <MenuItem onClick={handleClose} disableRipple>
                    <ListItem
                        sx={{
                            width: "100%",
                            padding: "0px!important",
                        }}
                    >
                        <IconButton
                            id="fade-button"
                            aria-controls={open ? "fade-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            sx={{
                                border: "1px solid #303840",
                            }}
                        >
                            <ConstructionIcon
                                fontSize="small"
                                sx={{
                                    color: "#B7B8BA!important",
                                    marginRight: "0px!important",
                                }}
                            />
                        </IconButton>
                        <ListItemText
                            sx={{
                                color: "white!important",
                                marginLeft: "10px",
                            }}
                            primary="Sitemark-Admin"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ color: "#B7B8BA!important", fontSize: "13px" }}
                                    >
                                        Web app
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </MenuItem>

                <Box sx={{ borderTop: ".5px solid #303840", width: "100%" }}>
                    <MenuItem onClick={handleClose} disableRipple sx={{ marginTop: "5px" }}>
                        <ListItem
                            sx={{
                                width: "100%",
                                padding: "0px!important",
                            }}
                        >
                            <Box sx={{ marginLeft: "5px", display: "flex" }}>
                                <AddIcon
                                    sx={{
                                        color: "white!important",
                                        marginRight: "0px!important",
                                        fontSize: "25px!important",
                                    }}
                                />
                            </Box>

                            <ListItemText
                                sx={{
                                    color: "white!important",
                                    marginLeft: "15px",
                                    textTransform: "initial",
                                }}
                                primary="Add product"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ color: "#B7B8BA!important", fontSize: "13px" }}
                                        >
                                            Web app
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </MenuItem>
                </Box>
            </StyledMenu>
        </Box>
    );
}

export default SidebarHeader;
