"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { createTheme, IconButton, ThemeProvider, Typography } from "@mui/material";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import BoltIcon from "@mui/icons-material/Bolt";
import SideBar from "../../components/layout/sideBar/SideBar";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
export default function layout({ children }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };
    return (
        <Box sx={{ display: "flex", background: "#05070a66" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: "none",
                    bgcolor: "#111317",
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    height: "52px",
                    borderBottom: "1px solid #252a36",
                    display: "flex",
                }}
            >
                <Toolbar
                    sx={{
                        paddingX: "12px!important",
                        minHeight: "100%!important",
                        display: "flex",
                        flexDirection: "row-reverse",
                        gap: "10px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <Button
                            id="fade-button"
                            aria-controls={open2 ? "fade-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open2 ? "true" : undefined}
                            onClick={handleClick2}
                            sx={{
                                position: "relative",
                                height: "35px",
                                display: { xs: "none", sm: "flex" },
                                borderRadius: "12px!important",
                                overflow: "hidden",
                                border: open2 ? "2px solid #1976d2" : "2px solid #111317",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    borderRadius: "12px!important",
                                    width: "170px",
                                    height: "100%",
                                    border: "1px solid #303840",
                                }}
                            ></Box>
                            custom theme
                            {open2 ? (
                                <ArrowDropUpRoundedIcon
                                    fontSize="medium"
                                    color="white"
                                    sx={{ ml: "20px" }}
                                />
                            ) : (
                                <ArrowDropDownRoundedIcon
                                    fontSize="medium"
                                    color="white"
                                    sx={{ ml: "20px" }}
                                />
                            )}
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                "aria-labelledby": "fade-button",
                            }}
                            anchorEl={anchorEl2}
                            open={open2}
                            onClose={handleClose2}
                            TransitionComponent={Fade}
                            className="custom-width"
                            sx={{ mt: "4px" }}
                        >
                            <MenuItem onClick={handleClose2} className="active">
                                Profile
                            </MenuItem>
                            <MenuItem onClick={handleClose2}>My account</MenuItem>
                        </Menu>
                        <IconButton
                            id="fade-button"
                            aria-controls={open ? "fade-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
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
                            <DarkModeOutlinedIcon fontSize="small" color="primary" />
                        </IconButton>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                "aria-labelledby": "fade-button",
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                            sx={{ mt: "4px" }}
                        >
                            <MenuItem
                                onClick={handleClose}
                                sx={{ color: "#66B3FF!important" }}
                                className="active"
                            >
                                Profile2
                            </MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </Box>
                    <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                        sx={{ backgroundColor: "#1D2126", mx: "5px" }}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                        }}
                    >
                        <IconButton
                            id="fade-button"
                            aria-controls={open ? "fade-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
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
                            <DarkModeOutlinedIcon fontSize="small" color="primary" />
                        </IconButton>
                        <IconButton
                            id="fade-button"
                            aria-controls={open ? "fade-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
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
                            <BoltIcon fontSize="medium" color="primary" />
                        </IconButton>
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "12px!important",
                            border: "1px solid #303840",
                            "&:hover": {
                                backgroundColor: "#1D2126",
                            },
                            display: { sm: "none" },
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                    }}
                >
                    <SideBar />
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                            border: "1px solid #303840 !important",
                        },
                    }}
                    open
                >
                    <Toolbar
                        sx={{
                            backgroundColor: "#111317",
                            color: "#66B3FF",
                            minHeight: "51px !important",
                        }}
                    >
                        Dashbord
                    </Toolbar>
                    <Divider sx={{ border: "0.5px solid #303840 !important" }} />
                    <SideBar />
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
