import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import CardComponent from "./CardComponent"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'left',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function MainContent() {
  return (
    <Box sx={{bgcolor: "tomato", p: 2}}>
      <Grid container spacing={2}>
        <Grid size={8}>
            <Item sx={{my:2}}>
                <CardComponent />
            </Item>
            <Item>
                <CardComponent />
            </Item>
            <Item>
                <CardComponent />
            </Item>
            <Item>
                <CardComponent />
            </Item>
            <Item>
                <CardComponent />
            </Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
