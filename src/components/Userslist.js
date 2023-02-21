import * as React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./Userlist.module.css";
import {
  Box,
  List,
  Typography,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import { users_list } from "../constants/users"


function Userslist(props) {
  const [users, setUsers] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    // getUsers();
    setUsers(users_list.users);
    props.storeUsersList(users_list.users);
  }, []);

  // function getUsers() {
  //   fetch("https://panorbit.in/api/users.json")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if (result) {
  //         setUsers(result.users);
  //         props.storeUsersList(result.users);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }

  function handleUserClick(e, user) {
    //send the user data to redux
    props.storeSelectedUser(user);

    //navigate to profile page
    navigate("/user_profile");
  }
  return (
    <Box
      sx={{
        height: "67vh",
        width: "40vw",
        position: "absolute",
        top: "15%",
        left: "30vw",
        bgcolor: "white",
        boxShadow: 10,
        borderRadius: 5,
        zIndex:1,
      }}
    >
      <Typography
        sx={{
          height: "4.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px",
          bgcolor: "#ededed",
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          color: "grey",
          fontWeight:'bold'
        }}
      >
        Select an account
      </Typography>
      <List className={classes.listContainer}>
        {users.length > 0 ? (
          users.map((user) => (
            <ListItemButton
              key={user.id}
              sx={{ borderBottom: "1px solid #dedded", mx: 1 }}
              onClick={(e) => handleUserClick(e, user)}
            >
              <ListItemIcon>
                <Avatar src={user.profilepicture} />
              </ListItemIcon>
              <ListItemText primary={user.name} />
            </ListItemButton>
          ))
        ) : (
          <Typography
            sx={{
              height: "50vh",
              fontSize: "20px",
              color: "grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            No users found
          </Typography>
        )}
      </List>
    </Box>
  );
}

const mapDispachToProps = (dispatch) => {
  return {
    storeUsersList: (list) => dispatch({ type: "USERS_LIST", usersList: list }),
    storeSelectedUser: (user) =>
      dispatch({ type: "SELECTED_USER", selectedUser: user }),
  };
};
export default connect(null, mapDispachToProps)(Userslist);
