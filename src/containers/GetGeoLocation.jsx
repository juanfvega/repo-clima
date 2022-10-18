import React, { useEffect, useState } from "react";
import GetCurrentWeather from "./GetCurrentWeather";


function GetGeoLocation(){
    const [coord, setCoord] = useState();

useEffect(() => {
    
    navigator.geolocation.getCurrentPosition(
        success => (setCoord(success.coords)),
    
      );

}, [])

return(
        <GetCurrentWeather props = {coord}/>
);

}

export default GetGeoLocation;