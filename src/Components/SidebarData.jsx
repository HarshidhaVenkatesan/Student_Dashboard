import React from "react";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const SidebarData = [
  {
    title: "Profile",
    icon: <AccountCircleIcon fontSize="large" />,
    Link: "/profile",
  },
  {
    title: "Stats",
    icon: <QueryStatsIcon fontSize="large" />,
    Link: "/dashboard",
  },
];
