import React from 'react';
import {
  useLocation,
  useNavigationType,
  createRoutesFromChildren,
  matchRoutes,
} from 'react-router';

import * as Sentry from '@sentry/react';
import { init } from '@plausible-analytics/tracker';

Sentry.init({
  dsn: 'https://0656a3ffc6ab7d8195bdf491eea907b3@o4508218594361344.ingest.us.sentry.io/4508495715303424',
  environment: import.meta.env.MODE,
  integrations: [
    Sentry.replayIntegration(),
    Sentry.reactRouterV7BrowserTracingIntegration({
      useEffect: React.useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes,
    }),
  ],
  // Tracing
  tracesSampleRate: 0.25,
  // Which URLs distributed tracing should be enabled one
  tracePropagationTargets: [
    'localhost',
    /^https:\/\/eliodinino\.com/,
    /^https:\/\/.*--eliodinino\.netlify\.app/,
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

init({
  domain: 'eliodinino.com',
  endpoint: 'https://ingest.eliodinino.com/analytics/api/event',
  hashBasedRouting: true,
  outboundLinks: true,
  fileDownloads: true,
  formSubmissions: true,
});
