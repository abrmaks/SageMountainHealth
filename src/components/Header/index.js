/* eslint-disable  */
import React from 'react';
import { AppBar, Box, Container, CssBaseline, styled, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import DrawerComponent from './Drawer';
import { manuItems } from '../../commons/menuItems';
import Logo from '../../assets/images/logo.png';

const CustomLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.primary.main,
    fontSize: '18px',
    '&:hover': {
        borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
}));

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isMobileSmall = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <AppBar
            position="static"
            elevation={4}
            sx={{
                background: theme.palette.common.white,
                py: 1,
                position: 'relative',
                zIndex: 99,
                // boxShadow: '3px 3px 8px 0px rgba(34, 60, 80, 0.2)',
            }}
        >
            <CssBaseline />
            <Toolbar>
                <Container>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Link to="/">
                            <img src={Logo} alt="Logo" width={isMobileSmall ? '80%' : '100%'} />
                        </Link>
                        {/*{isMobile && <DrawerComponent />}*/}

                        {isMobile ? (
                            <DrawerComponent />
                        ) : (
                            manuItems.map((item) => (
                                <CustomLink key={item.id} to={item.link}>
                                    {item.title}
                                </CustomLink>
                            ))
                        )}
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
