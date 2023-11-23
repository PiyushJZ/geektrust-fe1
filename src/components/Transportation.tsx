import { ChangeEvent, useId, useState } from 'react';

import { useStore } from '../store';

const Transportation = ({
  toggle,
  dist,
}: {
  toggle: boolean;
  dist: number;
}) => {
  const vehicles = useStore(state => state.vehicles);
  const vehicle_names = useStore(state => state.vehicle_names);
  const [radio, setRadio] = useState<string>();
  const radioId = useId();

  const handleChange = (radioChangeEvent: ChangeEvent<HTMLInputElement>) => {
    radioChangeEvent.stopPropagation();
    if (radio) useStore.getState().removeVehicle(radio);
    const val = radioChangeEvent.target.id.split('-')[0];
    setRadio(val);
    useStore.getState().addVehicle(val);
  };

  return (
    <>
      <h2 className='text-gray-900 font-medium py-2'>Select Transportation</h2>
      <ul className='space-y-3'>
        {vehicles.map((vehicle, index) => {
          return (
            <li
              key={index}
              className='flex items-center gap-x-2.5'
            >
              <input
                type='radio'
                name={`vehicle-${radioId}`}
                id={`${vehicle.name}-${radioId}`}
                className='form-radio cursor-pointer border-gray-400 text-indigo-600 focus:ring-indigo-600 duration-150'
                onChange={handleChange}
                disabled={
                  !toggle ||
                  vehicle.max_distance < dist ||
                  vehicle_names.filter(item => item === vehicle.name).length >=
                    vehicle.total_no
                }
              />
              <label
                htmlFor={`${vehicle.name}-${radioId}`}
                className='text-sm cursor-pointer text-gray-700 font-medium'
              >
                {vehicle.name} ({vehicle.total_no})
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Transportation;
