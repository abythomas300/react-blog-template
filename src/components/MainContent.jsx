import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import CardComponent from "./CardComponent"
import SidebarComponent from "./SidebarComponent"


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#76acff',
//   ...theme.typography.body2,
//   padding: theme.spacing(0),
//   textAlign: 'left',
//   color: (theme.vars ?? theme).palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#76acff',
//   }),
// }));

export default function MainContent() {
  return (
    <Box sx={{bgcolor: "#faff4e", p: 2}}>
      <Grid container spacing={6}>

        {/* Cards component inside the grid layout*/}
        <Grid size={9}>
            <Paper elevation={10}>
                <CardComponent />
            </Paper>
            <Paper elevation={10}>
                <CardComponent />
            </Paper>
            <Paper elevation={10}>
                <CardComponent />
            </Paper>
            <Paper elevation={10}>
                <CardComponent />
            </Paper>
            <Paper elevation={10}>
                <CardComponent />
            </Paper>
        </Grid>

        {/* Sidebar component inside the grid layout*/} 
        <Grid size={3}>
            <Box>
                <SidebarComponent/>
            </Box>
        </Grid>

      </Grid>
    </Box>
  );
}
