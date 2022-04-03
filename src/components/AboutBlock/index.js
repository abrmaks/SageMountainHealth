import React from 'react';
import { Box, Container, styled, Typography, useTheme } from '@mui/material';
import MikePhoto from '../../assets/images/joutovsky.png';

const Img = styled('img')(() => ({
    borderRadius: '24px',
    boxShadow: '3px 3px 8px 0px rgba(34, 60, 80, 0.2)',
}));

const Text = styled(Typography)(() => ({
    fontSize: '20px',
    lineHeight: '1.7',
    fontWeight: 300,
}));

const AboutBlock = () => {
    const theme = useTheme();
    return (
        <Container sx={{ my: { md: 18, sm: 10 } }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { md: 'row', sm: 'column', xs: 'column' },
                    flex: 1,
                }}
            >
                <Box
                    sx={{
                        width: { md: '40%', sm: '100%' },
                        pr: { md: 5, sm: 0 },
                        pt: 2,
                    }}
                >
                    <Img src={MikePhoto} alt="Mikhail Joutovsky" width="100%" />
                </Box>
                <Box
                    sx={{
                        width: { md: '60%', sm: '100%' },
                        pl: { md: 3, sm: 0 },
                        pt: 2,
                    }}
                >
                    <Typography variant="h3" sx={{ mb: 2 }} color={theme.palette.primary.main}>
                        Dr. Mikhail Joutovsky, D.O.
                    </Typography>
                    <Text color={theme.palette.common.darkGrey}>
                        In 2019 Dr. Joutovsky after retiring from surgical service he found his future calling and was
                        accepted into the one of the best fellowships in the nation at Medical College of University of
                        Florida as addiction medicine fellow, where he rotated at hospitals, rehabs and clinics and
                        graduated in 2020. Soon after he took a position of Medical Director of addiction services at
                        MPAP ( Montana Professional Assistance Program) where he worked with health care workers who had
                        an addiction, giving them consultations, helping in getting treatment and advocating for them in
                        front of the Boards. Now he opened his private practice having accents on interventions,
                        sobriety coaching, consulting HealthCare professionals and Medically assisted treatment. He
                        still participates at Caduseus meanings for healthcare workers here in Butte and feels very
                        lucky to be able to provide service as addiction medicine specialist.
                    </Text>
                </Box>
            </Box>
        </Container>
    );
};

export default AboutBlock;
