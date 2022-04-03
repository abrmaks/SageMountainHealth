/* eslint-disable  */
import React from 'react';
import {
    Box,
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterMoment';
import DatePicker from '@mui/lab/DatePicker';
import moment from 'moment';
import InputMask from 'react-input-mask';

const DialogContentForm = ({ formik, handleClose, date, selectDate, freeTime, disableButton }) => {
    return (
        <form onSubmit={formik.handleSubmit}>
            <DialogTitle>Make a appointment</DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    onBlur={formik.handleBlur}
                    sx={{ my: 1 }}
                />
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    onBlur={formik.handleBlur}
                    sx={{ my: 1 }}
                />
                {/*<TextField*/}
                {/*    fullWidth*/}
                {/*    id="phone"*/}
                {/*    name="phone"*/}
                {/*    label="Phone"*/}
                {/*    value={formik.values.phone}*/}
                {/*    onChange={formik.handleChange}*/}
                {/*    error={formik.touched.phone && Boolean(formik.errors.phone)}*/}
                {/*    helperText={formik.touched.phone && formik.errors.phone}*/}
                {/*    onBlur={formik.handleBlur}*/}
                {/*    sx={{ my: 1 }}*/}
                {/*>*/}
                {/*    <InputMask mask="(0)999 999 99 99" maskChar=" " />*/}
                {/*</TextField>*/}
                <InputMask
                    mask="999-999-9999"
                    disabled={false}
                    maskChar={'_'}
                    required
                    disableUnderline
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    {() => (
                        <TextField
                            fullWidth
                            id="phone"
                            name="phone"
                            label="Phone"
                            sx={{ my: 1 }}
                            helperText={formik.touched.phone && formik.errors.phone}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                        />
                    )}
                </InputMask>
                <LocalizationProvider dateAdapter={DateAdapter}>
                    <Stack spacing={3} sx={{ my: 1 }}>
                        <DatePicker
                            label="Select date"
                            value={date}
                            onChange={(newValue) => {
                                selectDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            // minDate={new Date('2022-03-14')}
                            minDate={moment(new Date().getDate(), 'h:mm a')}
                            // minDate={moment().format('MM/DD/YYYY')}
                            // dateFormat="MM/DD/YYYY"
                        />
                    </Stack>
                </LocalizationProvider>
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel id="demo-simple-select-label">Time</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={time}
                        label="Time"
                        // onChange={handleChange}
                        name="time"
                        onChange={formik.handleChange}
                        error={formik.touched.time && Boolean(formik.errors.time)}
                        onBlur={formik.handleBlur}
                        value={formik.values.time || ''}
                        defaultValue=""
                    >
                        {freeTime.length !== 0 ? (
                            freeTime.map((value) => (
                                <MenuItem value={value.title} key={value.title}>
                                    {value.title}
                                </MenuItem>
                            ))
                        ) : (
                            <MenuItem value="">not available</MenuItem>
                        )}
                    </Select>
                </FormControl>
                {formik.errors.time && formik.touched.time && (
                    <Typography variant="caption" gutterBottom sx={{ ml: 2, mt: 0.5, color: 'red' }}>
                        {formik.errors.time}
                    </Typography>
                )}
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" sx={{ px: 4 }} onClick={handleClose}>
                    Cancel
                </Button>
                <Button
                    data-testid="submitButton"
                    type="submit"
                    sx={{ px: 6 }}
                    variant="contained"
                    disabled={disableButton || false}
                >
                    Make
                </Button>
            </DialogActions>
        </form>
    );
};

export default DialogContentForm;
