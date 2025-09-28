import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import ListSubheader from '@mui/material/ListSubheader';
import { Divider } from '@mui/material';

export default function Tags() {
  const handleClick = () => {
    alert('You clicked the Chip.');
  };

  return (
    <Paper elevation={10} sx={{mt: 2, borderRadius: 5, p:0}}>
        <ListSubheader sx={{fontSize: 'large', borderRadius: 5}}>Popular Posts</ListSubheader>
        <Divider></Divider>

        <Stack direction="row" spacing={2} gap={1} label="Tags" sx={{flexWrap: 'wrap', p:2, my: 2}}>
            <Chip label="Space" variant="outlined" onClick={handleClick}/>
            <Chip label="IT" variant="outlined" onClick={handleClick} />
            <Chip label="Gaming" variant="outlined" onClick={handleClick} />
            <Chip label="IoT" variant="outlined" onClick={handleClick} />
            <Chip label="Artificial Intelligence" variant="outlined" onClick={handleClick} />
            <Chip label="Sports" variant="outlined" onClick={handleClick} />
            <Chip label="Trending" variant="outlined" onClick={handleClick} />
            <Chip label="News" variant="outlined" onClick={handleClick} />
            <Chip label="Pop" variant="outlined" onClick={handleClick} />
            <Chip label="Russia Ukraine" variant="outlined" onClick={handleClick} />
        </Stack>

    </Paper>
  );
}
