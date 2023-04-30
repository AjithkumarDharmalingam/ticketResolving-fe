import { Box, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPageState } from "../../Reducers/pagestate";
import { getQueryData } from "../../Reducers/query";

const Queries = () => {
  const [queries, setqueries] = useState([]);
  const dispatch = useDispatch();
  const [querystate, setquerystate] = useState(false);
  const user = useSelector(state => state.user.value);
  useEffect(
    () => {
      getData();
    },
    [querystate]
  );
  function getData() {
    axios.get("https://ticketresolving.onrender.com/api/viewuserqueries/").then(res => {
      setqueries(res.data);
    });
  }

  return (
    <Box sx={{ width: "100%" }}>
      {queries.map(data => {
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
                    title: "Adminquery",
                    text: "Back"
                  })
                );
              }
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
              {data.status == "unassigned"
                ? <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      axios
                        .put("https://ticketresolving.onrender.com/api/assigntask", {
                          id: data._id,
                          mentoremail: user.email
                        })
                        .then(res => {
                          if (res.data.status == 200) {
                            alert(res.data.message);
                            setquerystate(!querystate);
                          }
                        });
                    }}
                  >
                    Assign
                  </Button>
                : ""}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Queries;
