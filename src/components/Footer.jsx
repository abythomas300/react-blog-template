import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FooterButtons from "./FooterButtons"

export default function Footer() {
  return (
    <Box>
      <AppBar position="static" color='primary'>
        <Toolbar  sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'space-between',
          justifyContent: 'center',
          p: 0
          }}>
              <FooterButtons/>
        </Toolbar>
        <Box sx={{display: 'flex' ,justifyContent: 'center', p:2}}>
            <Typography variant='h5'>
                All rights reserved © 2025
            </Typography>
        </Box>
      </AppBar>
    </Box>
  );
}
