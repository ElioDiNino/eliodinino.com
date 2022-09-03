import * as React from "react";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
// https://www.emailjs.com/docs/sdk/installation/
import emailjs from '@emailjs/browser';
// https://www.npmjs.com/package/@matt-block/react-recaptcha-v2
import ReCaptcha from "@matt-block/react-recaptcha-v2";
// https://www.npmjs.com/package/react-responsive

import './ContactPage.css';

const ContactPage = (props: any) => {
    const form = React.useRef() as React.MutableRefObject<HTMLFormElement>;
    // Update browser title
    document.title = props.pageTitle + " - " + props.siteTitle;
    const [captchaResult, setCaptchaResult] = React.useState(false);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    // eslint-disable-next-line
    const [theme, setTheme] = React.useState("dark");
    const [key, setKey] = React.useState(0);

    // Pick captcha size based on screen size
    // eslint-disable-next-line
    const [size, setSize] = React.useState<"normal" | "compact" | undefined>(() => {
        if (props.isMobile) {
            return "compact";
        } else {
            return "normal";
        }
    });

    // Form padding based on screen size
    var formPad: number
    formPad = props.isMobile ? formPad = 4 : formPad = 6;

    // Form submit
    const sendEmail = (e: any) => {
        e.preventDefault();
        // Send an email through emailjs
        emailjs.sendForm('service_2xaitxu', 'contact_form', form.current, 'MHeER2deeXVWAC_7T')
            .then((result: any) => {
                // Clear all fields
                console.log(result.text);
                setName("");
                setEmail("");
                setMessage("");
                setKey(key + 1);
            }, (error: any) => {
                console.log(error.text);
            });
    };

    return (
        <Box sx={{ verticalAlign: 'middle', pb: 20 }}>
            <Paper className="contact" sx={{ width: "fit-content", maxWidth: "90%", p: formPad, borderRadius: 10, mx: "auto" }}>
                <Typography variant="h4" sx={{ mb: 3 }}>Contact</Typography>
                <form ref={form} onSubmit={sendEmail}>
                    {props.isDesktopOrLaptopOrTablet &&
                        <TextField
                            className="infoField"
                            value={name}
                            onChange={event => setName(event.target.value)}
                            type="text"
                            name="user_name"
                            label="Name"
                            variant="outlined"
                            required
                            sx={{ mr: 1, mb: 2 }} />}
                    {props.isMobile &&
                        <TextField
                            className="infoField"
                            value={name}
                            onChange={event => setName(event.target.value)}
                            type="text"
                            fullWidth
                            name="user_name"
                            label="Name"
                            variant="outlined"
                            required
                            sx={{ mb: 2 }} />}
                    {props.isDesktopOrLaptopOrTablet &&
                        <TextField
                            className="infoField"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            type="email"
                            name="user_email"
                            label="Email"
                            variant="outlined"
                            required
                            sx={{ ml: 1, mb: 2 }} />}
                    {props.isMobile &&
                        <TextField
                            className="infoField"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            type="email"
                            fullWidth
                            name="user_email"
                            label="Email"
                            variant="outlined"
                            required
                            sx={{ mb: 2 }} />}
                    <br />
                    <TextField
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                        type="text"
                        name="message"
                        label="Message"
                        variant="outlined"
                        required
                        multiline
                        minRows={5}
                        fullWidth
                        sx={{ mb: 2 }} />
                    <div id="capchta">
                        {size &&
                            <ReCaptcha
                                key={key}
                                siteKey="6LdvcmIhAAAAAKDe5SVr6Z_gNLfOYO06QIl6Abm6"
                                theme={theme === "dark" ? "dark" : "light"}
                                size={size}
                                onSuccess={() => { setCaptchaResult(true) }}
                                onExpire={() => { setCaptchaResult(false) }}
                                onError={() => { setCaptchaResult(false) }}
                            />}
                    </div>
                    <Button disabled={!captchaResult} type="submit" value="Send" variant="contained" sx={{ mt: 1 }}>Submit</Button>
                    <Typography variant="body1" sx={{ hidden: "true" }} />
                </form>
            </Paper>
        </Box >
    )
}

export default ContactPage;
