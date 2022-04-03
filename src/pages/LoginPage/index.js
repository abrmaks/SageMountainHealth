/* eslint-disable */
import React from 'react';
import { Box, Button, Container, TextField, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const [data, setData] = React.useState({});
    const [error, setError] = React.useState('');

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(data);
        console.log(process.env.REACT_APP_USER);

        if (process.env.REACT_APP_USER === data.login && process.env.REACT_APP_PASSWORD === data.password) {
            console.log('!!!!');
            localStorage.setItem('isAuth', true);
            navigate('/admin');
            return;
        }
        console.log('????');
        setError('Invalid login or password');
        localStorage.removeItem('isAuth');
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 12,
                    // marginBottom: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '70vh',
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                {error.length > 0 && (
                    <Typography variant="h6" sx={{ color: theme.palette.secondary.dark, mt: 2 }}>
                        {error}
                    </Typography>
                )}

                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="login"
                        label="Login"
                        name="login"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                    />

                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default LoginPage;
