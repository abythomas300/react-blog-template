import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import ListSubheader from '@mui/material/ListSubheader';
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Tags() {
  const handleClick = () => {
    alert('You clicked the Chip.');
  };

  const tagCollection = ["Space", "IT", "Gaming", "IoT", "Artificial Intelligence", "Sports", "Trending", "News", "Pop", "Russia Ukraine"];
  const chips = tagCollection.map((tag)=>{
     return (
     <Chip label={tag} variant="outlined" onClick={handleClick} />
    )
  })
  
  return (
    <Paper elevation={10} sx={{mt: 2, borderRadius: 5, p:0}}>
        <Box sx={{display: 'flex', p:2}}>
          <Typography variant='h6'>
            Tags
          </Typography>
        </Box>
        <Divider></Divider>

        
        <Stack direction="row" spacing={2} gap={1} label="Tags" sx={{flexWrap: 'wrap', p:2, my: 2}}>
            {chips}
        </Stack>

    </Paper>
  );
}
