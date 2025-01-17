import * as React from 'react';
import { Box, Button, Paper, Typography, Grid } from '@mui/material';
import TypeIt from 'typeit-react';
import { Picture } from '../../components/Picture';
import { ContainedIconButton } from '../../components/ContainedIconButton';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

// @ts-ignore
import './HomePage.css';
import { URLS } from '../../constants';

const HomePage = (props: any) => {
  // Properties depending on screen width
  let paperWidth = props.isMobile ? '90%' : '80%';
  let profileWidth = props.isMobile ? '200px' : '80%';
  let textAlign = props.isMobile ? 'center' : 'left';
  let rowGrap = props.isMobile ? 6 : 2;
  let titleTextSize = props.isMobile ? 12 : 7;
  let buttonsPb = props.isMobile ? 12 : 14;
  let buttonsMl = props.isMobile ? 1 : undefined;
  let buttonsMr = props.isMobile ? 1 : 2;

  const profile = {
    image: 'profile',
    imageWidth: profileWidth,
    imageHeight: 'auto',
    className: 'homeProfile',
    imageSizeMobile: 'calc(100vw * 0.6)',
    imageSizeNormal: 'calc(100vw * 0.4)',
    altText: 'Head shot of Elio smiling with a blurred background',
    isMobile: props.isMobile,
  };

  return (
    <>
      <div className="homeBackground">
        <Box sx={{ pb: 25, maxWidth: 1000, mx: 'auto' }}>
          <Grid
            container
            columnGap={0}
            rowGap={rowGrap}
            sx={{ width: paperWidth, mx: 'auto', mt: 10 }}
          >
            {props.isMobile && (
              <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                <Picture picture={profile} />
              </Grid>
            )}
            <Grid
              item
              xs={titleTextSize}
              sx={{
                textAlign: textAlign,
                justifyContent: 'space-evenly',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {props.isDesktopOrLaptopOrTablet && (
                <>
                  <Typography variant="h1" sx={{ mt: 0, mb: 0 }}>
                    # Hi there! I'm
                    <br /># Elio Di Nino
                  </Typography>
                </>
              )}
              {props.isMobile && (
                <Typography variant="h1" sx={{ mb: 3 }}>
                  Hi there!
                  <br />
                  I'm Elio Di Nino
                </Typography>
              )}
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <TypeIt
                  options={{
                    speed: 100,
                    lifeLike: true,
                    cursorSpeed: 600,
                    loop: true,
                  }}
                  getBeforeInit={(instance) => {
                    instance
                      .type('Engineering Student')
                      .pause(2000)
                      .delete()
                      .pause(1000)
                      .type('Software Developer')
                      .pause(2000)
                      .delete()
                      .pause(1000)
                      .type('Drone Enthusiast')
                      .pause(2000)
                      .delete()
                      .pause(1000)
                      .type('Photographer')
                      .pause(2000)
                      .delete()
                      .pause(1000);
                    return instance;
                  }}
                />
              </Typography>
            </Grid>
            {props.isDesktopOrLaptopOrTablet && (
              <Grid item xs={5} sx={{ textAlign: 'right' }}>
                <Picture picture={profile} />
              </Grid>
            )}
            <Grid item xs={12} sx={{ textAlign: textAlign, pb: buttonsPb }}>
              <ContainedIconButton
                isMobile={props.isMobile}
                link={URLS.linkedin}
                startIcon={<LinkedInIcon />}
                ml={buttonsMl}
                mr={buttonsMr}
                ariaLabel="LinkedIn"
              />
              <ContainedIconButton
                isMobile={props.isMobile}
                link={URLS.github}
                startIcon={<GitHubIcon />}
                ml={buttonsMl}
                mr={buttonsMr}
                ariaLabel="GitHub"
              />
              <ContainedIconButton
                isMobile={props.isMobile}
                link={URLS.resume}
                startIcon={<DescriptionIcon />}
                ml={buttonsMl}
                mr={buttonsMr}
                ariaLabel="Resume"
              />
              <ContainedIconButton
                isMobile={props.isMobile}
                link={URLS.photography}
                startIcon={<PhotoCameraIcon />}
                ml={buttonsMl}
                mr={buttonsMr}
                ariaLabel="Photography Portfolio"
              />
              <ContainedIconButton
                isMobile={props.isMobile}
                link={URLS.instagram}
                startIcon={<InstagramIcon />}
                ml={buttonsMl}
                mr={buttonsMr}
                ariaLabel="Instagram"
              />
            </Grid>
          </Grid>
          <Paper
            sx={{
              width: paperWidth,
              mx: 'auto',
              px: 6,
              py: 4,
              my: 4,
              boxShadow: '0 0 1rem 0 rgba(0, 0, 0, .5)',
              backgroundColor: 'rgba(35, 35, 35, .15)',
              backdropFilter: 'blur(5px)',
              outline: '2px solid rgba(255, 255, 255, 0.35)',
              borderRadius: 4,
              textAlign: 'left',
            }}
          >
            <Typography variant="h4" sx={{ mt: 1, mb: 2 }}>
              ## README.md
            </Typography>
            <Typography variant="body1" align="left">
              I am a driven UBC Computer Engineering student passionate about
              building impactful software and contributing back to the
              community. I have an abundance of experience working in teams to
              solve challenges with innovative software solutions, ranging from
              quantum computing pipelines to autonomous aircraft systems.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              sx={{ mt: 3, mb: 10, color: '#ffffff', borderRadius: 2 }}
              startIcon={<DescriptionIcon />}
              endIcon={<NorthEastIcon />}
              href={URLS.resume}
              target="_blank"
            >
              Resume
            </Button>
            <Typography variant="h4" sx={{ mb: 2 }}>
              ## Branching Out
            </Typography>
            <Typography variant="body1" align="left">
              In my spare time, I enjoy pursuing{' '}
              <a href={URLS.github} target="_blank" rel="noreferrer">
                personal programming projects
              </a>
              , cycling, playing soccer, flying drones, learning about new
              technologies, and{' '}
              <a href={URLS.photography} target="_blank" rel="noreferrer">
                taking landscape photos
              </a>{' '}
              - you could say I'm a full-time developer by day, and a full-time
              hobbyist by night. Outside of academic pursuits, I enjoy being a
              Teaching Assistant for aspiring computer engineers, as well as
              contributing to large-scale projects such as the development I led
              on{' '}
              <a href="https://ubcuas.com" target="_blank" rel="noreferrer">
                UBC Uncrewed Aircraft Systems
              </a>{' '}
              to{' '}
              <a
                href="https://www.aerialevolution.ca/annual-student-competition/"
                target="_blank"
                rel="noreferrer"
              >
                place 3rd nationally in 2024
              </a>
              .
            </Typography>
            <Button
              variant="outlined"
              size="large"
              sx={{ mt: 3, mb: 10, color: '#ffffff', borderRadius: 2 }}
              startIcon={<PhotoCameraIcon />}
              endIcon={<NorthEastIcon />}
              href={URLS.photography}
              target="_blank"
            >
              Photography
            </Button>
            <Typography variant="h4" sx={{ mb: 2 }}>
              ## New PRs
            </Typography>
            <Typography variant="body1" align="left">
              My commitment to learning drives me to take on projects that
              require gaining new skills and pursuing challenges outside my
              comfort zone. I believe that continuous learning and embracing new
              experiences are pivotal to personal growth and adaptability.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              sx={{ mt: 3, mb: 10, color: '#ffffff', borderRadius: 2 }}
              startIcon={<GitHubIcon />}
              endIcon={<NorthEastIcon />}
              href={URLS.github}
              target="_blank"
            >
              GitHub
            </Button>
            <Typography variant="h4" sx={{ mb: 2 }}>
              ## Queued Actions
            </Typography>
            <Typography variant="body1" align="left">
              I'm on a mission to build impactful technologies through scalable
              software, courageous innovation, and ambitious leadership while
              relentlessly pursuing my passion for contributing to technology to
              better society.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              sx={{ mt: 3, mb: 2, color: '#ffffff', borderRadius: 2 }}
              startIcon={<LinkedInIcon />}
              endIcon={<NorthEastIcon />}
              href={URLS.linkedin}
              target="_blank"
            >
              LinkedIn
            </Button>
          </Paper>
        </Box>
      </div>
    </>
  );
};

export default HomePage;
