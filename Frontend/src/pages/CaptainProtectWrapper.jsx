import React, { useContext, useEffect, useState } from 'react';
import { CaptainDataContext } from '../Context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem('captainToken');
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate('/captain-login');
    } else {
      axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        if (response.status === 200) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      }).catch(err => {
        console.log(err);
        localStorage.removeItem('captainToken');
        navigate('/captain-login');
      });
    }
  }, [token, navigate, setCaptain]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {children}
    </>
  );
};

export default CaptainProtectWrapper;
