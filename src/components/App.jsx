import React from "react";
import GetGeoLocation from "../containers/GetGeoLocation";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import  '../weather.css';

function App(){

const theme = createTheme({
    typography: {
        h1:{
            fontSize:50,
            fontWeight:"bold",
            fontStyle:'italic',
            fontFamily:'Apple Color Emoji',
            position:'relative',
            
        },
        fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        ].join(','),
    },
    });
      
return (
        <div>
            <ThemeProvider theme={theme}>
                <Typography variant='h1' align="center">
                    Weather
                </Typography>
            </ThemeProvider>
            <GetGeoLocation />

        </div>
        
);
}

export default App;