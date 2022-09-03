import * as React from "react";
import { Box, Button, ButtonGroup, Paper, Typography } from "@mui/material";
// @ts-ignore
import TypeIt from "typeit-react";
import { Picture } from "../../components/Picture";
import DescriptionIcon from '@mui/icons-material/Description';
import LinkIcon from '@mui/icons-material/Link'
import GitHubIcon from '@mui/icons-material/GitHub';

// @ts-ignore
import resume from '../../documents/Resume.pdf';
import './HomePage.css';

const HomePage = (props: any) => {
    // Properties depending on screen width
    var paperWidth: string
    var profileWidth: string
    paperWidth = props.isMobile ? paperWidth = "90%" : paperWidth = "80%";
    profileWidth = props.isMobile ? profileWidth = "200px" : profileWidth = "250px";

    const profile = {
        image: "profile",
        imageWidth: profileWidth,
        className: "homeProfile",
        imageSizeMobile: "calc(100vw * 0.6)",
        imageSizeNormal: "calc(100vw * 0.4)",
        altText: "Head shot of Elio smiling with a blurred background",
        isMobile: props.isMobile
    };

    return <>
        <div className="homeBackground">
            <Box sx={{ pb: 20 }}>
                <Picture picture={profile} />
                {props.isDesktopOrLaptopOrTablet &&
                    <Typography variant="h2" sx={{ mb: 2, mt: 4 }}>
                        Hi there! I'm Elio Di Nino
                    </Typography>}
                {props.isMobile &&
                    <Typography variant="h2" sx={{ mb: 2, mt: 4 }}>
                        Hi, I'm Elio Di Nino!
                    </Typography>}
                <Typography variant="h4" sx={{ my: 1 }}>
                    <TypeIt
                        options={{
                            speed: 100,
                            lifelike: true,
                            cursor: true,
                            cursorSpeed: 500,
                            loop: true
                        }}
                        getBeforeInit={(instance: any) => {
                            instance
                                .type("Software Developer")
                                .pause(2000)
                                .delete()
                                .pause(1000)
                                .type("Photographer")
                                .pause(2000)
                                .delete()
                                .pause(1000)
                                .type("Athlete")
                                .pause(2000)
                                .delete()
                                .pause(1000)
                            return instance;
                        }}
                    />
                </Typography>
                <ButtonGroup sx={{ mx: "auto", my: 3 }}>
                    <Button variant="contained" href={resume} size="large" startIcon={<DescriptionIcon />}>Resume</Button>
                    <Button variant="contained" href="/links" size="large" endIcon={<LinkIcon />} >Links</Button>
                </ButtonGroup>
                <Paper sx={{ width: paperWidth, mx: "auto", px: 6, py: 4, my: 4, maxWidth: 1100, borderRadius: 4 }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>About Me</Typography>
                    <Typography variant="body1" align="left">
                        I am a driven UBC Engineering student interested in computers and software. In my free time, I enjoy pursuing personal programming projects, cycling, playing soccer, learning about new technologies and <a href="https://photography.eliodinino.com" target="_blank" rel="noreferrer">taking landscape photos</a>.
                    </Typography><br />
                    <Typography variant="body1" align="left">
                        One of my values is to always continue learning. To uphold this, I pursue projects that require me to learn new skills and I seek new experiences, often outside of my comfort zone. I also look to meet new people and challenge myself whenever I can. I believe that this continuous learning and seeking of challenges is important to my growth and adaptability.
                    </Typography><br />
                    <Typography variant="body1" align="left">
                        My hard-working nature and natural leadership skills make me a valuable team member who can both listen and lead if needed. Furthermore, my attention to detail and organizational skills contribute to the timely completion of high-quality deliverables. As a result of these core attributes, along with my past experiences and promising future, I was awarded full-ride scholarships to both UBC and McMaster University.
                    </Typography><br />
                    <Typography variant="h5" align="left">
                        🎯 Professional Goal
                    </Typography><br />
                    <Typography variant="body1" align="left">
                        I hope to use my current and future skills to pursue a career in the Computer Engineering field. To get there I am looking to try many different roles through co-ops and volunteering opportunities at UBC. Following this, I will seek a career that I am passionate about and one that makes a positive impact on the world.
                    </Typography>
                    <Typography variant="h4" sx={{ mt: 3, mb: 2 }}>Projects</Typography>
                    <Typography variant="body1" align="center" sx={{ mb: 2 }}>
                        Check out my GitHub to see what I am working on!
                    </Typography>
                    <Button href="https://github.com/ElioDiNino/" target="blank" variant="contained" startIcon={<GitHubIcon />}>
                        GitHub
                    </Button>
                </Paper>
            </Box>
        </div>
    </>
}

export default HomePage;
