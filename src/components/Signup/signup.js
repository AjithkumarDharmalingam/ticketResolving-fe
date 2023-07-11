import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Logo from "../../assets/logo.png";
import Home from "../../assets/home.png";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [address, setaddress] = useState("");
  const [mobile, setmobile] = useState("");
  const [category, setcategory] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (
      name == "" ||
      email == "" ||
      password == "" ||
      address == "" ||
      mobile == "" ||
      category == ""
    ) {
      alert("please fill all fields");
    } else {
      axios
        .post("https://ticketresolving.onrender.com/signup", {
          name: name,
          email: email,
          password: password,
          address: address,
          mobile: mobile,
          category: category
        })
        .then(res => {
          if (res.data.status == 200) {
            alert(res.data.message);
            navigate("/");
          }
        });
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" }
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box>
          <img src={Logo} />
        </Box>
        <Stack
          sx={{
            width: { lg: "50%", md: "50%", sm: "50%", xs: "100%" },
            margin: "auto"
          }}
          spacing={2}
        >
          <Box>
            <Typography sx={{ fontFamily: "DM Sans" }}>Name</Typography>
            <TextField
              id="outlined-basic"
              label="Your name"
              variant="outlined"
              size="small"
              value={name}
              onChange={e => setname(e.target.value)}
              fullWidth
            />
          </Box>
          <Box>
            <Typography sx={{ fontFamily: "DM Sans" }}>Email</Typography>
            <TextField
              id="outlined-basic"
              label="Example: johndoe@mail.com"
              variant="outlined"
              size="small"
              value={email}
              onChange={e => setemail(e.target.value)}
              fullWidth
            />
          </Box>
          <Box>
            <Typography sx={{ fontFamily: "DM Sans" }}>Password</Typography>
            <TextField
              id="outlined-basic"
              label="Your password"
              variant="outlined"
              size="small"
              type="password"
              value={password}
              onChange={e => setpassword(e.target.value)}
              fullWidth
            />
          </Box>
          <Box>
            <Typography sx={{ fontFamily: "DM Sans" }}>Address</Typography>
            <TextField
              id="outlined-basic"
              label="Your address"
              variant="outlined"
              size="small"
              value={address}
              onChange={e => setaddress(e.target.value)}
              fullWidth
            />
          </Box>
          <Box>
            <Typography sx={{ fontFamily: "DM Sans" }}>Mobile</Typography>
            <TextField
              id="outlined-basic"
              label="Your mobile"
              variant="outlined"
              size="small"
              value={mobile}
              onChange={e => setmobile(e.target.value)}
              fullWidth
            />
          </Box>
          <Box>
            <Typography sx={{ fontFamily: "DM Sans" }}>Category</Typography>
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
                <MenuItem value="Student">Student</MenuItem>
                <MenuItem value="Mentor">Mentor</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            variant="contained"
            color="secondary"
            sx={{ fontFamily: "DM Sans" }}
            onClick={handleSubmit}
          >
            Create Account
          </Button>
          <Typography
            sx={{ textAlign: "center", fontFamily: "DM Sans" }}
            onClick={() => navigate("/")}
          >
            Already have account ? Login
          </Typography>
        </Stack>
      </Box>
      <Box>
        <img src={Home} style={{ maxWidth: "500px", height: "100vh" }} />
      </Box>
    </Box>
  );
};

export default Signup;
