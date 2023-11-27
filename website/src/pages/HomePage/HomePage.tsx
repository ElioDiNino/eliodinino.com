import * as React from "react";
import { Box, Button, ButtonGroup, Divider, Paper, Typography } from "@mui/material";
import TypeIt from "typeit-react";
import { Picture } from "../../components/Picture";
import DescriptionIcon from '@mui/icons-material/Description';
import LinkIcon from '@mui/icons-material/Link'
import GitHubIcon from '@mui/icons-material/GitHub';

// @ts-ignore
import './HomePage.css';

const HomePage = (props: any) => {
    // Properties depending on screen width
    let paperWidth: string;
    let profileWidth: string;
    paperWidth = props.isMobile ? "90%" : "80%";
    profileWidth = props.isMobile ? "200px" : "250px";

    const profile = {
        image: "profile",
        imageWidth: profileWidth,
        imageHeight: profileWidth,
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
                    <Typography variant="h1" sx={{ mb: 2, mt: 4 }}>
                        Hi there! I'm Elio Di Nino
                    </Typography>}
                {props.isMobile &&
                    <Typography variant="h1" sx={{ mb: 2, mt: 4 }}>
                        Hi, I'm Elio Di Nino!
                    </Typography>}
                <Typography variant="h4" sx={{ my: 1 }}>
                    <TypeIt
                        options={{
                            speed: 100,
                            lifeLike: true,
                            cursorSpeed: 600,
                            loop: true
                        }}
                        getBeforeInit={(instance) => {
                            instance
                                .type("Engineering Student")
                                .pause(2000)
                                .delete()
                                .pause(1000)
                                .type("Software Developer")
                                .pause(2000)
                                .delete()
                                .pause(1000)
                                .type("Drone Enthusiast")
                                .pause(2000)
                                .delete()
                                .pause(1000)
                                .type("Photographer")
                                .pause(2000)
                                .delete()
                                .pause(1000)
                            return instance;
                        }}
                    />
                </Typography>
                <ButtonGroup sx={{ mx: "auto", my: 3 }}>
                    <Button variant="contained" href="/Resume.pdf" size="large" startIcon={<DescriptionIcon />}>Resume</Button>
                    <Button variant="contained" href="/links" size="large" endIcon={<LinkIcon />} >Links</Button>
                </ButtonGroup>
                <Paper sx={{ width: paperWidth, mx: "auto", px: 6, py: 4, my: 4, maxWidth: 1100, borderRadius: 4 }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>About Me</Typography>
                    <Typography variant="body1" align="left">
                        I am a driven UBC Computer Engineering student passionate about software development and technology. I have an abundance of experience working in teams to solve challenges with innovative software solutions, ranging from quantum computing pipelines to autonomous aircraft systems.
                    </Typography><br />
                    <Typography variant="body1" align="left">
                        In my free time, I enjoy pursuing personal programming projects, cycling, playing soccer, flying drones, learning about new technologies, and <a href="https://photography.eliodinino.com" target="_blank" rel="noreferrer">taking landscape photos</a>. Within the university, I contribute as a Teaching Assistant and lead a team of 70 students on <a href="https://ubcuas.com" target="_blank" rel="noreferrer">UBC Uncrewed Aircraft Systems</a>.
                    </Typography><br />
                    <Typography variant="body1" align="left">
                        My commitment to learning drives me to take on projects that require gaining new skills and pursuing challenges outside my comfort zone. I believe that continuous learning and embracing new experiences are pivotal to personal growth and adaptability.
                    </Typography><br />
                    <Typography variant="h5" align="left">
                        🎯 Professional Goal
                    </Typography><br />
                    <Typography variant="body1" align="left">
                        I'm on a mission to build impactful technologies through scalable software, courageous innovation, and ambitious leadership while relentlessly pursuing my passion for contributing to technology to better society.
                    </Typography>
                    <Divider sx={{ my: 4, borderBottomWidth: 1.5, color: "#ffffff", borderColor: "#ffffff" }} />
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
