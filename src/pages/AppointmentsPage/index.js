/* eslint-disable  */
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { Box, Button, Container, Dialog, styled, useTheme } from '@mui/material';
import messages from '../../utils/messages';
import Loader from './loader';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './styles.css';
import { db } from '../../firebase-config';
import { timeSchedule } from '../../commons/timeSchedule';
import DialogContentSuccess from './DialogContentSuccess';
import DialogContentForm from './DialogContentForm';
import generateRandomNumber from '../../utils/generateRandomNumber';

const CustomButton = styled(Button)(({ theme }) => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 18,
    padding: '15px 50px',
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

const Appointment = () => {
    const localizer = momentLocalizer(moment);

    const [date, setDate] = React.useState(moment());
    const [open, setOpen] = React.useState(false);
    const [appointments, setAppointments] = useState([]);
    const [freeTime, setFreeTime] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [successUpload, setSuccessUpload] = React.useState(false);
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

    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const validationSchema = yup.object({
        name: yup
            .string('Enter your name')
            .min(3, 'Name should be of minimum 3 characters length')
            .max(50, 'Too Long!')
            .required('Name is required'),
        email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
        phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
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
                    time: formik.values.time,
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

    const selectDate = (value) => {
        const day = value.day();
        if (day === 0 || day === 6) {
            setFreeTime([]);
            return;
        }
        setDate(value);
    };

    return (
        <Box sx={{ margin: '60px 0px' }}>
            <Container sx={{ position: 'relative' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <CustomButton variant="contained" onClick={handleClickOpen} sx={{ mb: 8 }}>
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
                />
            </Container>
        </Box>
    );
};

export default Appointment;
