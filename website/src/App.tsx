import React from 'react';
import './App.css';

import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMediaQuery } from 'react-responsive';

import Layout from './layouts/MainLayout';
import HomePage from "./pages/HomePage/HomePage";
import NoPage from "./pages/404Page/NoPage";
import LinksPage from "./pages/LinksPage/LinksPage";
import ContactPage from "./pages/ContactPage/ContactPage";

// Title in the browser
const siteTitle = "Elio Di Nino";

// Specifying what size to consider mobile
const mobileSize = 600;

// Customized MUI theme
let theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
});
theme = responsiveFontSizes(theme);

// Main app component
function App() {
  // For layouts on different devices
  const isMobile = useMediaQuery({
    query: '(max-width: ' + mobileSize + 'px)'
  })
  const isDesktopOrLaptopOrTablet = useMediaQuery({
    query: '(min-width: ' + mobileSize + 'px)'
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {/* Hide the footer and header on the links page */}
        <Route element={<Layout hideHeaderPaths={['/links']} hideFooterPaths={['/links']} />}>
          <Route path="/" element={<HomePage isMobile={isMobile} isDesktopOrLaptopOrTablet={isDesktopOrLaptopOrTablet} />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/links" element={<LinksPage pageTitle="Links" siteTitle={siteTitle} />} />
          <Route path="/contact" element={<ContactPage pageTitle="Contact" siteTitle={siteTitle} isMobile={isMobile} isDesktopOrLaptopOrTablet={isDesktopOrLaptopOrTablet} />} />
          {/* 404 Page */}
          <Route path="*" element={<NoPage pageTitle="404" siteTitle={siteTitle} />} />
        </Route>
      </Routes>
    </ThemeProvider >
  );
}

export default App;
