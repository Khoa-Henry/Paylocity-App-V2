import React from 'react';
import {Button} from '@mui/material';
import {Link} from 'react-router-dom';
import { styled } from '@mui/material/styles';


const CoreButton = styled(Button)(({ theme }) => ({
    color: 'black',
    backgroundColor: 'white',
    fontSize: '16px'

}))

const BaseButton = (props) => {
    return(
        <Link to={props.routePath}>
            <CoreButton variant="outline">{props.buttonName}</CoreButton>
        </Link>
    )
};

export default BaseButton;
