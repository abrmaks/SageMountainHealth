/* eslint-disable  */
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#0269b2',
                },
            },
        },
    },
    palette: {
        common: {
            black: '#000',
            white: '#fff',
            darkGrey: '#454342',
            grey: '#808080',
            lightGrey: '#f6f6f6',
            greyOpacity: 'rgba(0, 0, 0, 0.1)',
        },
        primary: {
            light: '#7986cb',
            main: '#223b69',
            dark: '#182f59',
            // dark: 'rgba(0, 0, 0, 0.87)',
            contrastText: '#fff',
            green: '#33b4c8',
        },
        secondary: {
            light: '#ff7961',
            main: '#ff973d',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});
