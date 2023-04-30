import { Box } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPageState } from "../../../Reducers/pagestate";
import { useSelector } from "react-redux";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Contenttwo = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.pagestate.value);
  console.log(state);
  return (
    <Box
      sx={{
        paddingInline: "24px",
        paddingBlock: "20px",
        background: "#f0efff"
      }}
    >
      {state.title == "Adminquery"
        ? <Button
            variant="outlined"
            color="secondary"
            startIcon={<ArrowBackIosNewIcon />}
            sx={{
              color: "#4b0dba",
              borderRadius: "10px",
              border: "1px solid #4b0dba",
              fontFamily: "DM Sans",
              background: "#fff",
              fontWeight: "bold",
              textTransform: "capitalize",
              height: "32px"
            }}
            onClick={() => {
              dispatch(getPageState({ title: "", text: "" }));
            }}
          >
            Back
          </Button>
        : ""}
    </Box>
  );
};

export default Contenttwo;
