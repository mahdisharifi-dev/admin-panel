import * as React from "react";
import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { Typography } from "@mui/material";

export default function FirstComponent() {
  return (
    <Box
      sx={{
        minWidth: 250,
        padding: "16px",
        color: "white!important",
      }}
    >
      <SimpleTreeView>
        <Typography
          sx={{
            lineHeight: "1.57!important",
            fontWeight: "500",
            color: "#FFFFFF",
          }}
        >
          Product tree
        </Typography>
        <TreeItem
          itemId="grid"
          label="Website"
          sx={{ fontSize: "0.875rem", fontWeight: 400, lineHeight: "1.43" }}
        >
          <TreeItem
            itemId="grid-community"
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Box
                  sx={{
                    width: "7px",
                    height: "7px",
                    bgcolor: "#1E7A20",
                    borderRadius: "50%",
                  }}
                ></Box>
                <Typography>All Product</Typography>
              </Box>
            }
          />
          <TreeItem
            itemId="grid-pro"
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Box
                  sx={{
                    width: "7px",
                    height: "7px",
                    bgcolor: "#1E7A20",
                    borderRadius: "50%",
                  }}
                ></Box>
                <Typography>All Product</Typography>
              </Box>
            }
          />
          <TreeItem
            itemId="grid-premium"
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Box
                  sx={{
                    width: "7px",
                    height: "7px",
                    bgcolor: "#1E7A20",
                    borderRadius: "50%",
                  }}
                ></Box>
                <Typography>All Product</Typography>
              </Box>
            }
          />
          <TreeItem itemId="blogs" label="Blog">
            <TreeItem
              itemId="1"
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Box
                    sx={{
                      width: "7px",
                      height: "7px",
                      bgcolor: "#027af2",
                      borderRadius: "50%",
                    }}
                  ></Box>
                  <Typography>Home</Typography>
                </Box>
              }
            />
            <TreeItem
              itemId="2"
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Box
                    sx={{
                      width: "7px",
                      height: "7px",
                      bgcolor: "#027af2",
                      borderRadius: "50%",
                    }}
                  ></Box>
                  <Typography>Home</Typography>
                </Box>
              }
            />
            <TreeItem
              itemId="3"
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Box
                    sx={{
                      width: "7px",
                      height: "7px",
                      bgcolor: "#027af2",
                      borderRadius: "50%",
                    }}
                  ></Box>
                  <Typography>Home</Typography>
                </Box>
              }
            />
            <TreeItem
              itemId="4"
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Box
                    sx={{
                      width: "7px",
                      height: "7px",
                      bgcolor: "#027af2",
                      borderRadius: "50%",
                    }}
                  ></Box>
                  <Typography>Home</Typography>
                </Box>
              }
            />
          </TreeItem>
        </TreeItem>
        <TreeItem itemId="pickers" label="Store">
          <TreeItem
            itemId="pickers-community"
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Box
                  sx={{
                    width: "7px",
                    height: "7px",
                    bgcolor: "#1E7A20",
                    borderRadius: "50%",
                  }}
                ></Box>
                <Typography>All Product</Typography>
              </Box>
            }
          />
          <TreeItem itemId="5" label="categories">
            <TreeItem
              itemId="6"
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Box
                    sx={{
                      width: "7px",
                      height: "7px",
                      bgcolor: "#027af2",
                      borderRadius: "50%",
                    }}
                  ></Box>
                  <Typography>Home</Typography>
                </Box>
              }
            />
            <TreeItem
              itemId="7"
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Box
                    sx={{
                      width: "7px",
                      height: "7px",
                      bgcolor: "#027af2",
                      borderRadius: "50%",
                    }}
                  ></Box>
                  <Typography>Home</Typography>
                </Box>
              }
            />
            <TreeItem
              itemId="8"
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Box
                    sx={{
                      width: "7px",
                      height: "7px",
                      bgcolor: "#027af2",
                      borderRadius: "50%",
                    }}
                  ></Box>
                  <Typography>Home</Typography>
                </Box>
              }
            />
          </TreeItem>
        </TreeItem>
        <TreeItem
          itemId="9"
          label={
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Box
                sx={{
                  width: "7px",
                  height: "7px",
                  bgcolor: "#027af2",
                  borderRadius: "50%",
                  marginLeft: "-20px",
                }}
              ></Box>
              <Typography>Contact</Typography>
            </Box>
          }
        />
        <TreeItem
          itemId="10"
          label={
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Box
                sx={{
                  width: "7px",
                  height: "7px",
                  bgcolor: "#027af2",
                  borderRadius: "50%",
                  marginLeft: "-20px",
                }}
              ></Box>
              <Typography>Home</Typography>
            </Box>
          }
        />
      </SimpleTreeView>
    </Box>
  );
}
