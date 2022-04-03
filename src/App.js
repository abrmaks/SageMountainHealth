import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import Router from './pages/Router';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    {/*<nav>*/}
                    {/*    <Link to="/">Home</Link>*/}
                    {/*    <Link to="about">About</Link>*/}
                    {/*</nav>*/}
                    <Header />
                    <Router />
                    <Footer />
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
