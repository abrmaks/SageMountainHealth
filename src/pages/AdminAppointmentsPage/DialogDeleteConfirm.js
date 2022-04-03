/* eslint-disable  */
import React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, useTheme } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const DialogDeleteConfirm = ({ openConfirm, handleCloseConfirm, handleDeleteAppointment }) => {
    const theme = useTheme();
    return (
        <div>
            <Dialog open={openConfirm} onClose={handleCloseConfirm} maxWidth="sm" fullWidth={true}>
                <Box>
                    <DialogContent>
                        <Box sx={{ textAlign: 'center', mt: 2 }}>
                            <DeleteForeverIcon sx={{ fontSize: 80, color: theme.palette.secondary.dark }} />
                        </Box>

                        <Typography sx={{ mt: 2, textAlign: 'center' }} variant="h6">
                            Are you sure to delete this appointment?
                        </Typography>
                    </DialogContent>
                    <DialogActions sx={{ mt: 2 }}>
                        <Button variant="outlined" onClick={handleCloseConfirm} sx={{ px: 4 }}>
                            No
                        </Button>
                        <Button variant="contained" onClick={handleDeleteAppointment} sx={{ px: 6 }}>
                            Yes
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </div>
    );
};

export default DialogDeleteConfirm;
