import * as React from "react";
import { connect } from "react-redux";
import {
  Avatar,
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function ChatList(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isOpen) props.storeChatStatus(false);
  }, [isOpen]);

  const handleChatListClick = () => {
    setIsOpen(!isOpen);
  };

  const handleUserChatClick = (e, user) => {
    props.storeChatStatus(true);
    props.storeSelectedChat(user);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        right: "5%",
        width: "18vw",
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          p: 1.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          //   bgcolor: "blueviolet",
          bgcolor: "#5239e9",
          color: "white",
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          zIndex: 2,
          cursor: "pointer",
        }}
        onClick={handleChatListClick}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChatBubbleOutlineIcon />
          <Typography sx={{ px: 1 }}>Chats</Typography>
        </Box>
        {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </Box>
      {isOpen ? (
        <List sx={{ height: "45vh", bgcolor: "white", overflow: "auto" }}>
          {props.usersList.map((user) =>
            user.id !== props.selectedUser.id ? (
              <ListItemButton
                key={user.id}
                sx={{ display: "flex", px: 2 }}
                onClick={(e) => handleUserChatClick(e, user)}
              >
                <ListItemIcon sx={{ minWidth: "45px" }}>
                  <Avatar
                    sx={{ width: 32, height: 32 }}
                    src={user.profilepicture}
                  />
                </ListItemIcon>
                <ListItemText sx={{ fontSize: "10px", color: "gray" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {user.name}
                    <FiberManualRecordIcon
                      style={{ color: "green", width: "12px", height: "12px" }}
                    />
                  </Box>
                </ListItemText>
              </ListItemButton>
            ) : null
          )}
        </List>
      ) : null}
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    usersList: state.userState.usersList,
    selectedUser: state.userState.selectedUser,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    storeChatStatus: (status) =>
      dispatch({ type: "CHAT_OPEN", isChatOpen: status }),
    storeSelectedChat: (chat) =>
      dispatch({ type: "SELECTED_CHAT", selectedChat: chat }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(ChatList);
