/* eslint-disable  */
import React from 'react';
import { Box, Button, DialogActions, DialogContent, DialogTitle, Divider, styled, Typography } from '@mui/material';

const CustomTypography = styled(Typography)(() => ({
    padding: '2px 0',
}));

const DialogContentSuccess = ({ formik, date, handleClose }) => {
    return (
        <Box>
            <DialogTitle>
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                    Appointment added successfully
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Typography sx={{ mt: 1 }} variant="body2">
                    {' '}
                    We are confirming the following appointment:
                </Typography>
                <Divider sx={{ mt: 1, mb: 2 }} />
                <CustomTypography variant="body2">
                    {' '}
                    <Box component="span" sx={{ fontWeight: 900 }}>
                        Appointment Number:
                    </Box>{' '}
                    {formik.values.appointmentNumber}
                </CustomTypography>
                <CustomTypography variant="body2">
                    <Box component="span" sx={{ fontWeight: 900 }}>
                        Name:
                    </Box>{' '}
                    {formik.values.name}
                </CustomTypography>
                <CustomTypography variant="body2">
                    {' '}
                    <Box component="span" sx={{ fontWeight: 900 }}>
                        Phone:
                    </Box>{' '}
                    {formik.values.phone}
                </CustomTypography>
                <CustomTypography variant="body2">
                    {' '}
                    <Box component="span" sx={{ fontWeight: 900 }}>
                        Email:
                    </Box>{' '}
                    {formik.values.email}
                </CustomTypography>
                <CustomTypography variant="body2">
                    {' '}
                    <Box component="span" sx={{ fontWeight: 900 }}>
                        Date:
                    </Box>{' '}
                    {date.format('MM-DD-YYYY')}
                </CustomTypography>
                <CustomTypography variant="body2" sx={{ mb: 1 }}>
                    {' '}
                    <Box component="span" sx={{ fontWeight: 900 }}>
                        Time:
                    </Box>{' '}
                    {formik.values.time}
                </CustomTypography>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <Typography sx={{ mb: 2 }} variant="body2">
                    An email {formik.values.emal} has been sent to you with your appointment details.
                </Typography>

                <Typography sx={{ mb: 2 }} variant="body2">
                    If you didn't receive the email, check your
                    <Box component="span" sx={{ fontWeight: 900 }}>
                        {' '}
                        SPAM folder.
                    </Box>
                </Typography>

                <Typography sx={{ mb: 2 }} variant="body2">
                    If you cannot keep your appointment, please cancel it and release the appointment slot for another
                    patient. You will make it possible for another patient to use it.
                </Typography>

                <Typography sx={{ mb: 2, fontWeight: 900 }}>
                    To cancel this appointment please write an email{' '}
                    <a href="mailto:sagemountainhealth@gmail.com"> sagemountainhealth@gmail.com</a> or call -
                    <Box>
                        {' '}
                        <a href="tel: +1406299-2944"> +1(406)299-2944</a>.
                    </Box>
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button sx={{ px: 6 }} variant="contained" onClick={handleClose}>
                    Ok
                </Button>
            </DialogActions>
        </Box>
    );
};

export default DialogContentSuccess;
