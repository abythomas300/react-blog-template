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
          <Typography variant="h4" component="div" sx={{
            p: 1,
            fontSize: {xs: 'h6'}
            }}>
            MY BLOG
          </Typography>
          <Typography variant="h6" component="div" sx={{
            p: 1,
            fontSize: {xs: 'medium', md: 'large'}
            }}>
            Welcome to the blog where I share my thoughts and ideas!
          </Typography>
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}
