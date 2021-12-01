import React from 'react';
import Grid from '@mui/material/Grid';
import useStyles from './useStyles';
import { Formik, Form } from 'formik';
import TextField from '@mui/material/TextField';

const LoginPage = () => {
    const classes = useStyles();

    return (
        < >
            <Grid 
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                        <Grid item xs={3} >
                            <TextField
                                required
                                id="outlined-username"
                                label="Username"
                                fullWidth
                                style={{paddingBottom:'10px'}}
                            />
                            <TextField
                                required
                                label="Password"
                                id="outlined-password-input"
                                type="password"
                                fullWidth
                            />
                        </Grid>

            </Grid>
        </>
    )
}
export default LoginPage;