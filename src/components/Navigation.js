import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IonToolbar } from '@ionic/react';

const Navigation = () => {
  return (
    <div>
      <IonToolbar color={'light'}>
          <Link to="/" className="item" style={{display: 'inline-block', padding: '7px 20px'}}>Home</Link>
          <Link to="/colors" className="item" style={{display: 'inline-block', padding: '7px 20px'}}>Colors</Link>
      </IonToolbar>
      <main className="ui main text container" style={{paddingTop: '2rem'}}>
          <Outlet />
      </main>
    </div>
  );
};

export default Navigation;