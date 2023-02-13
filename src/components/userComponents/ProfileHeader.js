import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import UserAccountCard from "./UserAccountCard";

function ProfileHeader(props) {
  const [showAccountCard, setShowAccountCard] = React.useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "4rem",
        borderBottom: "1px solid lightgrey",
        mx: 3,
        px:2
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "grey",
        }}
      >
        {props.headerName}
      </Typography>
      <Box
        sx={{
          width: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
          cursor:'pointer'
        }}
        onClick={()=> setShowAccountCard(!showAccountCard)}
      >
        <Avatar alt="" src={props.userDetail.profilepicture} />
        <Typography sx={{ ml: 1, color:'gray', fontWeight:'bold' }}>{props.userDetail.name}</Typography>
      </Box>
      {showAccountCard ? <UserAccountCard/> : null}
    </Box>
  );
}

export default ProfileHeader;
