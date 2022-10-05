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

const ProfileSection = () => {
  const classes = useStyles();

  return (
    <List
      sx={{
        width: "100%",
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="avatar" sx={{ width: 75, height: 75 }} />
        </ListItemAvatar>
        <div className={classes.text}>
          <ListItemText primary="Name" secondary="Position" />
        </div>
      </ListItem>
    </List>
  );
};
export default ProfileSection;
