import React from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import './styles.css';

function RootLayout({ children }) {
  const timestamp = new Date().toLocaleString();
  return (
    <html lang="en">
      <body>
        {children}
        <footer>Page rendered at {timestamp}</footer>
        <SpeedInsights />
      </body>
    </html>
  );
}

export default RootLayout;
