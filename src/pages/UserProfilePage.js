import * as React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import UserProfile from "../components/userComponents/UserProfile";
import UserPosts from "../components/userComponents/UserPosts";
import UserGallery from "../components/userComponents/UserGallery";
import UserTodo from "../components/userComponents/UserTodo";
import ProfileHeader from "../components/userComponents/ProfileHeader";
import { useNavigate } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function UserProfilePage(props) {
  const [value, setValue] = React.useState(0);
  const [tabName, setTabName] = React.useState("Profile");
  
  const navigate = useNavigate();
  
  React.useEffect(() => {
    if(props.userData === null) navigate('/');
  },[props.userData]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    getTabName(newValue);
  };

  function getTabName(tabValue) {
    switch(tabValue) {
      case 0: {
        setTabName("Profile");
        break;
      }
      case 1: {
        setTabName("Posts");
        break;
      }
      case 2: {
        setTabName("Gallery");
        break;
      }
      case 3: {
        setTabName("ToDo");
        break;
      }
      default: {
        setTabName("Profile");
        break
      }
    }
  }

  const tabStyle = {
    color: "lightgrey",
    mx: 3,
    textAlign: "left",
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        width:'98vw',
        height: "95vh",
        m:2,
        borderRadius:6,
        boxShadow:15,
        bgcolor:'white'
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#6600FF",
          borderRadius:6
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            width: "15vw",
            color:'white',
            fontWeight:'bold',
            "& .MuiTab-root.Mui-selected": {
              color: 'white',
              borderRight:'1px solid white',
            }
          }}
        >
          <Tab label="Profile" sx={tabStyle} {...a11yProps(0)} />
          <Tab label="Posts" sx={tabStyle} {...a11yProps(1)} />
          <Tab label="Gallery" sx={tabStyle} {...a11yProps(2)} />
          <Tab label="ToDo  " sx={tabStyle} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <Box sx={{ width:'100%'}}>
        {props.userData ? <ProfileHeader headerName={tabName} userDetail={props.userData} /> : null}
        <Box>
          <TabPanel value={value} index={0}>
            <UserProfile userDetail={props.userData} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <UserPosts />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <UserGallery />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <UserTodo />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.userState.selectedUser,
  };
};
export default connect(mapStateToProps, null)(UserProfilePage);
