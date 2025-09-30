import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FooterButtons from "./FooterButtons"
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

export default function Footer() {
  return (
    <Box>

      <AppBar position="static" color='primary'>

        <Toolbar  sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'space-between',
          justifyContent: 'center',
          p: {xs:2}
          }}>
          <FooterButtons/>
        </Toolbar>

        <Box sx={{display: 'flex' ,justifyContent: 'center', p:2}} >
            <Typography sx={{ 
              fontSize: {xs: 'medium', md: 'large'} 
              }}>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  Made with < FavoriteBorderRoundedIcon sx={{mx:1}} /> by maverick.h.s
                </Box>
            </Typography>
        </Box>

      </AppBar>

    </Box>
  );
}
