/* eslint-disable  */
import React from 'react';
import { Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledButton = styled(Button)(({ theme }) => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '10px 20px',
    // border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: 24,
    '&:hover': {
        backgroundColor: '#294c8c',
        // borderColor: '#0062cc',
        boxShadow: 'none',
        textDecoration: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#294c8c',
        // borderColor: '#005cbf',
        textDecoration: 'none',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        textDecoration: 'none',
    },
}));

// const A = styled('a')(() => ({
//     textDecoration: 'none',
//     '&:hover': {
//         textDecoration: 'none',
//     },
// }));

const CustomButton = ({ title, to }) => {
    return (
        <>
            {/*<StyledButton component={Link} to={{ pathname: to }} target="_blank">*/}
            <StyledButton component={Link} to={{ pathname: to }}>
                {title}
            </StyledButton>
            {/*<A href={to} target="_blank">*/}
            {/*    <StyledButton>{title}</StyledButton>*/}
            {/*</A>*/}
        </>
    );
};

export default CustomButton;
