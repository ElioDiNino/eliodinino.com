import * as React from "react";
import { Slide, AppBar, Box, Divider, Drawer, Typography, Button, Toolbar, List, ListItem, ListItemText, ListItemButton, useScrollTrigger, Fade, Fab } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import logo from '../images/logo.png';

interface SubProps {
    children: React.ReactElement;
}

interface MainProps {
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'Links', 'Contact'];

function HideOnScroll(props: SubProps) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function ElevationScroll(props: SubProps) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

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
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

export default function Header(props: MainProps) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h2" sx={{ my: 2 }}>
                <img src={logo} alt="Site logo (mobile drawer)" width='108px' height='37px' />
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

    const container = window !== undefined ? () => window().document.body : undefined;

    return <>
        <Box sx={{ display: 'flex' }}>
            <ElevationScroll {...props}>
                <AppBar component="nav">
                    <Toolbar>
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
                            variant="h2"
                            component="div"
                            sx={{ flexGrow: 1, textAlign: 'center', display: { sm: 'none' } }}
                        >
                            <img src={logo} alt="Site logo" width='108px' height='37px' />
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
                            <img src={logo} alt="Site logo" width='108px' height='37px' />
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: '#fff' }} href={`/${item.toLowerCase()}`}>
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
