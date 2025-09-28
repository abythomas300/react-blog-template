import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import Box from '@mui/material/Box';


export default function CardComponent() {
  return (
    <Card sx={{ p:0, my:4, height: '100%', width: '100%'}}>
      <CardMedia
        component="img"
        image="https://cdn.pixabay.com/photo/2024/11/07/03/12/lizard-9179598_1280.jpg"
        title="lizard"
        sx={{ height: 400, objectFit: 'cover', objectPosition: 'top' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 1}} >
          <Typography variant='subtitle1' component="div" sx={{my: 1}}>
              The Dragon Like Creatures in our neighbourhood,
          </Typography>
          <Typography variant='subtitle1' component='div' color='textSecondary'>
          April 7, 2014
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3 }}>
        Lizard is the common name used for all squamate reptiles other than snakes, encompassing over 7,000 species, 
        ranging across all continents except Antarctica, as well as most oceanic island chains. The grouping is 
        paraphyletic as some lizards are more closely related to snakes than they are to other lizards
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><ThumbUpOutlinedIcon /></Button>
        <Button size="small"><CommentOutlinedIcon /></Button>
        <Button size="small"><ShareOutlinedIcon /></Button>
      </CardActions>
    </Card>
  );
}
