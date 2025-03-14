import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../Context/CaptainContext';

const CaptainSignup = () => {

  const navigate = useNavigate(); // Fixed useNavigate hook usage
  const { setCaptain } = useContext(CaptainDataContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');
 
  const [error, setError] = useState(''); // Added error state

  const submitHandler = async(e) => {
    e.preventDefault();

    const captainData = {
      fullname: { firstname: firstName, lastname: lastName },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor, // Ensure field names match backend validation
        plate: vehiclePlate, // Ensure field names match backend validation
        capacity: Number(vehicleCapacity), // Ensure field names match backend validation
        vehicleType: vehicleType,
      },
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
      if(response.status === 201){
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home'); // Corrected navigation path
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorMessages = error.response.data.errors.map(err => err.msg).join(', ');
        setError(`Bad Request: ${errorMessages}`);
        console.error('Error details:', error.response.data); // Log error details
      } else {
        setError('An unexpected error occurred. Please try again later.');
        console.error('Error details:', error); // Log error details
      }
    }

    // Reset fields after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img
          className='w-16 mb-10'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxFrScuo1fj_IRd6BltUOBFXj7Q5lOzNvdQ&s"
          alt="Uber Logo"
        />

        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-7'>
            <input required className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base' type="text" placeholder='First name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input required className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base' type="text" placeholder='Last name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>

          <h3 className='text-lg font-medium mb-2'>Enter Your Email</h3>
          <input required className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com' value={email} onChange={(e) => setEmail(e.target.value)} />

          <h3 className='text-lg font-medium mb-3'>Enter Your Password</h3>
          <input required className='bg-[#eeeeee] mb-8 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />

          <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <input required className='bg-[#eeeeee] mb-3 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base' type="text" placeholder='Vehicle Color' value={vehicleColor} onChange={(e) => setVehicleColor(e.target.value)} minLength="3" />
          <input required className='bg-[#eeeeee] mb-3 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base' type="text" placeholder='Vehicle Plate Number' value={vehiclePlate} onChange={(e) => setVehiclePlate(e.target.value)} minLength="10" />
          <input required className='bg-[#eeeeee] mb-3 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base' type="number" placeholder='Vehicle Capacity' min="1" value={vehicleCapacity} onChange={(e) => setVehicleCapacity(e.target.value)} />
          
          <select required className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg' value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
            <option value="">Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="auto">Auto</option>
          </select>

          {error && <p className='text-red-500 mb-4'>{error}</p>} {/* Display error message */}

          <button type="submit" className='bg-[#111] text-white font-semibold mb-7 rounded-lg px-4 py-2 w-full text-lg'>
            Create Account
          </button>
        </form>

        <p className='text-center mb-6'>Already have an account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div></div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
    </div>
  );
};

export default CaptainSignup;
