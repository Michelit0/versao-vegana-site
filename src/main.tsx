import React from 'react';
import ReactDOM from 'react-dom/client';
import { SiteApp } from './site/components/SiteApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SiteApp />
  </React.StrictMode>,
);
