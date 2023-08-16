import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  (theme) => ({
    root: {
      margin: "0rem 1rem 7.5rem 1rem",
      textAlign: "center",
      paddingTop: "10px",
    },
    container: {},
    signoutButton: {
      backgroundColor: "black",
    },
  }),
  { name: "DashBoard" }
);
