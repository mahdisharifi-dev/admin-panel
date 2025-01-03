import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function BigChartData({
    title,
    subTitle,
    value,
    percent,
    color,
    percent_backgroundColor,
    percent_borderColor,
    children,
}) {
    return (
        <Card
            // className="data-card"
            variant="outlined"
            sx={{
                borderRadius: "10px",
                backgroundColor: "#05070a66",
                color: "white!important",
                border: "1px solid #303840",
                height: "100%",
            }}
        >
            <CardContent>
                <Typography
                    sx={{
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        lineHeight: "1.57",
                        marginBottom: "0.35em",
                    }}
                >
                    {title}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <Typography sx={{ fontWeight: "600", fontSize: "1.5rem" }}>{value}</Typography>

                    <Box
                        sx={{
                            color: color,
                            display: "flex",
                            alignItems: "center",
                            border: `.5px solid ${percent_borderColor}`,
                            borderRadius: "20px",
                            padding: "0px 6px",
                            height: "20px",
                            fontSize: " 0.8125rem",
                            fontWeight: "bold",
                            backgroundColor: percent_backgroundColor,
                        }}
                    >
                        {percent}
                    </Box>
                </Box>
                <Typography
                    sx={{
                        fontWeight: "400",
                        fontSize: "0.75rem",
                        lineHeight: "1.66",
                        color: "#94a0b8",
                    }}
                >
                    {subTitle}
                </Typography>
                {children}
            </CardContent>
        </Card>
    );
}

export default BigChartData;
