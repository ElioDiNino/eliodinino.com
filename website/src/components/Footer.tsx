import * as React from 'react';
import { Paper, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { URLS } from '../constants';

export default function Footer() {
  return (
    <>
      <Paper
        sx={{
          borderRadius: 0,
          pt: 3,
          pb: 2,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <IconButton
          href={URLS.linkedin}
          aria-label="LinkedIn"
          target="_blank"
          size="large"
        >
          <LinkedInIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          href={URLS.github}
          aria-label="GitHub"
          target="_blank"
          size="large"
        >
          <GitHubIcon fontSize="inherit" />
        </IconButton>
        <IconButton href="/contact" aria-label="Contact" size="large">
          <EmailIcon fontSize="inherit" />
        </IconButton>
        <br />
        <Typography id="copyright" sx={{ p: 1 }}>
          &copy; {new Date().getFullYear()} Elio Di Nino
        </Typography>
      </Paper>
    </>
  );
}
