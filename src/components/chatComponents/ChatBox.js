import * as React from "react";
import { connect } from "react-redux";
import {
  Box,
  TextField,
  InputAdornment,
  Avatar,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from '@mui/icons-material/Close';

function ChatBox(props) {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        right: "25%",
        width: "20vw",
        display: "flex",
        flexDirection: "column",
        zIndex:2
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
          cursor: "pointer",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar src={props.selectedChat.profilepicture} />
          <Typography sx={{ px: 1 }}>{props.selectedChat.name}</Typography>
        </Box>
        <Box sx={{display:'flex',alignItems:'center'}} >
        {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        <CloseIcon fontSize="small" sx={{ ml:1}} onClick={()=> props.storeChatStatus(false)} />
        </Box>
      </Box>
      {isOpen ? (
        <Box>
          <Box
            sx={{
              height: "28vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "white",
              color:'grey'
            }}
          >
            Text Messages Here!
          </Box>
          <TextField
            label="Type message here!"
            variant="filled"
            fullWidth
            sx={{ bgcolor:'white'}}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{ cursor: "pointer" }}
                  onClick={() => alert("Message sent")}
                >
                  <SendIcon sx={{ color: "#5239e9" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      ) : null}
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedChat: state.chatState.selectedChat,
  };
};

const mapDispachToProps = (dispatch) => {
    return {
      storeChatStatus: (status) =>
        dispatch({ type: "CHAT_OPEN", isChatOpen: status }),
    };
  }; 

export default connect(mapStateToProps, mapDispachToProps)(ChatBox);
