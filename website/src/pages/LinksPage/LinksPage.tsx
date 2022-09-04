import * as React from "react";
import { IconButton, Button, Paper } from "@mui/material";
import { Picture } from "../../components/Picture";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebIcon from '@mui/icons-material/Web';
import EmailIcon from '@mui/icons-material/Email';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import './LinksPage.css';
import gitlab from '../../images/gitlab-logo.svg';

const LinksPage = (props: any) => {
    // Update browser title
    document.title = props.pageTitle + " - " + props.siteTitle;
    // Properties depending on screen width
    var paperWidthMax: string;
    var imageSize: string;
    paperWidthMax = props.isMobile ? paperWidthMax = "calc(100vw * 0.9)" : paperWidthMax = "500px";
    imageSize = props.isMobile ? imageSize = "50%" : imageSize = "40%";

    const profile = {
        image: "profile",
        imageWidth: imageSize,
        imageHeight: imageSize,
        className: "profile",
        imageSizeMobile: "calc(100vw * 0.9 * 0.4)",
        imageSizeNormal: "calc(100vw * 0.4)",
        altText: "Head shot of Elio smiling with a blurred background",
        isMobile: props.isMobile
    };

    return <>
        <div className="background">
            <Paper className="frostedGlass" sx={{ width: "100%", maxWidth: paperWidthMax, height: "auto", margin: "auto", boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)", borderRadius: "20px", backgroundColor: "rgba(255, 255, 255, .15)", backdropFilter: "blur(5px)", padding: "3rem 1rem" }}>
                <Picture className="profile" picture={profile} />
                <br />
                <h1>Elio Di Nino</h1>
                <Button variant="contained" sx={{ m: 1, backgroundColor: '#47a7d4', color: '#ffffff', '&:hover': { backgroundColor: '#357ea1' } }} startIcon={<WebIcon />} href="/">
                    Website
                </Button>
                <Button variant="contained" sx={{ m: 1, backgroundColor: '#47a7d4', color: '#ffffff', '&:hover': { backgroundColor: '#357ea1' } }} startIcon={<EmailIcon />} href="/contact">
                    Contact
                </Button>
                <br />
                <Button variant="contained" sx={{ m: 1, backgroundColor: '#47a7d4', color: '#ffffff', '&:hover': { backgroundColor: '#357ea1' } }} startIcon={<PhotoCameraIcon />} href="https://photography.eliodinino.com" target="blank">
                    Photography Portfolio
                </Button>
                <h4>Profiles</h4>
                <IconButton href="https://www.linkedin.com/in/eliodinino/" target="blank">
                    <LinkedInIcon />
                </IconButton>
                <IconButton href="https://github.com/ElioDiNino/" target="blank">
                    <GitHubIcon />
                </IconButton>
                <IconButton href="https://gitlab.com/ElioDiNino/" target="blank">
                    <img src={gitlab} alt="GitLab" width="22" height="22" />
                </IconButton>
                <IconButton href="https://www.instagram.com/eliodinino/" target="blank">
                    <InstagramIcon />
                </IconButton>
            </Paper>
        </div>
    </>
}

export default LinksPage;
