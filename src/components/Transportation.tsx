import { ChangeEvent, useState } from 'react';

import { useStore } from '../store';

const Transportation = ({
  toggle,
  reset,
}: {
  toggle: boolean;
  reset: boolean;
}) => {
  const vehicles = useStore(state => state.vehicles);
  const vehicle_names = useStore(state => state.vehicle_names);
  const [selectValue, setSelectValue] = useState<string>();
  const [selectReset, setSelectReset] = useState<boolean>(reset);

  const handleChange = (selectEvent: ChangeEvent<HTMLSelectElement>) => {
    if (selectValue) useStore.getState().removeVehicle(selectValue);
    setSelectValue(selectEvent.target.value);
    useStore.getState().addVehicle(selectEvent.target.value);
    setSelectReset(false);
    setSelectValue(undefined);
  };

  return (
    <div className='p-2'>
      <label
        htmlFor='HeadlineAct'
        className='block text-lg font-medium text-gray-900'
      >
        Transportation
      </label>

      <select
        name='HeadlineAct'
        id='HeadlineAct'
        defaultValue='select'
        className='p-2 w-full text-lg rounded-md border-gray-300 sm:text-sm'
        onChange={handleChange}
        disabled={!toggle}
        value={selectReset ? 0 : selectValue}
      >
        <option
          value='select'
          // disabled
        >
          Select
        </option>
        {vehicles.map((vehicle, index) => {
          return (
            <option
              value={vehicle.name}
              key={index}
              disabled={vehicle_names.includes(vehicle.name)}
            >
              {vehicle.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Transportation;
