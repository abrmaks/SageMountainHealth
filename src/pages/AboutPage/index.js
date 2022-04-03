import React from 'react';
import { Box, Container, styled, Typography } from '@mui/material';
import AboutBanner from '../../assets/images/AboutBanner.jpg';
import VideoBlock from '../../components/VideoBlock';

const Bold = styled('span')(() => ({
    fontWeight: 900,
}));

const AboutPage = () => {
    return (
        <>
            <Box
                sx={{
                    position: 'relative',
                }}
            >
                <img src={AboutBanner} alt="" style={{ width: '100%' }} />
            </Box>
            <Container sx={{ my: 6 }}>
                <Typography variant="h3" sx={{ mb: 8 }}>
                    SMH Description
                </Typography>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    SOUND FAMILIAR?
                </Typography>
                <Typography sx={{ mb: 6 }}>
                    How often have you heard this statement from a patient: “Help Me, I’m In Pain.!” But who hears you
                    cry for help? Constant fatigue becomes routine; but be aware, this type of behavior or other forms
                    of illness which can profoundly affect your professional and personal life.
                </Typography>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    WHY PEOPLE WITH SUBSTANCE USE DISORDER (SUD) NEED HELP?
                </Typography>
                <Typography sx={{ mb: 6 }}>
                    Pride may play a significant role in a reluctance to admit the need for help. The closest to you –
                    family members, colleagues, and staff – become confused as to how to deal with the situation and
                    their bewilderment may lead to a “Conspiracy of Silence,” threatening the well-being of the
                    depressed or addicted person’s life.
                </Typography>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    HOW DOES THE PROCESS BEGIN?
                </Typography>
                <Typography sx={{ mb: 6 }}>
                    Response begins immediately once a referral is received. The referral can be a self-referral or from
                    a concerned family member, significant other, staff person, colleague and/or administrator. The next
                    step is to collect pertinent information to effectively evaluate the situation and once completed, a
                    decision is made on how best to proceed. Services provided by Sage Mountain Health and Dr. Joutovsky
                    include:
                    <ul>
                        <li>
                            <Bold>INTERVENTION</Bold>: Sage Mountain Health facilitates a group of concerned persons to
                            confront the referral and to identify appropriate resources for evaluation of needs.
                        </li>
                        <li>
                            <Bold>REFERRAL</Bold>: To a treatment program (rehabilitation center) known to be skilled in
                            working with the distressed individual.
                        </li>
                        <li>
                            <Bold>CONTINUING CARE</Bold>: Sage Mountain Health assists with guided reentry back into the
                            workplace and/or community, offers education for family members and assists with relapse
                            prevention.
                        </li>
                        <li>
                            <Bold>MONITORING</Bold>: Sage Mountain Health keeps records of random toxicology testing to
                            verify the patient’s continued recovery and serves as an accountability partner if needed.
                        </li>
                    </ul>
                </Typography>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    WHAT ARE THE WARNING SIGNS?
                </Typography>
                <Typography sx={{ mb: 6 }}>
                    If you can answer yes to one or more of the following questions, you may need our help: <br />
                    <Box
                        sx={{
                            mt: 2,
                            ml: 3,
                        }}
                    >
                        1. Are you experiencing problems coping with substance use disorder (SUD)?
                        <br />
                        2. Do you become easily depressed, angered or abusive?
                        <br />
                        3. Do you consume more than a moderate amount of alcohol or is your drinking considered
                        <br />
                        “out of control?”
                        <br />
                        4. Do you buy drugs on the street or try to get controlled medication from your doctor?
                        <br />
                        5. Are you experiencing any sexual problems: impotency or affairs?
                        <br />
                        6. Do you find yourself slowing down or overtired?
                        <br />
                        7. Do you constantly place a precedence for work over personal and/or family needs?
                        <br />
                        8. Are you experiencing financial or legal problems: malpractice suit, divorce, DUI?
                        <br />
                    </Box>
                </Typography>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    WHEN - IS UP TO YOU!!
                </Typography>
                <Typography sx={{ mb: 6 }}>
                    If you feel that you or a colleague is in need of help, do not be part of the continuing problem –
                    BE PART OF THE SOLUTION by calling for help. The number is 406-299-2944. All information is received
                    and held in the strictest confidence. <Bold>BREAK THE CONSPIRACY OF SILENCE!</Bold>
                    <br />
                    <br />
                    Dr. Joutovsky has an ongoing commitment to provide educational programs and workshops to promote
                    wellness for Montana residents.
                    <br />
                    <br />
                    If you would like more information, please call Sage Mountain Health at 406-299-2944.
                </Typography>
                <VideoBlock />
            </Container>
        </>
    );
};

export default AboutPage;
