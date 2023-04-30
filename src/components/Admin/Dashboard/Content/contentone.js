import { Box, Typography } from "@mui/material";
import React from "react";
import user from "../../../../assets/user.png";
import { useSelector } from "react-redux";
const Contentone = () => {
  const state = useSelector(state => state.pagestate.value);
  const userdata = useSelector(state => state.user.value);
  console.log(state);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingInline: "24px",
        paddingBlock: "20px",
        background: "#f9fbfd"
      }}
    >
      <Typography
        sx={{ fontFamily: "DM Sans", fontWeight: "bold", fontSize: "40px" }}
      >
        User Queries
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Typography variant="h6" sx={{ fontFamily: "DM Sans" }}>
          {userdata.name}
        </Typography>
        <img src={user} width="46" />
      </Box>
    </Box>
  );
};

export default Contentone;
