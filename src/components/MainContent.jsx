import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardComponent from "./CardComponent"
import SidebarComponent from "./SidebarComponent"



export default function MainContent() {
  return (
    <Box sx={{bgcolor: "#fff", p: 2}}>
      <Grid container spacing={{xs:1, sm:2, md:4}}>

        {/* Cards component inside the grid layout*/}
        <Grid item size={{xs:12, md:8}}>
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
        <Grid item size={{xs:12, md:4}}>
            <Box>
                <SidebarComponent/>
            </Box>
        </Grid>

      </Grid>
    </Box>
  );
}
