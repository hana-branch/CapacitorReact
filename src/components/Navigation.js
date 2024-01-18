import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Navigation = () => {
  return (
    <div className="ui main text container" >
      <nav className="ui fixed inverted menu" style={{paddingTop: 'env(safe-area-inset-top)' }}>
        <div className="branch-journeys-top"></div>
        <div className="ui container">
          <Link to="/" className="item">
            Home
          </Link>
          <Link to="/colors" className="item">Colors</Link>
        </div>
      </nav>
      <div className="ui container" style={{"margin-top": "70px"}}>
          <main className="ui main text container">
            <Outlet />
          </main>
      </div>
    </div>
  );
};

export default Navigation;