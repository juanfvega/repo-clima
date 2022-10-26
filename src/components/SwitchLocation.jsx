import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import GetCurrentWeather from '../containers/GetCurrentWeather';



export default function SwitchLocation() {
     const [enable, setEnable] = useState(false);
     const theme = createTheme({
        typography: {
            fontSize:10,
            fontWeight: 500,
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
      

    function handleChange(){
        setEnable(!enable);
    }
  return (
    <div>
    <ThemeProvider theme={theme}>
    <FormGroup>
        <Typography sx={{
            fontFamily:'Apple Color Emoji',
            color:'black',
            typography:'body2'
        }}
         >
            MyLocation
         </Typography>
        <FormControlLabel 
            control={<Switch  checked={enable}
            onChange={handleChange}/>}  
        />
    </FormGroup>
      {enable ? <GetCurrentWeather /> : null}
    </ThemeProvider>
    </div>
  );
}