import React from 'react';
import { Box, Container } from '@mui/material';
import CertificateMed1 from '../../assets/images/certifacateMed.jpg';
import CertificateMed2 from '../../assets/images/certifacateMed2.jpg';

const CertificatesPage = () => {
    return (
        <div>
            <Container sx={{ my: 10 }}>
                {/*<Typography variant="h3" sx={{ mb: 4 }}>*/}
                {/*    Certificates*/}
                {/*</Typography>*/}

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Box sx={{ my: 2, margin: '0 auto' }}>
                        <img src={CertificateMed1} alt="" width="100%" />
                    </Box>
                    <Box sx={{ my: 2, margin: '0 auto' }}>
                        <img src={CertificateMed2} alt="" width="100%" />
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default CertificatesPage;
