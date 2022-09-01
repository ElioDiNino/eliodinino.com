import * as React from "react";
import { Slide, AppBar, Box, Divider, Drawer, Typography, Button, Toolbar, List, ListItem, ListItemText, ListItemButton, useScrollTrigger, Fade, Fab } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import './Header.css';
import logo from '../../images/logo.png';

// Custom interfaces
interface SubProps {
    children: React.ReactElement;
}

interface MainProps {
    window?: () => Window;
}

const drawerWidth = 240;
// Specify navigation items
const navItems = ['Home', 'Links', 'Contact'];

// Hide the header upon scrolling
function HideOnScroll(props: SubProps) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

// Elevate the header upon scrolling
function ElevationScroll(props: SubProps) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        color: trigger ? undefined : 'transparent',
    });
}

// Scroll to top button
function ScrollTop(props: SubProps) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1 }}
            >
                {children}
            </Box>
        </Fade >
    );
}

export default function Header(props: MainProps) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Mobile drawer component
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
                <a href="/"><img src={logo} alt="Site logo (mobile drawer)" width='108px' height='37px' /></a>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} component="a" href={`/${item.toLowerCase()}`}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    // Checking window size
    const container = window !== undefined ? () => window().document.body : undefined;

    return <>
        <Box sx={{ display: 'flex', mb: 4 }} >
            <ElevationScroll {...props} >
                <AppBar component="nav" className="bar"
                    sx={{ transition: "background-color 0.3s ease-in-out, box-shadow 0.15s ease-in-out" }}>
                    <Toolbar>
                        {/* Mobile drawer handle */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h1"
                            component="div"
                            sx={{ flexGrow: 1, textAlign: 'center', display: { sm: 'none' } }}
                        >
                            <a href="/"><img src={logo} alt="Site logo" width='108px' height='37px' /></a>
                        </Typography>
                        <IconButton
                            color="inherit"
                            edge="start"
                            disabled={true}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon opacity="0" />
                        </IconButton>
                        <Typography
                            variant="h2"
                            component="div"
                            sx={{ flexGrow: 1, textAlign: 'left', display: { xs: 'none', sm: 'block' } }}
                        >
                            <a href="/"><img src={logo} alt="Site logo" width='108px' height='37px' /></a>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item} size="large" sx={{ color: '#fff' }} href={`/${item.toLowerCase()}`}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
        <Toolbar id="back-to-top-anchor" />
        <ScrollTop {...props}>
            <Fab size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
            </Fab>
        </ScrollTop>
    </>
}
