import React, { useState } from "react";
import useStyles from "./useStyles";
import { Grid } from "@mui/material";
import BaseButton from "../../components/BaseButton";
import PageRoute from "../../app/PageRoute";
import paylocityLogo from "../../app/pictures/paylocitylogo.png";

const HomePage = () => {
  const classes = useStyles();
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid item xs={12}>
        <img src={paylocityLogo} alt="paylocitylogo" className={classes.logo} />
      </Grid>

      <Grid item xs={6}>
        <BaseButton routePath={PageRoute.LoginPage} buttonName="continue" />
      </Grid>
    </Grid>
  );
};
export default HomePage;
