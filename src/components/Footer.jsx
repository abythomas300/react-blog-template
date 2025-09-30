import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FooterButtons from "./FooterButtons"
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <Box>

      <AppBar position="static" color='primary' elevation={20}>

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
              display: 'flex', 
              fontSize: {xs: 'medium', md: 'large'},
              textDecoration: 'none'
              }}>
                  Made with < FavoriteBorderRoundedIcon sx={{mx:1}} /> by <Link sx={{color: 'secondary.main', mx:1}}>abythomas300</Link>

            </Typography>
        </Box>

      </AppBar>

    </Box>
  );
}
