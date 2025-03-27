import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 onClick={() => { props.setVehiclePanelOpen(false) }}
                className='p-1 text-center w-[93%] absolute top-0 '><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>
                Choose a vehicle
            </h3>
            <div  onClick={()=>{
props.setConfirmRidePanel(true)
            }}
            className='p-3  border-2 active:border-black mb-2 rounded-xl flex w-full items-center justify-between '>
                <img className='h-10' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                <div className=' w-1/2 ml-2'>
                    <h4 className='font-medium text-base'> Car <span><i className='ri-user-3-fill'></i>4</span> </h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs  text-gray-600'>Affordable, Compact rides</p>
                </div>
                <h2 className='text-lg font-semibold '>Rs192.30</h2>
            </div>

            <div className='p-3  border-2 active:border-black mb-2 rounded-xl flex w-full items-center justify-between '>
                <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1571927853/assets/39/c1c2c7-61eb-4432-9bac-728b974207e7/original/cityscoot-icon-mobile.png" alt="" />
                <div className='ml-2 w-1/2 '>
                    <h4 className='font-medium text-base'> Bike <span><i className='ri-user-3-fill'></i>2</span> </h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs  text-gray-600'>Affordable Bike Rides</p>
                </div>
                <h2 className='text-lg font-semibold '>Rs150.30</h2>
            </div>

            <div className='p-3  border-2 active:border-black mb-2 rounded-xl flex w-full items-center justify-between '>
                <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className=' w-1/2 -ml-2 '>
                    <h4 className='font-medium text-base'>Auto <span><i className='ri-user-3-fill'></i>5</span> </h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs  text-gray-600'>Affordable Auto Rides</p>
                </div>
                <h2 className='text-lg font-semibold '>Rs180.30</h2>
            </div></div>
    )
}

export default VehiclePanel