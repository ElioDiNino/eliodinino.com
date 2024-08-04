import * as React from 'react';
import { Paper, Button, Typography, Box } from '@mui/material';

import './NoPage.css';

const NoPage = (props: any) => {
  // Update browser title
  document.title = props.pageTitle + ' - ' + props.siteTitle;
  return (
    <>
      <Box sx={{ verticalAlign: 'middle', pb: 10 }}>
        <Paper
          sx={{
            width: 'fit-content',
            maxWidth: '90%',
            p: 6,
            borderRadius: 10,
            mx: 'auto',
            my: 8,
          }}
        >
          <Typography variant="h1" sx={{ my: 2 }}>
            404
          </Typography>
          <Typography variant="h6" sx={{ my: 1 }}>
            Whoops, it looks like you've hit a dead end!
          </Typography>
          <Button href="/" sx={{ m: 1, fontSize: 18 }}>
            Take Me Home
          </Button>
        </Paper>
      </Box>
    </>
  );
};

export default NoPage;
