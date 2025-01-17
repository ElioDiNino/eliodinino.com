import * as Sentry from '@sentry/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

Sentry.init({
  dsn: 'https://0656a3ffc6ab7d8195bdf491eea907b3@o4508218594361344.ingest.us.sentry.io/4508495715303424',
  environment: import.meta.env.MODE,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0,
  // Which URLs distributed tracing should be enabled one
  tracePropagationTargets: ['localhost', /^https:\/\/eliodinino\.com/, /^https:\/\/.*--eliodinino\.netlify\.app/],
  // Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
