import React from 'react';
import { Box } from '@mui/material';
import MainBanner from '../../components/MainBanner';
import MiddleBlocks from '../../components/MiddleBlocks';
import AboutBlock from '../../components/AboutBlock';
// import VideoBlock from '../../components/VideoBlock';
import ProgramBlock from '../../components/ProgramBlock';

const HomePage = () => {
    return (
        <Box sx={{ mb: 10 }}>
            <MainBanner />
            <MiddleBlocks />
            <AboutBlock />
            {/*<VideoBlock />*/}
            <ProgramBlock />
        </Box>
    );
};

export default HomePage;
