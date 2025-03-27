import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainLogout = () => {
    const CaptainToken = localStorage.getItem('token');
    const navigate = useNavigate();

    axios.get(`${import.meta.env.VITE_API_URL}/Captain-logout`, {
        headers: {
            Authorization: `Bearer ${CaptainToken}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('token');
            navigate('/Captain-login');
        }
    });

    return (
        <div>CaptainLogout</div>
    );
};

export default CaptainLogout;