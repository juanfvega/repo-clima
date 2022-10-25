import React, { useEffect, useState } from "react";
import GetCurrentWeather from "./GetCurrentWeather";
import CircularProgress from '@mui/material/CircularProgress';

function GetGeoLocation(){
    const [coord, setCoord] = useState();

    useEffect(() => {
        
        navigator.geolocation.getCurrentPosition(
            success => (setCoord(success.coords))        
        );

    }, [])

return(
        coord ? <GetCurrentWeather props = {coord}/> : <CircularProgress sx={{position:'absolute', left:'45%'}}/>
);

}

export default GetGeoLocation;