import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import chartPic from "../../src/assets/images/chart.png";
import { Box } from "@mui/material";

const columns = [
    { id: "Page", label: "Page", minWidth: 170 },
    { id: "Status", label: "Status", minWidth: 100 },
    {
        id: "Users",
        label: "Users",
        minWidth: 100,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },

    {
        id: "EventCount",
        label: "EventCount",
        minWidth: 100,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "view",
        label: "view",
        minWidth: 100,
        align: "right",
        format: (value) => value.toFixed(2),
    },
    {
        id: "Average",
        label: "Average",
        minWidth: 100,
        align: "right",
        format: (value) => value.toFixed(2),
    },
    {
        id: "Conversions",
        label: "Conversions",
        minWidth: 130,
        align: "right",
        format: (value) => value.toFixed(2),
    },
];

function createData(Page, Status, Users, EventCount, view, Average, Conversions) {
    return { Page, Status, Users, EventCount, view, Average, Conversions };
}

const rows = [
    createData(
        "Homepage Overview",
        "Online",
        212423,
        8345,
        18.5,
        "2m 15s",
        <Image src={chartPic} width={120} />
    ),
    createData(
        "Homepage Overview",
        "Online",
        712362,
        8345,
        9.5,
        "2m 15s",
        <Image src={chartPic} width={120} />
    ),
    createData(
        "Homepage Overview",
        "Offline",
        97437,
        8345,
        13.5,
        "2m 15s",
        <Image src={chartPic} width={120} />
    ),
    createData(
        "Homepage Overview",
        "Online",
        836283,
        8345,
        4.5,
        "2m 15s",
        <Image src={chartPic} width={120} />
    ),
    createData(
        "Homepage Overview",
        "Online",
        372833,
        8345,
        18.5,
        "2m 15s",
        <Image src={chartPic} width={120} />
    ),
    createData(
        "Homepage Overview",
        "Offline",
        283832,
        8345,
        5.5,
        "2m 15s",
        <Image src={chartPic} width={120} />
    ),
    createData(
        "Homepage Overview",
        "Online",
        9383782,
        8345,
        18.5,
        "2m 15s",
        <Image src={chartPic} width={120} />
    ),
    createData(
        "Homepage Overview",
        "Online",
        212423,
        8345,
        14.5,
        "2m 15s",
        <Image src={chartPic} width={120} />
    ),
    createData(
        "Homepage Overview",
        "Offline",
        2387232,
        8345,
        18.5,
        "2m 15s",
        <Image src={chartPic} width={120} />
    ),
    createData(
        "Homepage Overview",
        "Offline",
        212423,
        8345,
        9.5,
        "2m 15s",
        <Image src={chartPic} width={120} />
    ),
    createData(
        "Homepage Overview",
        "Online",
        373633,
        8345,
        4.5,
        "2m 15s",
        <Image src={chartPic} width={120} />
    ),
    createData(
        "Homepage Overview",
        "Online",
        212423,
        8345,
        18.5,
        "2m 15s",
        <Image src={chartPic} width={120} />
    ),
    createData(
        "Homepage Overview",
        "Offline",
        332723,
        8345,
        12.3,
        "2m 15s",
        <Image src={chartPic} width={120} />
    ),
    createData(
        "Homepage Overview",
        "Online",
        212423,
        8345,
        18,
        "2m 15s",
        <Image src={chartPic} width={120} />
    ),
    createData(
        "Homepage Overview",
        "Offline",
        883838,
        8345,
        17.3,
        "2m 15s",
        <Image src={chartPic} width={120} />
    ),
    createData(
        "Homepage Overview",
        "Online",
        212423,
        8345,
        18.5,
        "2m 15s",
        <Image src={chartPic} width={120} />
    ),
    createData(
        "Homepage Overview",
        "Online",
        39393883,
        8345,
        18.5,
        "2m 15s",
        <Image src={chartPic} width={120} />
    ),
];

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Box
            sx={{
                overflow: "scroll",
                width: "100%",
                position: "absolute",
                left: "0",
                top: "0",
            }}
        >
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                sx={{ backgroundColor: "#13181efa", color: "white!important" }}
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                        return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            sx={{
                                                backgroundColor: "#05070a",
                                                color: "white!important",
                                            }}
                                        >
                                            {column.format && typeof value === "number"
                                                ? column.format(value)
                                                : value}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{ backgroundColor: "#13181efa", color: "white!important", width: "100%" }}
            />
        </Box>
    );
}
