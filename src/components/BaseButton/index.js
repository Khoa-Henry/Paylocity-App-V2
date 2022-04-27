import React from 'react';
import {Button} from '@mui/material';
import {Link} from 'react-router-dom';
import { styled } from '@mui/material/styles';


const CoreButton = styled(Button)(({ theme }) => ({
    color: 'black',
    backgroundColor: 'white',
    fontSize: '16px',
    ":hover":{
        backgroundColor: '#FDB44E'
    }

}))

const BaseButton = (props) => {
    return(
        <Link to={props.routePath}>
            <CoreButton fullWidth variant="outline" onClick={props.onClick}>{props.buttonName}</CoreButton>
        </Link>
    )
};

export default BaseButton;
