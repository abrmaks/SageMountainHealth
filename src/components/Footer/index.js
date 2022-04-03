import React from 'react';
import { Box, Container, useTheme, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import { manuItems } from '../../commons/menuItems';
import { contactInfo } from '../../commons/contactInfo';
import { theme as themeImp } from '../../theme';

const CustomLink = styled(Link)(() => ({
    textDecoration: 'none',
    color: 'white',
    padding: '5px 0',
    // fontSize: '20px',
    // marginLeft: theme.spacing(20),
    '&:hover': {
        color: themeImp.palette.secondary.main,
        // borderBottom: '1px solid white',
    },
}));

const Row = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    margin: '8px 0',
    color: themeImp.palette.common.white,
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
        textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
        justifyContent: 'left',
        textAlign: 'left',
    },
}));

function Footer() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.primary.main,
                py: 4,
            }}
        >
            <Container>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, lg: 2 }}>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{
                            color: themeImp.palette.common.white,
                            textAlign: { lg: 'left', md: 'left', sm: 'center', xs: 'center' },
                        }}
                    >
                        <Typography>© 2022 Sage Mountain Health, LLC. All rights reserved.</Typography>
                        {/*<Typography>Medical Linguistics Services</Typography>*/}
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: { md: 'left', sm: 'center', xs: 'center' },
                        }}
                    >
                        {manuItems.map((item) => (
                            <CustomLink key={item.id} to={item.link}>
                                {item.title}
                            </CustomLink>
                        ))}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Row>
                            {/*<img src={phoneIc} alt="" width="25px" height="25px" />*/}
                            <Typography sx={{ ml: 1 }}>{contactInfo.phone}</Typography>
                        </Row>
                        <Row>
                            {/*<img src={emailIc} alt="" width="25px" height="25px" />*/}
                            <Typography sx={{ ml: 1 }}>{contactInfo.email}</Typography>
                        </Row>
                        <Row>
                            {/*<img src={adressIc} alt="" width="25px" height="25px" />*/}
                            <Typography sx={{ ml: 1 }}>{contactInfo.address}</Typography>
                        </Row>
                        {/*<Row>*/}
                        {/*    <Typography sx={{ ml: 1 }}>{contactInfo.website}</Typography>*/}
                        {/*</Row>*/}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;
