import React, { useContext } from 'react';  
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserContext, { UserDataContext } from './Context/UserContext';  
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';

const App = () => {
  const ans = useContext(UserDataContext);  

  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
      </Routes>
    </div>
  );
};

export default App;
