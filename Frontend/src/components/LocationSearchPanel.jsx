import React from 'react';

const LocationSearchPanel = (props) => {
  // sample array for location
  const locations = [
    "24B kapoors villa",
    "24B sharma's villa",
    "24B sharma's villa",
    "24B sharma's villa",
  ];

  return (
    <div>
      {locations.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanelOpen(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 items-center border-2 p-3 rounded-xl my-2 justify-start border-gray-50 active:border-black"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill items-center"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;