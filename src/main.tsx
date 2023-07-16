import { createRoot } from 'react-dom/client';
import React from 'react';
import ThemeProvider from './theme/index.tsx';
import App from './App.tsx';
import '@fontsource-variable/raleway';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
