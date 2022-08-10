import * as React from "react";
import { Paper, Button, Typography, Box } from "@mui/material";

import './NoPage.css';

const NoPage = (props: any) => {
    document.title = props.pageTitle + " - " + props.siteTitle;
    return <>
        <Box sx={{ verticalAlign: 'middle', height: "59vh" }}>
            <Paper sx={{ width: "fit-content", p: 6, borderRadius: 10, mx: "auto", my: 12 }}>
                <Typography variant="h1">404</Typography>
                <Typography variant="h6">Whoops, it looks like you've hit a dead end!</Typography>
                <Button href="/" sx={{ m: 1, fontSize: 18 }}>
                    Take Me Home
                </Button>
            </Paper>
        </Box>
    </>
}

export default NoPage;
