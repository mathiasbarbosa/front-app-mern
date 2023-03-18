import React from 'react';
import './App.css';
// react router dom import
import { BrowserRouter as Router  } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { KatasPage } from './pages/KatasPage';
import { KatasDetailPage } from './pages/KatasDetailPage';
import {  AppRoutes } from './routes/Routes';
import { StickyFooter } from './components/dashboard/StickyFooter';


// import LoginForm from './components/forms/LoginForm';
// import RegisterForm from './components/forms/RegisterForm';

function App() {
  return (
    <div className="App">
     <Router> 
        <AppRoutes/>
     </Router>
     <StickyFooter />
    </div>
  );
}

export default App;
