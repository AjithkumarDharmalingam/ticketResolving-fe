import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import InputAdornment from "@mui/material/InputAdornment";
import Chatdetails from "./chatdetails";
import { useDispatch, useSelector } from "react-redux";
import { getQueryData } from "../../Reducers/query";
import axios from "axios";

const Chat = () => {
  const query = useSelector(state => state.query.value);
  const dispatch = useDispatch();
  const [message, setmessage] = useState("");
  const [chats, setchats] = useState([]);
  const [chatstate, setchatstate] = useState(false);
  useEffect(
    () => {
      getMessages();
    },
    [chatstate]
  );

  function getMessages() {
    var key1 = query.sendermail + "-" + query.receivermail;
    var key2 = query.receivermail + "-" + query.sendermail;
    axios
      .get("http://localhost:3001/api/getmessages/", {
        params: {
          key1: key1,
          key2: key2,
          title: query.title
        }
      })
      .then(res => {
        console.log(res.data);
        setchats(res.data);
      });
  }

  const sendMessage = e => {
    e.preventDefault();
    if (message == "") {
      return;
    } else {
      axios
        .post("http://localhost:3001/sendmessage", {
          sender_id: query.sendermail,
          receiver_id: query.receivermail,
          message: message,
          messagekey: query.sendermail + "-" + query.receivermail,
          title: query.title,
          dateandtime: new Date().toLocaleString().replace(",", "")
        })
        .then(res => {
          if (res.data.status == 200) {
            setchatstate(!chatstate);
            setmessage("");
          }
        });
    }
  };
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <Box sx={{ width: "50%", height: "100vh" }}>
        <Box
          sx={{
            background: "#fff",
            display: "flex",
            gap: "12px",
            justifyContent: "end",
            height: "fit-content",
            paddingBlock: "20px"
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
            {query.status}
          </Typography>
          {query.status == "closed"
            ? ""
            : <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  axios
                    .put("http://localhost:3001/api/closetask", {
                      id: query.id,
                      status: "closed"
                    })
                    .then(res => {
                      if (res.data.status == 200) {
                        dispatch(
                          getQueryData({
                            title: query.title,
                            createdat: query.createdat,
                            description: query.description,
                            category: query.category,
                            subcategory: query.subcategory,
                            language: query.language,
                            status: "closed",
                            sendermail: query.sendermail,
                            receivermail: query.receivermail
                          })
                        );
                        alert(res.data.message);
                      }
                    });
                }}
              >
                Close
              </Button>}
        </Box>
        <Stack spacing={2} sx={{ maxHeight: "500px", overflowY: "scroll" }}>
          {chats.map(data => {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "8px",
                  mt: 3,
                  paddingInline: "5px"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    background:
                      data.sender_id == query.sendermail ? "#fff" : "#f7f5fc",
                    borderRadius: "12px",
                    borderTopRightRadius: "0px",
                    border: "1px solid #dedede",
                    marginLeft:
                      data.sender_id == query.sendermail ? "auto" : "none",
                    p: 2
                  }}
                >
                  <Typography
                    onClick={() => {
                      if (data.message.slice(0, 4) == "http") {
                        window.open(data.message, "_blank");
                      }
                    }}
                    color={data.message.slice(0, 4) == "http" ? "blue" : ""}
                  >
                    {data.message}
                  </Typography>
                  <Typography sx={{ textAlign: "end" }}>
                    {data.dateandtime}
                  </Typography>
                </Box>
                <Box>
                  {" "}<svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="8" fill="#4B0DBA" />
                    <path
                      d="M8 3C7.46957 3 6.96086 3.21071 6.58579 3.58579C6.21071 3.96086 6 4.46957 6 5C6 5.53043 6.21071 6.03914 6.58579 6.41421C6.96086 6.78929 7.46957 7 8 7C8.53043 7 9.03914 6.78929 9.41421 6.41421C9.78929 6.03914 10 5.53043 10 5C10 4.46957 9.78929 3.96086 9.41421 3.58579C9.03914 3.21071 8.53043 3 8 3Z"
                      fill="white"
                    />
                    <path
                      d="M10.5 8H5.5C5.10218 8 4.72064 8.15804 4.43934 8.43934C4.15804 8.72064 4 9.10218 4 9.5C4 10.616 4.459 11.51 5.212 12.115C5.953 12.71 6.947 13 8 13C9.053 13 10.047 12.71 10.788 12.115C11.54 11.51 12 10.616 12 9.5C12 9.10218 11.842 8.72064 11.5607 8.43934C11.2794 8.15804 10.8978 8 10.5 8Z"
                      fill="white"
                    />
                  </svg>
                </Box>
              </Box>
            );
          })}

          {query.status == "closed"
            ? ""
            : <Box>
                <TextField
                  type="text"
                  value={message}
                  onChange={e => setmessage(e.target.value)}
                  placeholder="Enter the chat..."
                  sx={{ width: "100%", top: "50px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SendIcon onClick={sendMessage} />
                      </InputAdornment>
                    )
                  }}
                />
              </Box>}
        </Stack>
      </Box>
      <Box sx={{ width: "50%" }}>
        <Chatdetails />
      </Box>
    </Box>
  );
};

export default Chat;
