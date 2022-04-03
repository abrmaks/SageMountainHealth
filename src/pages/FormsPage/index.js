/* eslint-disable  */
import React from 'react';
import { Container, Box, Typography, Button, Divider } from '@mui/material';
import DemographicFinancialAgreement from '../../assets/images/Demographic_Financial_Agreement.jpg';
import DemographicFinancialAgreementFile from '../../assets/images/Demographic-Financial-Agreement.pdf';
import Information_AuthorizationFile from '../../assets/images/Information_Authorization_and_Consent_to_Treatment.pdf';
import Authorization1 from '../../assets/images/Authorization1.jpg';
import Authorization2 from '../../assets/images/Authorization2.jpg';
import Authorization3 from '../../assets/images/Authorization3.jpg';
import Authorization4 from '../../assets/images/Authorization4.jpg';
import Patient_InfoFile from '../../assets/images/Patient_Info.pdf';
import Patient_Info1 from '../../assets/images/Patient_Info1.jpg';
import Patient_Info2 from '../../assets/images/Patient_Info2.jpg';
import PledgeFile from '../../assets/images/Pledge.pdf';
import Pledge from '../../assets/images/Pledge.jpg';

const FormsPage = () => {
    return (
        <Container sx={{ my: 8 }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                    Demographic Financial Agreement
                </Typography>
                <Box sx={{ margin: '0 auto' }}>
                    <img src={DemographicFinancialAgreement} alt="" width="100%" />
                </Box>
                <Box sx={{ margin: '0 auto' }}>
                    <Button variant="contained">
                        <a
                            href={DemographicFinancialAgreementFile}
                            target="_blank"
                            style={{ color: '#fff', textDecoration: 'none' }}
                        >
                            Download
                        </a>
                    </Button>
                </Box>
                <Divider sx={{ my: 8 }} />
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                    Information, Authorization and Consent to Treatment
                </Typography>
                <Box sx={{ margin: '0 auto' }}>
                    <img src={Authorization1} alt="" width="100%" />
                </Box>
                <Box sx={{ margin: '0 auto' }}>
                    <img src={Authorization2} alt="" width="100%" />
                </Box>
                <Box sx={{ margin: '0 auto' }}>
                    <img src={Authorization3} alt="" width="100%" />
                </Box>
                <Box sx={{ margin: '0 auto' }}>
                    <img src={Authorization4} alt="" width="100%" />
                </Box>
                <Box sx={{ margin: '0 auto' }}>
                    <Button variant="contained">
                        <a
                            href={Information_AuthorizationFile}
                            target="_blank"
                            style={{ color: '#fff', textDecoration: 'none' }}
                        >
                            Download
                        </a>
                    </Button>
                </Box>
                <Divider sx={{ my: 8 }} />
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                    Patient Info
                </Typography>
                <Box sx={{ margin: '0 auto' }}>
                    <img src={Patient_Info1} alt="" width="100%" />
                </Box>
                <Box sx={{ margin: '0 auto' }}>
                    <img src={Patient_Info2} alt="" width="100%" />
                </Box>
                <Box sx={{ margin: '0 auto' }}>
                    <Button variant="contained">
                        <a href={Patient_InfoFile} target="_blank" style={{ color: '#fff', textDecoration: 'none' }}>
                            Download
                        </a>
                    </Button>
                </Box>
                <Divider sx={{ my: 8 }} />
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                    Pledge of Treatment Agreement
                </Typography>
                <Box sx={{ margin: '0 auto' }}>
                    <img src={Pledge} alt="" width="100%" />
                </Box>
                <Box sx={{ margin: '0 auto' }}>
                    <Button variant="contained">
                        <a href={PledgeFile} target="_blank" style={{ color: '#fff', textDecoration: 'none' }}>
                            Download
                        </a>
                    </Button>
                </Box>
                <Divider sx={{ my: 8 }} />
            </Box>
        </Container>
    );
};

export default FormsPage;
