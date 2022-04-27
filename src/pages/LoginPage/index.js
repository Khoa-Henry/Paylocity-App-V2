import React from 'react';
import Grid from '@mui/material/Grid';
import useStyles from './useStyles';
import TextField from '@mui/material/TextField';
import BaseButton from '../../components/BaseButton';
import PageRoute from '../../app/PageRoute';

const LoginPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid 
                container
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={12} lg={7} >
                    <Grid container className={classes.container} justifyContent='center'>
                        <Grid item xs={12} md={6} p={1}>
                            <TextField
                                required
                                id="outlined-username"
                                label="Username"
                                name="username"
                                fullWidth
                                type="text"
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
                        <br />
                        <Grid item xs={12} md={6} p={1}>
                            <BaseButton buttonName="Login" routePath={PageRoute.HomePage} className={classes.loginButton} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default LoginPage;