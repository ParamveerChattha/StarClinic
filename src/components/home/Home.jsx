import './styles.css'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Home = (props) => {
  const logo =  require('./dental.jpg');
  console.log(logo);
  const {name} = {...props}
  return(
    < div className='UserCard'>
    <Card sx={{ maxWidth: 250, maxHeight: 350 }}>
      <CardMedia
        component="img"
        alt="Patient"
        height="140"
        src={logo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name?name:'PatientName'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          its Diagnosis History
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Appointment</Button>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
    
    </div>)}

    export default Home;