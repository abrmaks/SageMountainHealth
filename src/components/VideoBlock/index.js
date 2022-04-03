/* eslint-disable  */
import React from 'react';
import { Container, Typography, useMediaQuery, useTheme } from '@mui/material';

const VideoBlock = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Container sx={{ mt: 12 }}>
            <Typography
                variant="h2"
                sx={{ textAlign: 'center', fontWeight: '500', mb: { md: 4, sm: 2 } }}
                color={theme.palette.primary.main}
            >
                Patient Stories
            </Typography>
            <iframe
                src="https://player.vimeo.com/video/352443529?h=d2c0ba3dc5"
                width="100%"
                height={isMobile ? '400px' : '620px'}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
            ></iframe>
        </Container>
    );
};

export default VideoBlock;
