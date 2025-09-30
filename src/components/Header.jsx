import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
      <AppBar position="sticky" color="primary" elevation={20}>
        <Toolbar  sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 0
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
  );
}
