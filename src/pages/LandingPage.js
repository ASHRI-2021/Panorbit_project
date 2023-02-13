import React from "react";
import classes from "./LandingPage.module.css";
import Userslist from "../components/Userslist";
import { Box } from "@mui/material";

function LandingPage() {
  return (
    <Box className={classes.bgImage} >
        <Userslist />
    </Box>
  );
}

export default LandingPage;
