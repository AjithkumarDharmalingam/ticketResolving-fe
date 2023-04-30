import { Box, Divider, Stack } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Chatdetails = () => {
  const query = useSelector(state => state.query.value);

  return (
    <Stack spacing={2}>
      <Box sx={{ marginBlock: "25px", paddingInline: "15px" }}>
        <Typography variant="h6" sx={{ fontFamily: "DM Sans" }}>
          {query.title}
        </Typography>
      </Box>
      <Divider />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingInline: "30px"
        }}
      >
        <Box>
          <Typography sx={{ color: "#7e8e9f", fontFamily: "DM Sans" }}>
            Created at:
          </Typography>
          <Typography sx={{ fontFamily: "DM Sans" }}>
            {query.createdat}
          </Typography>
        </Box>
        <Box sx={{ paddingInline: "30px" }}>
          <Typography sx={{ color: "#7e8e9f", fontFamily: "DM Sans" }}>
            Description:
          </Typography>
          <Typography sx={{ fontFamily: "DM Sans" }}>
            {query.description}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingInline: "30px"
        }}
      >
        <Box>
          <Typography sx={{ color: "#7e8e9f", fontFamily: "DM Sans" }}>
            Category:
          </Typography>
          <Typography sx={{ fontFamily: "DM Sans" }}>
            {query.category}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ color: "#7e8e9f", fontFamily: "DM Sans" }}>
            Sub-Category:
          </Typography>
          <Typography sx={{ fontFamily: "DM Sans" }}>
            {query.subcategory}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ paddingInline: "30px" }}>
        <Typography sx={{ color: "#7e8e9f", fontFamily: "DM Sans" }}>
          Preferred Language:
        </Typography>
        <Typography sx={{ fontFamily: "DM Sans" }}>
          {query.language}
        </Typography>
      </Box>
    </Stack>
  );
};

export default Chatdetails;
