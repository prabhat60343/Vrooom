import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [color, setColor] = useState('');
  const [plate, setPlate] = useState('');
  const [capacity, setCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  //const [contactNo, setContactNo] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    const newCaptainData = {
      fullname: { firstname: firstName, lastname: lastName },
      email: email,
      password: password,
      contactNo: contactNo, // Added contact number field
      vehicle: {
        color: color,
        plate: plate,
        capacity: Number(capacity),
        vehicleType: vehicleType,
      },
    };

    setCaptainData(newCaptainData);


    // Reset fields after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setColor('');
    setPlate('');
    setCapacity('');
    setVehicleType('');
    //setContactNo(''); // Reset contact number
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img
          className='w-16 mb-10'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
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
          <input required className='bg-[#eeeeee] mb-3 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base' type="text" placeholder='Vehicle Color' value={color} onChange={(e) => setColor(e.target.value)} />
          <input required className='bg-[#eeeeee] mb-3 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base' type="text" placeholder='Vehicle Plate Number' value={plate} onChange={(e) => setPlate(e.target.value)} />
          <input required className='bg-[#eeeeee] mb-3 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base' type="number" placeholder='Vehicle Capacity' value={capacity} onChange={(e) => setCapacity(e.target.value)} />
          <select required className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg' value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
            <option value="">Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="auto">Auto</option>
          </select>

          <button type="submit" className='bg-[#111] text-white font-semibold mb-7 rounded-lg px-4 py-2 w-full text-lg'>
            Create Account
          </button>
        </form>

        <p className='text-center mb-6'>Already have an account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  );
};

export default CaptainSignup;
