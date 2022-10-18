import * as React from 'react';
import {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function CurrentWeather(props){
        const [data, setData] = useState(props)

    console.log(data)
    return(
    <Card sx={{ 
        maxWidth: 200,
        position:'relative',
        left:'43%'
        }}
        align='center'
        
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`http://openweathermap.org/img/wn/${props.props.weather[0].icon}@2x.png`}
          alt="weather"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.props.name}-{props.props.sys.country}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            T: {props.props.main.temp} C°       H: {props.props.main.humidity}%
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ST: {props.props.feels_like} C°     W: {props.props.wind.speed}Km/h
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    );


}
export default CurrentWeather;

