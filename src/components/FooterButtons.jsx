import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={5}>
      <Button variant="contained" startIcon={<ArrowBackIosIcon/>}>
        Previous
      </Button>
      <Button variant="contained" endIcon={<ArrowForwardIosIcon/>}>
        NExt
      </Button>
    </Stack>
  );
}
