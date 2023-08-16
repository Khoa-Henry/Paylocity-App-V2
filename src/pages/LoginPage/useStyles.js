import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  (theme) => ({
    root: {
      margin: "6.375rem 1rem 7.5rem 1rem",
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        marginTop: "40%",
      },
    },
    container: {
      border: "3px solid black",
      padding: "25px",
      borderRadius: "25px",
    },
    loginButton: {
      backgroundColor: "black",
    },
    logo: {
      height: "200px",
      width: "auto",
    },
  }),
  { name: "Login" }
);
