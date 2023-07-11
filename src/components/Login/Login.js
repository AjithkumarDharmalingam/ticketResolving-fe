import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Logo from "../../assets/logo.png";
import Home from "../../assets/home.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUserData } from "../Reducers/user";
const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    if (email == "" || password == "") {
      alert("please fill all fields");
    } else {
      axios
        .get("https://ticketresolving.onrender.com/api/login/", {
          params: {
            email: email,
            password: password
          }
        })
        .then(response => {
          console.log(response.data[0].category);
          try {
            dispatch(
              getUserData({
                name: response.data[0].name,
                email: response.data[0].email,
                password: response.data[0].password,
                address: response.data[0].address,
                mobile: response.data[0].mobile,
                category: response.data[0].category
              })
            );
            if (response.data[0].category == "Student") {
              navigate("/dashboard");
            } else {
              navigate("/admindashboard");
            }
          } catch (err) {
            alert("Please enter valid credentials");
          }
        })
        .catch(err => alert("Please enter valid credentials"));
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
              type="password"
              size="small"
              value={password}
              onChange={e => setpassword(e.target.value)}
              fullWidth
            />
          </Box>

          <Button
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
            sx={{ fontFamily: "DM Sans" }}
          >
            Login
          </Button>
          <Typography
            sx={{ textAlign: "center", fontFamily: "DM Sans" }}
            onClick={e => navigate("/signup")}
          >
            Create new account ?
          </Typography>
        </Stack>
      </Box>
      <Box>
        <img src={Home} style={{ maxWidth: "500px", height: "100vh" }} />
      </Box>
    </Box>
  );
};

export default Login;
