import * as React from "react";
import { Box, Paper, Typography } from "@mui/material";

const ContactPage = (props: any) => {
    document.title = props.pageTitle + " - " + props.siteTitle;
    return (
        <Box sx={{ verticalAlign: 'middle', height: "68vh" }}>
            <Paper sx={{ width: "fit-content", p: 6, borderRadius: 10, mx: "auto", my: 4 }}>
                <Typography variant="h4">Contact</Typography>
                <form></form>
            </Paper>
        </Box>
    )
}

export default ContactPage;
