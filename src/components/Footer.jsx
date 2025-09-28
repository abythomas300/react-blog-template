import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FooterButtons from "./FooterButtons"

export default function Footer() {
  return (
    <Box>
      <AppBar position="static" color='warning'>
        <Toolbar  sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          p: 2
          }}>
          <Typography>
              <FooterButtons></FooterButtons>
          </Typography>
        </Toolbar>
        <Box sx={{display: 'flex' ,justifyContent: 'center', p:4}}>
            <Typography variant='small'>
                All rights reserved © 2025
            </Typography>
        </Box>
      </AppBar>
    </Box>
  );
}
