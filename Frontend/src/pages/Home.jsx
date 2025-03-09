import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='bg-cover bg-center h-screen w-full bg-[url(https://images.unsplash.com/photo-1567536303373-0eb3957ba696?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] flex flex-col justify-between pt-5'>
      {/* Uber Logo */}
      <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />

     
      <div className='bg-white py-4 px-10 pb-7 mx-5 rounded-lg shadow-lg'>
        <h2 className='text-3xl font-bold mb-4'>Get to your destination easily with UBER</h2>
        <Link 
          to="/login" 
          className='w-full bg-black text-white py-3 rounded-full mt-2 hover:bg-gray-800 transition duration-300 cursor-pointer flex justify-center'
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Home;
