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
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Chip from '@mui/material/Chip';
import {useState} from 'react';



export default function CardComponent() {

  const [likeCount, setLikeCount] = useState(0)
  const [commentCount, setCommentCount] = useState(0)
  const [shareCount, setShareCount] = useState(0)

  function handleLikeButton() {
    setLikeCount(likeCount + 1)
  }

  function handleCommentButton() {
    setCommentCount(commentCount + 1)
  }

  function handleShareButton() {
    setShareCount(shareCount + 1)
  }

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

          <Typography variant='subtitle1' component="div" sx={{my: 1}}>
            The Dragon Like Creatures in our neighbourhood
          </Typography>
          <Typography variant='subtitle2' component='div' color='textSecondary'>
            April 7, 2014
          </Typography>

        <Typography variant="body1" sx={{my: 3 }}>
          Lizard is the common name used for all squamate reptiles other than snakes, encompassing over 7,000 species, 
          ranging across all continents except Antarctica, as well as most oceanic island chains. The grouping is 
          paraphyletic as some lizards are more closely related to snakes than they are to other lizards...
        </Typography>

        <Button variant="contained" endIcon={<ReadMoreIcon/>} color='secondary'>
          Read more
        </Button>

      </CardContent>


      <CardActions sx={{my:3}}>
        <Button size="small" color='secondary' onClick = {handleLikeButton}>
          <ThumbUpOutlinedIcon />
          <Chip color="secondary" size="small" label={likeCount} sx={{mx:1}} />
        </Button>
        <Button size="small" color='secondary' onClick = {handleCommentButton}>
          <CommentOutlinedIcon />
          <Chip color="secondary" size="small" label={commentCount} sx={{mx:1}} />
        </Button>
        <Button size="small" color='secondary' onClick = {handleShareButton}>
          <ShareOutlinedIcon />
          <Chip color="secondary" size="small" label={shareCount} sx={{mx:1}} />
        </Button>
      </CardActions>

    </Card>
  );
}
