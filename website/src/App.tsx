import React from 'react';
import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMediaQuery } from 'react-responsive';

import * as Sentry from '@sentry/react';

import Layout from './layouts/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import NoPage from './pages/404Page/NoPage';
import LinksPage from './pages/LinksPage/LinksPage';
import ContactPage from './pages/ContactPage/ContactPage';

// Main title in the browser
const siteTitle = 'Elio Di Nino';

// Specifying what size to consider mobile
const mobileSize = 800;

// Customized MUI theme
let theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontWeightMedium: 400,
    fontFamily: [
      'Helvetica',
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
    button: {
      textTransform: 'none',
    },
    h1: {
      fontSize: '3rem',
      fontFamily: '"Overpass Mono", monospace',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1.6rem',
      fontFamily: '"Overpass Mono", monospace',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2.5rem',
      fontFamily: '"Overpass Mono", monospace',
      fontWeight: 500,
    },
    h3: {
      fontSize: '2.1rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.6rem',
      fontFamily: '"Overpass Mono", monospace',
      fontWeight: 600,
    },
  },
});
theme = responsiveFontSizes(theme);

// Main app component
function App() {
  // For layouts on different devices
  const isMobile = useMediaQuery({
    query: '(max-width: ' + mobileSize + 'px)',
  });
  const isDesktopOrLaptopOrTablet = useMediaQuery({
    query: '(min-width: ' + (mobileSize + 1) + 'px)',
  });

  const layout = {
    hideHeaderPaths: ['/links'],
    hideFooterPaths: ['/links'],
    isMobile: isMobile,
  };

  const SentryRoutes = Sentry.withSentryReactRouterV7Routing(Routes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SentryRoutes>
        {/* Hide the footer and header on the links page */}
        <Route element={<Layout layout={layout} />}>
          <Route
            path="/"
            element={
              <HomePage
                isMobile={isMobile}
                isDesktopOrLaptopOrTablet={isDesktopOrLaptopOrTablet}
              />
            }
          />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route
            path="/links"
            element={
              <LinksPage
                pageTitle="Links"
                siteTitle={siteTitle}
                isMobile={isMobile}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                pageTitle="Contact"
                siteTitle={siteTitle}
                isMobile={isMobile}
                isDesktopOrLaptopOrTablet={isDesktopOrLaptopOrTablet}
              />
            }
          />
          {/* 404 Page */}
          <Route
            path="*"
            element={<NoPage pageTitle="404" siteTitle={siteTitle} />}
          />
        </Route>
      </SentryRoutes>
    </ThemeProvider>
  );
}

export default App;
