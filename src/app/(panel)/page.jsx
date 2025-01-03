// import buttonStyle from "@/styles/button";
"use client";
import * as React from "react";
import { Box, Button, Grid, IconButton, Input, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DataCard from "@/ui/DataCard";
import InfoCard from "@/ui/InfoCard";
import BigChartData from "@/ui/BigChartData";
import { Search } from "@mui/icons-material";
import Table from "../../components/Table";
import TreeView from "../../components/TreeView";
import CountryChart from "../../components/CountryChart";
import india from "../../assets/images/india.png";
import usa from "../../assets/images/usa.png";
import brazil from "../../assets/images/brazil.png";
import earth from "../../assets/images/earth.png";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    PointElement,
    LineElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { Line } from "react-chartjs-2";
import ProgressBar from "@/components/ProgressBar";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip);

export const lineOptions = {
    responsive: true,
    // tension:2,
    plugins: {
        legend: {
            display: false,
        },
    },
};

export const barOptions = {
    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
        },
    },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const lineData = {
    labels: labels,
    datasets: [
        {
            radius: 0,
            label: "Dataset 1",
            data: [2, 4, 6, 5, 3, 7, 8],
            borderColor: "#0059b3",
            backgroundColor: "red",
            fill: true,
        },
        {
            radius: 0,
            label: "Dataset 1",
            data: [4, 6, 8, 7, 5, 9, 10],
            borderColor: "#027af2",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
            radius: 0,
            label: "Dataset 1",
            data: [6, 8, 10, 9, 7, 11, 12],
            borderColor: "#4da6ff",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
    ],
};

export const barData = {
    labels,
    datasets: [
        {
            data: [103, 170, 207, 95, 208, 32, 52, 46, 63, 105, 87, 55],
            borderRadius: 10,
            backgroundColor: "#0059b3",
        },
        {
            data: [103, 170, 207, 95, 208, 32, 52, 46, 63, 105, 87, 55],
            borderRadius: 10,
            backgroundColor: "#027af2",
        },
        {
            data: [103, 170, 207, 95, 208, 32, 52, 46, 63, 105, 87, 55],
            borderRadius: 10,
            backgroundColor: "#4da6ff",
        },
    ],
};

export default function Home() {
    const breadcrumbs = [
        <Typography key="3" sx={{ color: "#B7B8BA!important" }}>
            Dashboard
        </Typography>,
        <Typography key="3" sx={{ color: "white!important" }}>
            Home
        </Typography>,
    ];
    const [value, setValue] = React.useState(dayjs("2022-04-17"));
    return (
        <>
            <Box
                sx={{
                    color: "white!important",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "16px",
                }}
            >
                <Box>
                    <Stack spacing={2}>
                        <Breadcrumbs
                            separator={
                                <NavigateNextIcon
                                    fontSize="small"
                                    sx={{ color: "#B7B8BA!important" }}
                                />
                            }
                            aria-label="breadcrumb"
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Stack>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    <Box
                        className="focus-div"
                        sx={{
                            height: "36px",
                            borderRadius: "8px",
                            border: "1px solid #303840",
                            display: "flex",
                            alignItems: "center",
                            px: "10px",
                            "&:hover": { border: "1px solid gray", transition: "all" },
                        }}
                    >
                        <Search sx={{ color: "gray", fontSize: "20px" }} />
                        <Input
                            placeholder="Search..."
                            sx={{
                                color: "gray",
                                marginLeft: "8px",
                                ":after": { borderBottom: "none !important" },
                            }}
                        />
                    </Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker defaultValue={dayjs("2022-04-17")} className="datePicker" />
                    </LocalizationProvider>
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
                </Box>
            </Box>
            <Typography
                sx={{
                    color: "white!important",
                    my: "20px",
                    fontWeight: "bold",
                    fontSize: "18px",
                }}
            >
                Overview
            </Typography>
            <Grid container spacing={2} sx={{ color: "white!important" }}>
                <Grid item xs={12} sm={6} lg={3}>
                    <DataCard
                        title={"Users"}
                        value={"14K"}
                        subTitle={"Last 30 days"}
                        percent={"+25%"}
                        color={"#a1e8a1"}
                        percent_backgroundColor={"#021D02"}
                        percent_borderColor={"#052E05"}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <DataCard
                        title={"Conversions"}
                        value={"325"}
                        subTitle={"Last 30 days"}
                        percent={"-25%"}
                        color={"#fc9c9c"}
                        percent_backgroundColor={"#1D0101"}
                        percent_borderColor={"#3C0102"}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <DataCard
                        title={"Event count"}
                        value={"200K"}
                        subTitle={"Last 30 days"}
                        percent={"+5%"}
                        color={"#C2C8D6"}
                        percent_backgroundColor={"#121212"}
                        percent_borderColor={"#C2C8D6"}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Box sx={{ width: "100%", height: "100%" }}>
                        <InfoCard
                            styles={{ height: "100%" }}
                            title={"Explore your data"}
                            subTitle={
                                "Uncover performance and visitor insights with our data wizardry."
                            }
                            icon={<MoreVertIcon />}
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
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ color: "white!important", mt: "10px" }}>
                <Grid item xs={12} sm={6}>
                    <BigChartData
                        title={"Sessions"}
                        value={"13,277"}
                        subTitle={"Sessions per day for the last 30 days"}
                        percent={"+35%"}
                        color={"#a1e8a1"}
                        percent_backgroundColor={"#021D02"}
                        percent_borderColor={"#052E05"}
                    >
                        <Box>
                            <Line options={lineOptions} data={lineData} />
                        </Box>
                    </BigChartData>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <BigChartData
                        title={"Page views and downloads"}
                        value={"1.3M"}
                        subTitle={"Page views and downloads for the last 6 months"}
                        percent={"-8%"}
                        color={"#fc9c9c"}
                        percent_backgroundColor={"#1D0101"}
                        percent_borderColor={"#3C0102"}
                    >
                        <Box>
                            <Bar options={barOptions} data={barData} />
                        </Box>
                    </BigChartData>
                </Grid>
            </Grid>
            <Typography
                sx={{
                    fontWeight: 600,
                    fontSize: " 1.125rem",
                    lineHeight: "1.6",
                    color: "#FFFFFF",
                    marginTop: "15px",
                }}
            >
                Details
            </Typography>
            <Grid container spacing={3} sx={{ marginTop: "5px" }}>
                <Grid item xs={12} lg={9}>
                    <Box
                        sx={{
                            width: "100%",
                            flexShrink: "0",
                            background: "red",
                            height: "500px",
                            overflow: "scroll",
                            position: "relative",
                        }}
                    >
                        <Table />
                    </Box>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <Grid
                        item
                        xs={12}
                        sx={{
                            border: "1px solid #303840",
                            borderRadius: "8px",
                        }}
                    >
                        <TreeView />
                    </Grid>
                    <Grid item xs={12} sx={{ display: { xs: "none", lg: "block" } }}>
                        <Box
                            sx={{
                                color: "white!important",
                                marginTop: "20px",
                                border: "1px solid #303840",
                                borderRadius: "8px",
                                padding: "20px",
                            }}
                        >
                            <Typography
                                sx={{
                                    lineHeight: "1.57!important",
                                    fontWeight: "500",
                                    color: "#FFFFFF",
                                    marginBottom: "24px",
                                }}
                            >
                                Users by country
                            </Typography>
                            <CountryChart />
                            <ProgressBar
                                title={"India"}
                                percent={"50%"}
                                color={"#969fb5"}
                                flag={india}
                            />
                            <ProgressBar
                                title={"USA"}
                                percent={"35%"}
                                color={"#58647e"}
                                flag={usa}
                            />
                            <ProgressBar
                                title={"Brazil"}
                                percent={"10%"}
                                color={"#4a5369"}
                                flag={brazil}
                            />
                            <ProgressBar
                                title={"Other"}
                                percent={"5%"}
                                color={"#353b4b"}
                                flag={earth}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
