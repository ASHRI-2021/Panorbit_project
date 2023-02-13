import React from "react";
import { connect } from "react-redux";
import { Box, Avatar, Typography, List, ListItem, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function UserAccountCard(props) {
  const navigate = useNavigate();
  const handleSignOut = () => {
    navigate("/");
    props.storeSelectedUser(null);
  }
  return (
    <Box
      sx={{
        width: "16vw",
        position: "absolute",
        top: "5rem",
        right: "5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "white",
        boxShadow: 10,
        borderRadius: 5,
        zIndex: 2,
        pb: 2,
      }}
    >
      <Avatar
        src={props.selectedUser.profilepicture}
        sx={{ width: "80px", height: "80px", my: 2 }}
      />
      <Typography
        sx={{
          fontSize: "16px",
          color: "gray",
          width: "auto",
          textAlign: "justify",
          fontWeight: "bold",
        }}
      >
        {props.selectedUser.name}
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          color: "gray",
          width: "100%",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {props.selectedUser.email}
      </Typography>
      <List>
        {props.usersList.map((user) =>
          user.id < 3 ? (
            <ListItem
              key={user.id}
              sx={{
                fontSize: "14px",
                color: "gray",
                fontWeight: "bold",
                borderTop: "1px solid lightgrey",
              }}
            >
              <Avatar
                src={user.profilepicture}
                alt=""
                sx={{ width: 24, height: 24, mr: 1 }}
              />
              {user.name}
            </ListItem>
          ) : null
        )}
      </List>
      <Button
        style={{
          backgroundColor: "#cb4763",
          color: "white",
          fontWeight: "bold",
          borderRadius: "25px",
          textTransform: "none",
          padding: "5px 20px",
          margin: "10px 0px",
        }}
        onClick={handleSignOut}
      >
        Sign Out
      </Button>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedUser: state.userState.selectedUser,
    usersList: state.userState.usersList,
  };
};

const mapDispachToProps = (dispatch) => {
    return {
      storeSelectedUser: (user) =>
        dispatch({ type: "SELECTED_USER", selectedUser: user }),
    };
  };

export default connect(mapStateToProps, mapDispachToProps)(UserAccountCard);
