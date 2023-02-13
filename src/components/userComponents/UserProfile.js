import * as React from "react";
import AddressMap from "./AddressMap";
import ChatList from "../chatComponents/ChatList";
import classes from "./UserProfile.module.css";
import {
  Box,
  Divider,
  Avatar,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import ChatBox from "../chatComponents/ChatBox";
import { connect } from "react-redux";

function UserProfile(props) {
  const [userData, setUserData] = React.useState();
  const [companyData, setCompanyData] = React.useState();
  const [addressData, setAddressData] = React.useState();
  const [isData, setIsData] = React.useState(false);

  React.useEffect(() => {
    if (props.userDetail) {
      setUserData(props.userDetail);
      setAddressData(props.userDetail.address);
      setCompanyData(props.userDetail.company);
      setIsData(true);
    }
  }, []);

  return isData ? (
    <Box sx={{ display: "flex", height: "80vh" }}>
      <Box
        sx={{
          width: "35vw",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          src={userData.profilepicture}
          alt=""
          sx={{ width: "200px", height: "200px" }}
        />
        <Typography
          sx={{ m: 1, fontSize: "20px", color: "gray", fontWeight: "bold" }}
        >
          {userData.name}
        </Typography>
        <List sx={{ display: "table", listStyle: "none" }}>
          <ListItem
            sx={{
              m: 1,
              fontSize: "16px",
              color: "gray",
              fontWeight: "bold",
              display: "table-row",
            }}
          >
            <b className={classes.break}>Username : </b> {userData.username}
          </ListItem>
          <ListItem
            sx={{
              m: 1,
              fontSize: "16px",
              color: "gray",
              fontWeight: "bold",
              display: "table-row",
            }}
          >
            <b className={classes.break}>e-mail: </b> {userData.email}
          </ListItem>
          <ListItem
            sx={{
              m: 1,
              fontSize: "16px",
              color: "gray",
              fontWeight: "bold",
              display: "table-row",
            }}
          >
            <b className={classes.break}>Phone : </b> {userData.phone}
          </ListItem>
          <ListItem
            sx={{
              m: 1,
              fontSize: "16px",
              color: "gray",
              fontWeight: "bold",
              display: "table-row",
            }}
          >
            <b className={classes.break}>Website : </b> {userData.website}
          </ListItem>
        </List>
        <Typography
          sx={{
            m: 1,
            mt: 2,
            fontSize: "18px",
            color: "gray",
            fontWeight: "bold",
          }}
        >
          Company
        </Typography>
        <List sx={{ display: "table", listStyle: "none" }}>
          <ListItem
            sx={{
              m: 1,
              fontSize: "16px",
              color: "gray",
              fontWeight: "bold",
              display: "table-row",
            }}
          >
            <b className={classes.break}>Name : </b> {companyData.name}
          </ListItem>
          <ListItem
            sx={{
              m: 1,
              fontSize: "16px",
              color: "gray",
              fontWeight: "bold",
              display: "table-row",
            }}
          >
            <b className={classes.break}>catchprase: </b>{" "}
            {companyData.catchPhrase}
          </ListItem>
          <ListItem
            sx={{
              m: 1,
              fontSize: "16px",
              color: "gray",
              fontWeight: "bold",
              display: "table-row",
            }}
          >
            <b className={classes.break}>bs : </b> {companyData.bs}
          </ListItem>
        </List>
      </Box>
      <Divider orientation="vertical" variant="middle" />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          px: 3,
        }}
      >
        <Typography
          sx={{
            mt: 2,
            fontSize: "18px",
            color: "gray",
            fontWeight: "bold",
          }}
        >
          Address :
        </Typography>
        <Box sx={{px:5}} >
          <List sx={{ display: "table", listStyle: "none" }}>
            <ListItem
              sx={{
                m: 1,
                fontSize: "16px",
                color: "gray",
                fontWeight: "bold",
                display: "table-row",
              }}
            >
              <b className={classes.break}>Street : </b> {addressData.street}
            </ListItem>
            <ListItem
              sx={{
                m: 1,
                fontSize: "16px",
                color: "gray",
                fontWeight: "bold",
                display: "table-row",
              }}
            >
              <b className={classes.break}>Suite: </b> {addressData.suite}
            </ListItem>
            <ListItem
              sx={{
                m: 1,
                fontSize: "16px",
                color: "gray",
                fontWeight: "bold",
                display: "table-row",
              }}
            >
              <b className={classes.break}>City : </b> {addressData.city}
            </ListItem>
            <ListItem
              sx={{
                m: 1,
                fontSize: "16px",
                color: "gray",
                fontWeight: "bold",
                display: "table-row",
              }}
            >
              <b className={classes.break}>Zipcode : </b> {addressData.zipcode}
            </ListItem>
          </List>
        </Box>
        <Box sx={{ width:'90%', height:'400px', px:2, zIndex:1 }} >
          <AddressMap lat={parseInt(addressData.geo.lat)} lng={parseInt(addressData.geo.lng)} name={userData.name} />
        </Box>
      </Box>
      <ChatList/>
      {props.isChatOpen ? <ChatBox/> : null}
    </Box>
  ) : null;
}

const mapStateToProps = (state) => {
  return {
    isChatOpen: state.chatState.isChatOpen,
  };
};

export default connect(mapStateToProps, null)(UserProfile);
