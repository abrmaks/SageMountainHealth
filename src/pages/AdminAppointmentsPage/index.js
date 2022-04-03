/* eslint-disable  */
import React, { useCallback, useRef, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useFormik } from 'formik';
import * as yup from 'yup';
// import DateAdapter from '@mui/lab/AdapterMoment';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
// import DatePicker from '@mui/lab/DatePicker';
import {
    Box,
    Button,
    Container,
    Dialog,
    Divider,
    List,
    ListItem,
    ListItemText,
    Paper,
    styled,
    Typography,
    useTheme,
} from '@mui/material';
import messages from '../../utils/messages';
import Loader from './loader';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './styles.css';
import { db } from '../../firebase-config';
import { timeSchedule } from '../../commons/timeSchedule';
import DialogContentSuccess from './DialogContentSuccess';
import DialogContentForm from './DialogContentForm';
import { theme } from '../../theme';
import DialogDeleteConfirm from './DialogDeleteConfirm';

function generateRandomNumber() {
    let min = 1000;
    let max = 9999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const CustomButton = styled(Button)(({ theme }) => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '15px 40px',
    lineHeight: 1.5,
    backgroundColor: '#3174ad',
    color: theme.palette.common.white,
    borderRadius: 28,

    '&:hover': {
        backgroundColor: '#294c8c',
        // borderColor: '#0062cc',
        boxShadow: 'none',
        textDecoration: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#294c8c',
        // borderColor: '#005cbf',
        textDecoration: 'none',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        textDecoration: 'none',
    },
}));

const DeleteButton = styled(Button)(({ theme }) => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '10px 30px',
    lineHeight: 1.5,
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,
    borderRadius: 24,

    '&:hover': {
        backgroundColor: theme.palette.common.darkGrey,
    },
}));

const AdminAppointmentPage = () => {
    const localizer = momentLocalizer(moment);
    // const theme = useTheme();

    const [date, setDate] = React.useState(moment());
    const [open, setOpen] = React.useState(false);
    const [openConfirm, setOpenConfirm] = React.useState(false);
    const [appointments, setAppointments] = useState([]);
    const [freeTime, setFreeTime] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [successUpload, setSuccessUpload] = React.useState(false);
    const [selectedAppointment, setSelectedAppointment] = React.useState({});
    const [disableButton, setDisableButton] = React.useState(false);

    const appointmentsCollectionRef = collection(db, 'appointments');

    const getAppointments = async () => {
        setLoading(true);
        const data = await getDocs(appointmentsCollectionRef);
        setAppointments(
            data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
                start: new Date(doc.data().start.seconds * 1000),
                end: new Date(doc.data().end.seconds * 1000),
            })),
        );
        setLoading(false);
    };

    const repackTime = () => {
        return timeSchedule.map((el) => {
            return {
                title: el.title,
                start: new Date(
                    parseInt(date.format('YYYY')),
                    parseInt(date.format('M')) - 1,
                    parseInt(date.format('D')),
                    el.timeHours.startHour,
                    el.timeHours.startMin,
                ),
                end: new Date(
                    parseInt(date.format('YYYY')),
                    parseInt(date.format('M')) - 1,
                    parseInt(date.format('D')),
                    el.timeHours.endHour,
                    el.timeHours.endMin,
                ),
            };
        });
    };

    const validationSchema = yup.object({
        name: yup
            .string('Enter your name')
            .min(2, 'Name should be of minimum 3 characters length')
            .max(50, 'Too Long!')
            .required('Name is required'),
        email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
        phone: yup.string('Enter your phone').required('Phone is required'),
        time: yup.string('Enter your time').required('Time is required'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            time: '',
            appointmentNumber: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setDisableButton(true);
            const getHours = (name) => {
                const time = formik.values.time;
                return timeSchedule.filter((val) => val.title === time)[0].timeHours[name];
            };

            const appointmentNumber = `SMH${generateRandomNumber()} - ${formik.values.phone.slice(-4)}`;
            await formik.setFieldValue('appointmentNumber', appointmentNumber);

            try {
                await addDoc(appointmentsCollectionRef, {
                    appointmentNumber,
                    title: 'Busy',
                    allDay: false,
                    start: new Date(
                        parseInt(date.format('YYYY')),
                        parseInt(date.format('M')) - 1,
                        parseInt(date.format('D')),
                        getHours('startHour'),
                        getHours('startMin'),
                    ),
                    end: new Date(
                        parseInt(date.format('YYYY')),
                        parseInt(date.format('M')) - 1,
                        parseInt(date.format('D')),
                        getHours('endHour'),
                        getHours('endMin'),
                    ),
                    email: formik.values.email,
                    name: formik.values.name,
                    phone: formik.values.phone,
                });
            } catch (error) {
                console.log(error);
            }

            setSuccessUpload(true);
            setDisableButton(false);
            getAppointments();
        },
    });

    React.useEffect(() => {
        getAppointments();
    }, []);

    React.useEffect(() => {
        if (date.day() === 0 || date.day() === 6) {
            setFreeTime([]);
            return;
        }
        const repackedTime = repackTime();
        const selectFreeTime = repackedTime.filter(
            (el) => !appointments.some((event) => event.start.getTime() === el.start.getTime()),
        );

        const filteredTime = selectFreeTime.filter((element) => element.start > new Date());

        setFreeTime(filteredTime);
    }, [date, appointments]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        formik.handleReset();
        setSuccessUpload(false);
        setDate(moment());
    };

    const handleCloseConfirm = () => {
        setOpenConfirm(false);
    };

    const selectDate = (value) => {
        const day = value.day();
        if (day === 0 || day === 6) {
            setFreeTime([]);
            return;
        }
        setDate(value);
    };

    const onSelectEvent = useCallback((calEvent) => {
        setSelectedAppointment(calEvent);
    }, []);

    const handleDeleteAppointment = async () => {
        try {
            const appDoc = doc(db, 'appointments', selectedAppointment.id);
            await deleteDoc(appDoc);
            getAppointments();
            setSelectedAppointment({});
            setOpenConfirm(false);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Box sx={{ margin: '40px 0px' }}>
            <Container sx={{ position: 'relative' }}>
                {/*{Object.keys(selectedAppointment).length > 0 && (*/}
                <Box sx={{ mb: 4 }}>
                    <Paper
                        sx={{
                            p: 1,
                            display: 'flex',
                            flexDirection: { md: 'row', sm: 'column', xs: 'column' },
                            background: theme.palette.common.lightGrey,
                            position: 'relative',
                        }}
                    >
                        <Box sx={{ width: { md: '35%', sm: '100%', xs: '100%' }, px: 1 }}>
                            <List component="nav" aria-label="mailbox folders" sx={{ pt: 0 }}>
                                <ListItem>
                                    <ListItemText
                                        primary={
                                            <>
                                                <strong>Appointment Number:</strong>{' '}
                                                {selectedAppointment?.appointmentNumber || 'select appointment'}
                                            </>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem divider>
                                    <ListItemText
                                        primary={
                                            <>
                                                <strong>Name:</strong>{' '}
                                                {selectedAppointment?.name || 'select appointment'}
                                            </>
                                        }
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary={
                                            <>
                                                <strong>Email:</strong>{' '}
                                                {selectedAppointment?.email || 'select appointment'}
                                            </>
                                        }
                                    />
                                </ListItem>
                                <Divider light />
                            </List>
                        </Box>
                        <Box sx={{ width: { md: '35%', sm: '100%', xs: '100%' }, px: 1 }}>
                            <List component="nav" aria-label="mailbox folders" sx={{ pt: 0 }}>
                                <ListItem>
                                    <ListItemText
                                        primary={
                                            <>
                                                <strong>Phone:</strong>{' '}
                                                {selectedAppointment?.phone || 'select appointment'}
                                            </>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem divider>
                                    <ListItemText
                                        primary={
                                            <>
                                                <strong>Date:</strong>{' '}
                                                {selectedAppointment?.start
                                                    ? moment(selectedAppointment?.start).format('MM/DD/YYYY')
                                                    : 'select appointment'}
                                            </>
                                        }
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary={
                                            <>
                                                <strong>Time:</strong>{' '}
                                                {selectedAppointment?.start
                                                    ? moment(selectedAppointment?.start).format('hh:mm')
                                                    : 'select appointment'}
                                            </>
                                        }
                                    />
                                </ListItem>
                                <Divider light />
                            </List>
                        </Box>

                        <Box
                            sx={{
                                width: { md: '30%', sm: '100%', xs: '100%' },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <DeleteButton
                                variant="contained"
                                // onClick={handleDeleteAppointment}
                                onClick={() => setOpenConfirm(true)}
                                sx={{ mb: 2 }}
                                disabled={!selectedAppointment?.appointmentNumber}
                            >
                                Delete the appointment
                            </DeleteButton>
                        </Box>
                    </Paper>
                </Box>
                {/*)}*/}

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 2,
                        mb: 2,
                    }}
                >
                    <CustomButton variant="contained" onClick={handleClickOpen} sx={{ mb: 2 }}>
                        Make a appointment
                    </CustomButton>
                </Box>

                <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth={true}>
                    {!successUpload && (
                        <DialogContentForm
                            formik={formik}
                            handleClose={handleClose}
                            date={date}
                            selectDate={selectDate}
                            freeTime={freeTime}
                            disableButton={disableButton}
                        />
                    )}
                    {successUpload && <DialogContentSuccess formik={formik} date={date} handleClose={handleClose} />}
                </Dialog>

                <DialogDeleteConfirm
                    openConfirm={openConfirm}
                    handleCloseConfirm={handleCloseConfirm}
                    handleDeleteAppointment={handleDeleteAppointment}
                />

                {loading && <Loader />}
                <Calendar
                    events={appointments}
                    localizer={localizer}
                    showMultiDayTimes
                    step={15}
                    defaultView={'work_week'}
                    views={['day', 'work_week', 'month']}
                    min={new Date(0, 0, 0, 9, 0)} // 8.00 AM
                    max={new Date(0, 0, 0, 16, 0)} // Max will be 6.00 PM!
                    style={{ height: '60vh', width: '100%', opacity: loading ? 0.3 : 1 }}
                    messages={messages()}
                    // onDoubleClickEvent={onDoubleClickEvent}
                    onSelectEvent={onSelectEvent}
                />
            </Container>
        </Box>
    );
};

export default AdminAppointmentPage;
