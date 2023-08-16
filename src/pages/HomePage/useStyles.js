import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  (theme) => ({
    container: {
      textAlign: "center",
      width: "100vw",
      height: "100vh",
    },
    logo: {
      height: "200px",
      width: "auto",
    },
  }),
  { name: "HomePage" }
);
