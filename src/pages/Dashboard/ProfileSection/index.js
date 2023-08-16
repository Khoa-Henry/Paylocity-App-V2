import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import useStyles from "./useStyles";
import Grid from "@material-ui/core/Grid";

const ProfileSection = () => {
  const classes = useStyles();

  return (
    <Grid container item>
      <Grid container item xs={12}>
        <Grid item xs="auto">
          <Avatar alt="avatar" sx={{ width: 75, height: 75 }} />
        </Grid>
        <Grid container item xs style={{ paddingLeft: "10px" }}>
          <Grid container item xs={12}>
            name
          </Grid>
          <Grid container item xs={12}>
            position
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ProfileSection;
