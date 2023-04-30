import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserData } from "../Reducers/user";

const Sidebar = () => {
  const [nav, setnav] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Stack
      onMouseEnter={() => {
        setnav(true);
      }}
      onMouseLeave={() => setnav(false)}
      spacing={2}
      sx={{
        width: nav ? "15%" : "auto",
        m: 1,
        background: "#fff",
        borderRight: "1px solid #e5e5e5"
      }}
    >
      <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <img src={Logo} width={60} height={60} />
        {nav
          ? <Typography sx={{ fontFamily: "DM Sans" }}>Student</Typography>
          : ""}
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          padding: "8px",
          "&:hover": { borderLeft: "4px solid #4b0dba", borderRadius: "4px" }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#4b0dba"
          viewBox="0 0 24 24"
          class="injected-svg"
          data-src="/Icons/Sidebar_Icons/queries.svg"
        >
          <path
            d="M6.5 12C7.95869 12 9.35764 12.5795 10.3891 13.6109C11.4205 14.6424 12 16.0413 12 17.5C12 18.9587 11.4205 20.3576 10.3891 21.3891C9.35764 22.4205 7.95869 23 6.5 23C5.04131 23 3.64236 22.4205 2.61091 21.3891C1.57946 20.3576 1 18.9587 1 17.5C1 16.0413 1.57946 14.6424 2.61091 13.6109C3.64236 12.5795 5.04131 12 6.5 12V12ZM16.749 2C17.3457 2 17.918 2.23705 18.34 2.65901C18.7619 3.08097 18.999 3.65326 18.999 4.25V19.75C18.999 20.3467 18.7619 20.919 18.34 21.341C17.918 21.7629 17.3457 22 16.749 22H11.189C12.2237 20.9226 12.8557 19.5217 12.9788 18.033C13.1018 16.5443 12.7083 15.0587 11.8645 13.826C11.0207 12.5934 9.77814 11.689 8.3458 11.265C6.91346 10.841 5.37879 10.9233 4 11.498V4.251C3.99987 3.95536 4.058 3.66259 4.17108 3.38942C4.28416 3.11626 4.44996 2.86806 4.65901 2.65901C4.86806 2.44996 5.11626 2.28416 5.38942 2.17108C5.66259 2.058 5.95536 1.99987 6.251 2H16.75H16.749ZM6.5 19.88C6.41589 19.8766 6.33196 19.8903 6.25326 19.9202C6.17455 19.95 6.10269 19.9955 6.04199 20.0538C5.98129 20.1121 5.93299 20.1821 5.9 20.2596C5.86701 20.337 5.85001 20.4203 5.85001 20.5045C5.85001 20.5887 5.86701 20.672 5.9 20.7494C5.93299 20.8269 5.98129 20.8969 6.04199 20.9552C6.10269 21.0135 6.17455 21.059 6.25326 21.0888C6.33196 21.1187 6.41589 21.1324 6.5 21.129C6.6613 21.1225 6.81385 21.0539 6.9257 20.9375C7.03754 20.8211 7.10001 20.6659 7.10001 20.5045C7.10001 20.3431 7.03754 20.1879 6.9257 20.0715C6.81385 19.9551 6.6613 19.8865 6.5 19.88V19.88ZM6.5 14.003C5.452 14.003 4.636 14.82 4.647 15.957C4.64833 16.0896 4.70228 16.2163 4.79698 16.3091C4.89169 16.4019 5.01939 16.4533 5.152 16.452C5.28461 16.4507 5.41126 16.3967 5.50409 16.302C5.59692 16.2073 5.64833 16.0796 5.647 15.947C5.641 15.369 6.007 15.003 6.5 15.003C6.972 15.003 7.353 15.395 7.353 15.953C7.353 16.177 7.278 16.343 7.036 16.63L6.936 16.743L6.671 17.033C6.187 17.575 6 17.925 6 18.501C6 18.6336 6.05268 18.7608 6.14645 18.8546C6.24021 18.9483 6.36739 19.001 6.5 19.001C6.63261 19.001 6.75979 18.9483 6.85355 18.8546C6.94732 18.7608 7 18.6336 7 18.501C7 18.268 7.076 18.098 7.324 17.806L7.424 17.691L7.69 17.401C8.168 16.866 8.353 16.519 8.353 15.953C8.353 14.849 7.531 14.003 6.5 14.003ZM20.75 15.002C20.9312 15.002 21.1063 15.0676 21.2429 15.1868C21.3795 15.3059 21.4684 15.4704 21.493 15.65L21.5 15.752V17.25C21.5 17.4312 21.4344 17.6063 21.3152 17.7429C21.1961 17.8795 21.0316 17.9684 20.852 17.993L20.75 18H20V15.002H20.75V15.002ZM20.75 11.002C20.9312 11.002 21.1063 11.0676 21.2429 11.1868C21.3795 11.3059 21.4684 11.4704 21.493 11.65L21.5 11.752V13.25C21.5 13.4312 21.4344 13.6063 21.3152 13.7429C21.1961 13.8795 21.0316 13.9684 20.852 13.993L20.75 14H20V11.002H20.75V11.002ZM20.75 7.002C20.9312 7.00201 21.1063 7.06764 21.2429 7.18677C21.3795 7.30589 21.4684 7.47045 21.493 7.65L21.5 7.752V9.25C21.5 9.43124 21.4344 9.60634 21.3152 9.74293C21.1961 9.87952 21.0316 9.96835 20.852 9.993L20.75 10H20V7.002H20.75V7.002ZM14.748 5.497H8.252C8.07076 5.49701 7.89566 5.56264 7.75907 5.68177C7.62248 5.80089 7.53365 5.96545 7.509 6.145L7.502 6.247V7.751C7.502 8.131 7.785 8.444 8.151 8.494L8.252 8.501H14.748C14.9292 8.50099 15.1043 8.43536 15.2409 8.31623C15.3775 8.19711 15.4664 8.03255 15.491 7.853L15.498 7.751V6.247C15.498 6.04809 15.419 5.85732 15.2783 5.71667C15.1377 5.57602 14.9469 5.497 14.748 5.497V5.497Z"
            fill="#7E8E9F"
          />
        </svg>

        {nav
          ? <Typography sx={{ fontFamily: "DM Sans" }}>Queries</Typography>
          : ""}
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          padding: "8px",
          "&:hover": { borderLeft: "4px solid #4b0dba", borderRadius: "4px" }
        }}
        onClick={() => {
          dispatch(
            getUserData({
              name: "",
              email: "",
              password: "",
              address: "",
              mobile: "",
              category: ""
            })
          );
          navigate("/");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="17"
          viewBox="0 0 20 17"
          fill="none"
          class="injected-svg"
          data-src="/Icons/Sidebar_Icons/class.svg"
        >
          <path
            d="M17.745 0C18.3417 0 18.914 0.23705 19.336 0.65901C19.7579 1.08097 19.995 1.65326 19.995 2.25V13.755C19.995 14.3517 19.7579 14.924 19.336 15.346C18.914 15.7679 18.3417 16.005 17.745 16.005H2.25C1.95453 16.005 1.66194 15.9468 1.38896 15.8337C1.11598 15.7207 0.86794 15.5549 0.65901 15.346C0.45008 15.1371 0.28434 14.889 0.17127 14.616C0.0581999 14.3431 0 14.0505 0 13.755V2.25C0 1.65326 0.23705 1.08097 0.65901 0.65901C1.08097 0.23705 1.65326 0 2.25 0H17.745ZM17.745 1.5H2.25C2.05109 1.5 1.86032 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25V13.755C1.5 14.169 1.836 14.505 2.25 14.505L4.999 14.504L5 11.75C5.00002 11.3108 5.16517 10.8877 5.46268 10.5646C5.76019 10.2415 6.1683 10.0421 6.606 10.006L6.75 10H13.245C13.6843 10 14.1076 10.1653 14.4307 10.463C14.7538 10.7608 14.9531 11.1691 14.989 11.607L14.995 11.75L14.994 14.504H17.745C17.9439 14.504 18.1347 14.425 18.2753 14.2843C18.416 14.1437 18.495 13.9529 18.495 13.754V2.25C18.495 2.05109 18.416 1.86032 18.2753 1.71967C18.1347 1.57902 17.9439 1.5 17.745 1.5ZM10 3C10.7956 3 11.5587 3.31607 12.1213 3.87868C12.6839 4.44129 13 5.20435 13 6C13 6.7956 12.6839 7.5587 12.1213 8.1213C11.5587 8.6839 10.7956 9 10 9C9.2044 9 8.4413 8.6839 7.87868 8.1213C7.31607 7.5587 7 6.7956 7 6C7 5.20435 7.31607 4.44129 7.87868 3.87868C8.4413 3.31607 9.2044 3 10 3Z"
            fill="#93A4B7"
          />
        </svg>
        {nav
          ? <Typography sx={{ fontFamily: "DM Sans" }}>Logout</Typography>
          : ""}
      </Box>
    </Stack>
  );
};

export default Sidebar;
