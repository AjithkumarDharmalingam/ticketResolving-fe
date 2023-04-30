import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPageState } from "../../Reducers/pagestate";
import axios from "axios";
import { getQueryData } from "../../Reducers/query";

const Contentthree = () => {
  const state = useSelector(state => state.pagestate.value);
  const user = useSelector(state => state.user.value);
  const [queries, setqueries] = useState([]);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get("https://ticketresolving.onrender.com/api/viewqueries/", {
        params: {
          email: user.email
        }
      })
      .then(res => {
        setqueries(res.data);
      });
  }

  return (
    <Box sx={{ width: "75%", maxHeight: "100vh", overflowY: "scroll" }}>
      {queries.length == 0
        ? <Typography>No Queries</Typography>
        : queries.map(data => {
            return (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  background: "#fff",
                  border: "1px solid #dedede",
                  padding: "15px 24px",
                  border: "16px",
                  mt: 2,
                  borderRadius: "16px"
                }}
                onClick={() => {
                  if (data.status == "unassigned") {
                    return;
                  } else {
                    dispatch(
                      getQueryData({
                        id: data._id,
                        title: data.title,
                        createdat: data.dateandtime,
                        description: data.description,
                        category: data.category,
                        subcategory: data.subcategory,
                        language: data.language,
                        status: data.status,
                        sendermail: data.mentoremail,
                        receivermail: data.email
                      })
                    );
                    dispatch(
                      getPageState({
                        title: "Query",
                        text: "Back"
                      })
                    );
                  }
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
                >
                  <Typography variant="h6" sx={{ fontFamily: "DM Sans" }}>
                    {data.title}
                  </Typography>
                  <Typography
                    sx={{
                      padding: "2px 12px",
                      color: "#b182ff",
                      background: "#f7f5fc",
                      width: "fit-content",
                      fontFamily: "DM Sans",
                      borderRadius: "12px"
                    }}
                  >
                    {data.category}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    alignItems: "end"
                  }}
                >
                  <Typography
                    sx={{
                      padding: "12px 20px",
                      background: "#d6ffe4",
                      color: "#06aa44",
                      borderRadius: "8px",
                      width: "fit-content",
                      fontFamily: "DM Sans",
                      fontWeight: "bold",
                      fontSize: "12px"
                    }}
                  >
                    {data.status}
                  </Typography>
                  <Typography sx={{ color: "#7e8e9f", fontFamily: "DM Sans" }}>
                    {data.dateandtime}
                  </Typography>
                </Box>
              </Box>
            );
          })}
    </Box>
  );
};

export default Contentthree;
