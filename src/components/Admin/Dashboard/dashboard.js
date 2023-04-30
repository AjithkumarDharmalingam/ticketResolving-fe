import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../Sidebar/sidebar";
import Queries from "../Query/queries";
import Chat from "../Chat/chat";
import Contentone from "./Content/contentone";
import Contenttwo from "./Content/contenttwo";

const Dashboard = () => {
  const state = useSelector(state => state.pagestate.value);
  console.log(state);
  return (
    <Box sx={{ display: "flex", background: "#f9fbfd" }}>
      <Sidebar />
      <Box sx={{ width: "100%" }}>
        <Contentone />
        {state.title == "" ? "" : <Contenttwo />}
        <Box>
          {state.title == "Adminquery" ? <Chat /> : <Queries />}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
