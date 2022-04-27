import React from 'react'
import Grid from '@mui/material/Grid'
import useStyles from './useStyles'
import TextField from '@mui/material/TextField'
import BaseButton from '../../components/BaseButton'
import PageRoute from '../../app/PageRoute'
import paylocityLogo from '../../app/pictures/paylocitylogo.png'

const SignupPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <img
            src={paylocityLogo}
            alt="paylocitylogo"
            className={classes.logo}
          />
        </Grid>
        <Grid item xs={12} lg={7}>
          <Grid container className={classes.container} justifyContent="center">
            <Grid item xs={12} md={6} p={1}>
              <TextField
                required
                id="outlined-firstName"
                label="First Name"
                name="firstName"
                fullWidth
                type="text"
              />
            </Grid>
            <Grid item xs={12} md={6} p={1}>
              <TextField
                required
                label="Last Name"
                name="lastName"
                id="outlined-lastName-input"
                type="lastName"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} p={1}>
              <TextField
                required
                label="Username"
                name="username"
                id="outlined-username-input"
                type="username"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} p={1}>
              <TextField
                required
                label="Password"
                name="password"
                id="outlined-password-input"
                type="password"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} p={1}>
              <TextField
                required
                label="Email"
                name="email"
                id="outlined-email-input"
                type="email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} p={1}>
              <TextField
                required
                label="Date Of Birth"
                name="dateOfBirth"
                id="outlined-dateOfBirth-input"
                type="dateOfBirth"
                fullWidth
              />
            </Grid>
            <br />
            <Grid item xs={12} md={6} p={1}>
              <BaseButton
                buttonName="Sign Up"
                routePath={PageRoute.HomePage}
                className={classes.loginButton}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
export default SignupPage
