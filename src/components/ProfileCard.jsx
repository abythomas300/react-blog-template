import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Paper } from '@mui/material';

export default function ProfileCard() {
  return (
    <Paper elevation={10} sx={{mt: 2, borderRadius: 5, p:0}}>
      <Card sx={{ p:0, height: '100%', width: '100%', my:4, borderRadius: 5}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHN8ZW58MHx8MHx8fDA%3D"
          alt="author image"
          sx={{objectFit: 'cover'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Jane Doe
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Just me, myself and I, exploring the universe of uknownment. 
          I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. 
          I want to share my world with you.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </ Paper>
    
  );
}
