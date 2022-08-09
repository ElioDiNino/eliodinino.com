import * as React from "react";
import { Paper } from "@mui/material";

const ContactPage = (props: any) => {
    document.title = props.pageTitle + " - " + props.siteTitle;
    return (
        <Paper>
            <h1>Contact</h1>
        </Paper>
    )
}

export default ContactPage;
