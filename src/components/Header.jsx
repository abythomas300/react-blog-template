import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box>
      <AppBar position="static" >
        <Toolbar  sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 1
          }}>
          <Typography variant="h3" component="div" sx={{p: 1}}>
            MY BLOG
          </Typography>
          <Typography variant="h6" component="div" sx={{p: 1}}>
            Welcome to the blog where I share my thoughts and ideas!
          </Typography>
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}
