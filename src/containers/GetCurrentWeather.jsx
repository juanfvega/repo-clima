import React, { useEffect, useState } from "react";
import {API_KEY} from '../constants';
import CurrentWeather from '../components/CurrentWeather';
import CircularProgress from '@mui/material/CircularProgress';
import {GetGeoLocation} from './GetGeoLocation';

function GetCurrentWeather() {
    const[data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [coords, setCoords] = useState(null);

    async function fetchData() {
        const latitude = coords.latitude.toFixed(2)  
        const longitude = coords.longitude.toFixed(2) 
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`

        const response = await fetch(url)
        let data = await response.json()
        setData(data)
        setLoading(true)
        
    }
    
   useEffect(()=> {
       var c = GetGeoLocation();
       c.then(result => setCoords(result.coords));
       
    }, []);

    useEffect(() => {
        
        if(coords){
             fetchData();
        }
      
       
    }, [coords])

    return (
        loading ? <CurrentWeather props={data}/> : <CircularProgress sx={{position:'absolute', left:'45%'}}/>

    );
}

export default GetCurrentWeather;