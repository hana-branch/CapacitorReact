import React from 'react';
import ReactDOM from 'react-dom';
import RoutesApp from './routes';
import { BranchDeepLinks, BranchInitEvent } from 'capacitor-branch-deep-links';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesApp />
  </React.StrictMode>
);