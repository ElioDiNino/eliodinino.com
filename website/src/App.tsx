import React from 'react';
import './App.css';

import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Layout from './layouts/MainLayout';
import HomePage from "./pages/HomePage/HomePage";
import NoPage from "./pages/404Page/NoPage";
import LinksPage from "./pages/LinksPage/LinksPage";
import ContactPage from "./pages/ContactPage/ContactPage";

const siteTitle = "Elio Di Nino";

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route element={<Layout hideHeaderPaths={['/links']} hideFooterPaths={['/links']} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/links" element={<LinksPage pageTitle="Links" siteTitle={siteTitle} />} />
          <Route path="/contact" element={<ContactPage pageTitle="Contact" siteTitle={siteTitle} />} />
          <Route path="*" element={<NoPage pageTitle="404" siteTitle={siteTitle} />} />
        </Route>
      </Routes>
    </ThemeProvider >
  );
}

export default App;
