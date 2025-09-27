import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import CardComponent from "./CardComponent"
import SidebarComponent from "./SidebarComponent"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ff6347',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'left',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027'
  }),
}));

export default function MainContent() {
  return (
    <Box sx={{bgcolor: "tomato", p: 2}}>
      <Grid container spacing={2}>

        {/* Cards component inside the grid layout*/}
        <Grid size={9}>
            <Item sx={{my:2}}>
                <CardComponent />
            </Item>
            <Item sx={{my:2}}>
                <CardComponent />
            </Item>
            <Item sx={{my:2}}>
                <CardComponent />
            </Item>
            <Item sx={{my:2}}>
                <CardComponent />
            </Item>
            <Item sx={{my:2}}>
                <CardComponent />
            </Item>
            
        </Grid>

        {/* Sidebar component inside the grid layout*/} 
        <Grid size={3}>

          <Item sx={{my:2}}>
            <SidebarComponent />
          </Item>

        </Grid>

      </Grid>
    </Box>
  );
}
