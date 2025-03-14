import React, { useContext } from 'react';  
import { Route, Routes } from 'react-router-dom';
import Start from './pages/Start';
import Home from './pages/Home';
import { UserDataContext } from './context/UserContext'; 
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import UserProtectWrapper from './pages/UserProtectWrapper';
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome';
import CaptainLogout from './pages/CaptainLogout'; // Import CaptainLogout

const App = () => {
    

  return (
    <div>
      <Routes>
      <Route path="/" element={<Start />} />
        <Route path="/home" element={<UserProtectWrapper>
          <Home />
          </UserProtectWrapper>
          }/>
         <Route path='/captain-home' element={<CaptainHome/>} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path='/user/logout'
          element={<UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
          } />
        <Route path='/captain/logout'
          element={<UserProtectWrapper>
            <CaptainLogout />
          </UserProtectWrapper>
          } />
      </Routes>
    </div>
  );
};

export default App;
