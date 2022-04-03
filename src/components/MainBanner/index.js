import React from 'react';
import { Box, Button, Container, styled, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import Banner from '../../assets/images/Banner.png';

// import CustomButton from "../CustomButtom";
// import CustomButton from '../CustomButtom';

const CustomTitle = styled(Typography)(({ theme }) => ({
    fontSize: '50px',
    fontWeight: 600,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
    },
}));

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
    [theme.breakpoints.down('sm')]: {
        fontSize: 12,
    },
}));

const MainBanner = () => {
    const theme = useTheme();

    return (
        <div>
            <Box
                sx={{
                    position: 'relative',
                }}
            >
                <img src={Banner} alt="" style={{ width: '100%', minHeight: '200px' }} />
            </Box>
            <Container>
                <Box
                    sx={{
                        position: 'absolute',
                        top: { lg: 170, md: 150, sm: 150, xs: 100 },
                        maxWidth: { lg: '600px', md: '600px', sm: '300px', xs: '300px' },
                    }}
                >
                    <CustomTitle>Sage Mountain Health</CustomTitle>
                    <Typography
                        sx={{
                            color: theme.palette.common.grey,
                            fontSize: { md: '18px', sm: '12px' },
                            display: { md: 'block', sm: 'block', xs: 'none' },
                        }}
                    >
                        Some people think they have no way out and there is no way to get back on track. We are here to
                        tell you that there is a way out of the darkness. It takes strength and courage to make a call
                        for help. We will meet you where you are.
                        <Box component="div" sx={{ mt: 2, fontWeight: 600 }}>
                            Dr. Joutovsky
                        </Box>
                    </Typography>

                    <Box sx={{ mt: 3 }}>
                        <StyledButton component={Link} to={{ pathname: '/appointment' }}>
                            Make a appointment
                        </StyledButton>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default MainBanner;
