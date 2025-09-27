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

export default function CardComponent() {
  return (
    <Card sx={{ p:0, my:0}}>
      <CardMedia
        sx={{ height: 600, m:0 }}
        image="https://cdn.pixabay.com/photo/2024/11/07/03/12/lizard-9179598_1280.jpg"
        title="lizard"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
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
