import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Createquery = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("");
  const [subcategory, setsubcategory] = useState("");
  const [tag, settag] = useState("");
  const [language, setlanguage] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [from, setfrom] = useState("");
  const [Till, setTill] = useState("");
  const [status, setstatus] = useState("unassigned");
  const user = useSelector(state => state.user.value);
  const createQuery = e => {
    e.preventDefault();
    if (
      category == "" ||
      subcategory == "" ||
      tag == "" ||
      language == "" ||
      title == "" ||
      description == "" ||
      from == "" ||
      Till == ""
    ) {
      alert("please fill all fields");
    } else {
      axios
        .post("http://localhost:3001/createquery", {
          category: category,
          subcategory: subcategory,
          tag: tag,
          language: language,
          title: title,
          description: description,
          from: from,
          till: Till,
          status: status,
          email: user.email
        })
        .then(res => {
          if (res.data.status == 200) {
            alert(res.data.message);
          }
        });
    }
  };
  return (
    <Box sx={{ margin: "auto", paddingBlock: "20px", width: "55%" }}>
      <Card>
        <CardContent>
          <Typography
            sx={{
              fontSize: 14,
              fontFamily: "DM Sans",
              paddingBlock: "20px",
              fontWeight: "bold"
            }}
            color="#33028a"
            gutterBottom
          >
            Topic
          </Typography>
          <Stack spacing={1} sx={{ alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                width: "50%"
              }}
            >
              <Typography
                sx={{
                  color: "#7e8e9f",
                  fontFamily: "DM Sans",
                  fontWeight: "500"
                }}
              >
                Category
              </Typography>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={category}
                  label="Category"
                  onChange={e => setcategory(e.target.value)}
                  sx={{ borderRadius: "8px" }}
                  size="small"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Zen-Class Doubt">Zen-Class Doubt</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                width: "50%"
              }}
            >
              <Typography
                sx={{
                  color: "#7e8e9f",
                  fontFamily: "DM Sans",
                  fontWeight: "500"
                }}
              >
                Subcategory
              </Typography>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={subcategory}
                  label="Sub Category"
                  onChange={e => setsubcategory(e.target.value)}
                  sx={{ borderRadius: "8px" }}
                  size="small"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Task">Task</MenuItem>
                  <MenuItem value="Webcode">Webcode</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                width: "50%"
              }}
            >
              <Typography
                sx={{
                  color: "#7e8e9f",
                  fontFamily: "DM Sans",
                  fontWeight: "500"
                }}
              >
                Tags
              </Typography>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={tag}
                  label="Tags"
                  onChange={e => settag(e.target.value)}
                  sx={{ borderRadius: "8px" }}
                  size="small"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="html">html</MenuItem>
                  <MenuItem value="css">css</MenuItem>
                  <MenuItem value="javascript">javascript</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                width: "50%"
              }}
            >
              <Typography
                sx={{
                  color: "#7e8e9f",
                  fontFamily: "DM Sans",
                  fontWeight: "500"
                }}
              >
                Prefered Voice Communication Language
              </Typography>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={language}
                  label="Language"
                  onChange={e => setlanguage(e.target.value)}
                  sx={{ borderRadius: "8px" }}
                  size="small"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Tamil">Tamil</MenuItem>
                  <MenuItem value="Hindi">Hindi</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
          <Typography
            sx={{
              fontSize: 14,
              fontFamily: "DM Sans",
              paddingBlock: "20px",
              fontWeight: "bold"
            }}
            color="#33028a"
            gutterBottom
          >
            Details
          </Typography>
          <Stack spacing={1} sx={{ alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                width: "50%"
              }}
            >
              <Typography
                sx={{
                  color: "#7e8e9f",
                  fontFamily: "DM Sans",
                  fontWeight: "500"
                }}
              >
                Query Title
              </Typography>
              <TextField
                label="Query Title"
                id="outlined-size-small"
                value={title}
                onChange={e => settitle(e.target.value)}
                sx={{ m: 1, width: "100%", borderRadius: "8px" }}
                size="small"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                width: "50%"
              }}
            >
              <Typography
                sx={{
                  color: "#7e8e9f",
                  fontFamily: "DM Sans",
                  fontWeight: "500"
                }}
              >
                Query Description
              </Typography>
              <TextField
                label="Query Description"
                id="outlined-size-small"
                value={description}
                onChange={e => setdescription(e.target.value)}
                sx={{ m: 1, width: "100%", borderRadius: "8px" }}
              />
            </Box>
          </Stack>
          <Typography
            sx={{
              fontSize: 14,
              fontFamily: "DM Sans",
              paddingBlock: "20px",
              fontWeight: "bold"
            }}
            color="#33028a"
            gutterBottom
          >
            Your available Time ? ( Ours : 9:00 AM - 7:00 PM )
          </Typography>
          <Stack spacing={1} sx={{ alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                width: "50%"
              }}
            >
              <Typography
                sx={{
                  color: "#7e8e9f",
                  fontFamily: "DM Sans",
                  fontWeight: "500"
                }}
              >
                From
              </Typography>
              <TextField
                type="time"
                id="outlined-size-small"
                sx={{ m: 1, width: "100%", borderRadius: "8px" }}
                size="small"
                value={from}
                onChange={e => setfrom(e.target.value)}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                width: "50%"
              }}
            >
              <Typography
                sx={{
                  color: "#7e8e9f",
                  fontFamily: "DM Sans",
                  fontWeight: "500"
                }}
              >
                Till
              </Typography>
              <TextField
                type="time"
                id="outlined-size-small"
                sx={{ m: 1, width: "100%", borderRadius: "8px" }}
                size="small"
                value={Till}
                onChange={e => setTill(e.target.value)}
              />
            </Box>
          </Stack>
          <Box
            sx={{ display: "flex", gap: "13px", mt: 5, justifyContent: "end" }}
          >
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                color: "#6f42c1",
                borderRadius: "10px",
                border: "1px solid #6f42c1",
                fontFamily: "DM Sans",
                background: "#fff",
                fontWeight: "bold",
                textTransform: "capitalize",
                height: "32px"
              }}
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Cancel
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              sx={{
                color: "#fff",
                borderRadius: "10px",
                fontFamily: "DM Sans",
                background: "#6f42c1",
                fontWeight: "bold",
                textTransform: "capitalize",
                height: "32px"
              }}
              onClick={createQuery}
            >
              Create
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Createquery;
