import { Box, Button, Divider, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { getPageState } from "../../Reducers/pagestate";
import axios from "axios";
import { useSelector } from "react-redux";
import { getQueryData } from "../../Reducers/query";

const Contentfour = () => {
  const dispatch = useDispatch();
  const [queries, setqueries] = useState([]);
  const user = useSelector(state => state.user.value);

  useEffect(() => {
    axios
      .get("https://ticketresolving.onrender.com/api/viewqueries/", {
        params: {
          email: user.email
        }
      })
      .then(res => {
        if (res.data.length == 0) {
          setqueries([]);
        } else {
          setqueries([res.data[0]]);
        }
      });
  }, []);
  return (
    <Stack sx={{ width: "50%" }} spacing={2}>
      <Typography
        sx={{
          color: "#b182ff",
          textAlign: "center",
          mt: 1,
          fontFamily: "DM Sans"
        }}
      >
        Recent Query
      </Typography>
      {queries.length == 0 || queries.length == undefined
        ? <Typography>No Data</Typography>
        : queries.map(data => {
            return (
              <Stack spacing={3}>
                {" "}<Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBlock: "15px",
                    paddingInline: "15px",
                    alignItems: "center"
                  }}
                >
                  <Typography variant="h6" sx={{ fontFamily: "DM Sans" }}>
                    {data.title}
                  </Typography>
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
                </Box>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingInline: "15px"
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "#7e8e9f",
                        fontFamily: "DM Sans"
                      }}
                    >
                      Created at:
                    </Typography>
                    <Typography sx={{ fontFamily: "DM Sans" }}>
                      {data.dateandtime}
                    </Typography>
                  </Box>
                  <Box sx={{ paddingInline: "15px" }}>
                    <Typography
                      sx={{
                        color: "#7e8e9f",
                        fontFamily: "DM Sans"
                      }}
                    >
                      Description:
                    </Typography>
                    <Typography sx={{ fontFamily: "DM Sans" }}>
                      {data.description}
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ fontFamily: "DM Sans" }}
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
                  Go to query
                </Button>
              </Stack>
            );
          })}
    </Stack>
  );
};

export default Contentfour;
