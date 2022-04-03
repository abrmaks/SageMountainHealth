/* eslint-disable */
import React, { useState, Fragment } from 'react';
import { Divider, Drawer, IconButton, List, ListItem, ListItemText, useTheme, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import { manuItems } from '../../commons/menuItems.js';
import Logo from '../../assets/images/logo.png';

// const StyledListItemText = styled(ListItemText)(({ theme }) => ({
//     pl: 1,
//     color: theme.palette.primary.main,
//     textDecoration: 'none',
// }));

function DrawerComponent() {
    // const classes = useStyles();
    const theme = useTheme();
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                PaperProps={{
                    sx: { width: '48%' },
                }}
            >
                <Box sx={{ mt: 4, ml: 2, mb: 4 }}>
                    <Link to="/">
                        <img src={Logo} alt="clinlex" width="150px" />
                    </Link>
                </Box>
                <List>
                    {manuItems.map((item) => (
                        <Fragment key={item.id}>
                            <ListItem onClick={() => setOpenDrawer(false)}>
                                <ListItemText sx={{ pl: 1 }}>
                                    <Link
                                        to={item.link}
                                        style={{ color: theme.palette.primary.main, textDecoration: 'none' }}
                                    >
                                        {item.title}
                                    </Link>
                                </ListItemText>
                            </ListItem>
                            <Divider />
                        </Fragment>
                    ))}
                </List>
            </Drawer>
            <IconButton
                onClick={() => setOpenDrawer(!openDrawer)}
                sx={{
                    width: 50,
                    height: 50,
                }}
            >
                <MenuIcon
                    sx={{
                        width: 20,
                        height: 20,
                    }}
                />
            </IconButton>
        </>
    );
}

export default DrawerComponent;
