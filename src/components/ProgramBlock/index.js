import React from 'react';
import { Container, Typography, useTheme } from '@mui/material';

const ProgramBlock = () => {
    const theme = useTheme();
    return (
        <Container sx={{ my: { md: 14, sm: 10 } }}>
            <Typography variant="h3" sx={{ mb: 4 }} color={theme.palette.primary.main}>
                Addiciton Treatment Program For Drugs And Alcohol
            </Typography>
            <Typography
                sx={{
                    fontSize: '20px',
                    lineHeight: '1.7',
                    fontWeight: 300,
                }}
            >
                Addiction is a disease. It’s chronic, which puts it on par with asthma or diabetes. You wouldn’t expect
                someone with these conditions to heal themselves. Instead, you’d most certainly advise them to seek
                medical treatment. The same is true for someone dealing with drug or alcohol addiction. Substance abuse
                treatment helps you overcome the condition of addiction. There’s no cure, but the disease responds well
                to therapy. You can return to a life without the need for drugs or alcohol.
            </Typography>
        </Container>
    );
};

export default ProgramBlock;
