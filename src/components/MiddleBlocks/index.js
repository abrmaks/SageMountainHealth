import React from 'react';
import { Box, Card, CardContent, Container, styled, Typography, useTheme } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import CustomButton from '../CustomButtom';

const CustomCard = styled(Card)(({ theme }) => ({
    minWidth: 275,
    width: '30%',
    borderRadius: 16,
    padding: 14,

    [theme.breakpoints.down('md')]: {
        width: '100%',
        margin: '10px 0px',
    },
}));

const CustomCardContent = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
        alignItems: 'center',
    },
}));

const MiddleBlocks = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                marginTop: { md: '-150px', sm: '0px' },
                zIndex: 999,
                position: 'relative',
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { md: 'row', sm: 'column', xs: 'column' },
                        justifyContent: 'space-around',
                    }}
                >
                    <CustomCard elevation={3}>
                        <CustomCardContent>
                            <EventAvailableIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />
                            <Typography
                                variant="body2"
                                component="div"
                                color={theme.palette.common.darkGrey}
                                sx={{ mt: 2 }}
                            >
                                24 Hours Service
                            </Typography>
                            <Typography variant="h5" sx={{ mb: 1.5 }} color={theme.palette.primary.main}>
                                Online Appoinment
                            </Typography>
                            <Typography variant="body2">
                                Make an appointment at a convenient day and time for you
                            </Typography>
                            <Box sx={{ mt: 3 }}>
                                <CustomButton title="Make a appointment" to="/appointment" />
                            </Box>
                        </CustomCardContent>
                    </CustomCard>
                    <CustomCard elevation={3}>
                        <CustomCardContent>
                            <ScheduleIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />

                            <Typography
                                variant="body2"
                                component="div"
                                color={theme.palette.common.darkGrey}
                                sx={{ mt: 2 }}
                            >
                                Timing schedule
                            </Typography>
                            <Typography variant="h5" sx={{ mb: 1.5 }} color={theme.palette.primary.main}>
                                Working Hours
                            </Typography>
                            <Typography variant="body1">
                                Monday-Friday <br />
                                <Box sx={{ fontWeight: 900 }}>9:00AM - 4:00PM</Box>
                                <br />
                                And for concierge service 24/7
                            </Typography>
                        </CustomCardContent>
                    </CustomCard>
                    <CustomCard elevation={3}>
                        <CustomCardContent>
                            <PhoneInTalkIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />

                            <Typography
                                variant="body2"
                                component="div"
                                color={theme.palette.common.darkGrey}
                                sx={{ mt: 2 }}
                            >
                                Emegency Cases
                            </Typography>

                            <a href="tel:+1516808-0610" style={{ textDecoration: 'none' }}>
                                <Typography variant="h5" sx={{ mb: 1.5 }} color={theme.palette.primary.main}>
                                    +1(516)808-0610
                                </Typography>
                            </a>

                            <Typography variant="body2">
                                In case of emergency please visit Emergency Room or call
                            </Typography>
                            <a href="tel:911" style={{ textDecoration: 'none' }}>
                                <Typography
                                    variant="h5"
                                    sx={{ mb: 1.5, fontWeight: 900, mt: 2 }}
                                    color={theme.palette.primary.main}
                                >
                                    911
                                </Typography>
                            </a>
                        </CustomCardContent>
                    </CustomCard>
                </Box>
            </Container>
        </Box>
    );
};

export default MiddleBlocks;
