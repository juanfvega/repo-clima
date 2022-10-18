import React, { useEffect, useState } from "react";
import {API_KEY} from '../constants';
import CurrentWeather from '../components/CurrentWeather';
import CircularProgress from '@mui/material/CircularProgress';


function GetCurrentWeather(props) {
    const[data, setData] = useState();
    const [loading, setLoading] = useState(false);


    async function fetchData() {
        const latitude = props.props.latitude.toFixed(2)  
        const longitude = props.props.longitude.toFixed(2) 
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`

        const response = await fetch(url)
        let data = await response.json()
        setData(data)
        setLoading(true)
        
    }
    
    useEffect(() => {
        fetchData();
    }, [props])

    return (
        loading ? <CurrentWeather props={data}/> : <CircularProgress sx={{position:'absolute', left:'45%'}}/>

    );
}

export default GetCurrentWeather;