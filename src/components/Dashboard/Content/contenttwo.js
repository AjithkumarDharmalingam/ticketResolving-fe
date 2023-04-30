import { Box } from "@mui/material";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import React from "react";
import { useDispatch } from "react-redux";
import { getPageState } from "../../Reducers/pagestate";
import { useSelector } from "react-redux";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Contenttwo = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.pagestate.value);
  console.log(state);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingInline: "24px",
        paddingBlock: "20px",
        background: "#f0efff"
      }}
    >
      {state.title == "Create Query"
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
              dispatch(
                getPageState({ title: "My Queries", text: "Create Query" })
              );
            }}
          >
            Back
          </Button>
        : state.title == "Query"
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
                dispatch(
                  getPageState({
                    title: "My Queries",
                    text: "Create Query"
                  })
                );
              }}
            >
              Back
            </Button>
          : <Button
              variant="outlined"
              color="secondary"
              startIcon={<AddIcon />}
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
                dispatch(
                  getPageState({
                    title: "Create Query",
                    text: "Back"
                  })
                );
              }}
            >
              Create Query
            </Button>}
      {state.title == "My Queries" || state.title == ""
        ? <TextField
            InputProps={{
              sx: {
                borderRadius: "10px",
                background: "#fff",
                height: "32px",
                width: "296px"
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
            id="outlined-basic"
            variant="outlined"
            size="small"
          />
        : ""}
    </Box>
  );
};

export default Contenttwo;
