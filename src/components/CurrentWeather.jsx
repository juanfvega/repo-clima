import * as React from 'react';
import {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Flag from 'react-world-flags'



function CurrentWeather({props}){

    return(
    <Grid 
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
    <Card sx={{ 
        maxWidth: 350,
        backgroundColor:"inherit"
        }}
        align='center'
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`}
          alt="weather"
        />
        <Typography variant="h5" color="text.secondary" fontFamily="Roboto">
              {props.name}
          </Typography>
          <Avatar
               
          >
            <Flag code={props.sys.country}/>
          </Avatar>
        <CardContent> 
        <Typography variant="h2" color="text.primary" fontFamily="Roboto">
            T: {props.main.temp.toFixed(1)} C°
          </Typography>
          <Typography variant="body2" color="text.secondary">
            H: {props.main.humidity} %
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ST: {props.main.feels_like.toFixed(1)} C°
          </Typography>
          <Typography variant="body2" color="text.secondary">
            W: {props.wind.speed.toFixed(1)} Km/h
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.weather[0].description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    );


}
export default CurrentWeather;

