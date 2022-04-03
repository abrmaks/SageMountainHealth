import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loader = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: 999,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                }}
            >
                <CircularProgress size={100} />
            </Box>
        </Box>
    );
};

export default Loader;
