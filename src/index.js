import React from 'react';
import ReactDOM from 'react-dom';
import RoutesApp from './routes';
import { BranchDeepLinks, BranchInitEvent } from 'capacitor-branch-deep-links';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <IonHeader>
        <IonToolbar color={'dark'}>
          <IonTitle>Capacitor React App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <RoutesApp />
  </React.StrictMode>
);