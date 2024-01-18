import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './components/App'
import Navigation from './components/Navigation';
import Colors from './components/Colors';

const RoutesApp = () => {
  return (
    <div className="ui container">
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />} exact>
            <Route index element={<App />} />
            <Route path="/colors" element={<Colors />} exact />
          </Route>
        </Routes>
      </Router>
    </div>    
  );
}

export default RoutesApp;