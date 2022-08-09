import * as React from "react";
import { IconButton, Button } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebIcon from '@mui/icons-material/Web';
import EmailIcon from '@mui/icons-material/Email';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import './LinksPage.css';
import profile from '../../images/profile.jpg';

const LinksPage = (props: any) => {
    document.title = props.pageTitle + " - " + props.siteTitle;
    return <>
        <div className="background">
            <div className="frostedGlass">
                <picture>
                    <img className="profile" src={profile} alt="Profile" width="40%" />
                </picture>
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
                <h4>Social Media</h4>
                <IconButton href="https://www.linkedin.com/in/eliodinino/" target="blank">
                    <LinkedInIcon />
                </IconButton>
                <IconButton href="https://www.instagram.com/eliodinino/" target="blank">
                    <InstagramIcon />
                </IconButton>
                <IconButton href="https://github.com/ElioDiNino/" target="blank">
                    <GitHubIcon />
                </IconButton>
            </div>
        </div>
    </>
}

export default LinksPage;
