import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
    (theme) => ({
        root: {
            margin: '6.375rem 1rem 7.5rem 1rem',
            [theme.breakpoints.down('xs')]: {
                marginTop: '50%',
            },
        },
        container: {
            border: '3px solid black',
            padding: '25px',
            borderRadius: '25px',
        },
        loginButton: {
            backgroundColor: 'black',
            
        }
    }),
    { name: 'Login' },
);
