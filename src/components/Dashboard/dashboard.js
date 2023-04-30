import { Box } from "@mui/material";
import React from "react";
import Sidebar from "../Sidebar/sidebar";
import Contentone from "./Content/contentone";
import Contenttwo from "./Content/contenttwo";
import Contentthree from "./Content/contentthree";
import Contentfour from "./Content/contentfour";
import { useSelector } from "react-redux";
import Createquery from "../Queries/create_query";
import Chat from "../Chat/Chat";

const Dashboard = () => {
  const state = useSelector(state => state.pagestate.value);
  console.log(state);
  return (
    <Box sx={{ display: "flex", background: "#f9fbfd" }}>
      <Sidebar />
      <Box sx={{ width: "100%" }}>
        <Contentone />
        <Contenttwo />
        <Box sx={{ display: "flex" }}>
          {state.title == "Create Query"
            ? <Createquery />
            : state.title == "Query" ? <Chat /> : <Contentthree />}
          {state.title == "My Queries" || state.title == ""
            ? <Contentfour />
            : ""}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
