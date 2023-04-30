import "./App.css";
import Signup from "./components/Signup/signup";
import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/dashboard";
import Createquery from "./components/Queries/create_query";
import Admindashboard from "./components/Admin/Dashboard/dashboard";

function App() {
  return (
    <Box>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/create-query" element={<Createquery />} />
        <Route exact path="/admindashboard" element={<Admindashboard />} />
      </Routes>
    </Box>
  );
}

export default App;
