import { ChangeEvent, useState } from 'react';

import { Transportation } from '.';
import { useStore } from '../store';
import { Planet } from '../types';

const Destination = ({
  planets,
  destination,
}: {
  planets: Planet[];
  destination: number;
}) => {
  const planet_names = useStore(state => state.planet_names);
  const [selectValue, setSelectValue] = useState<string>();
  const [toggle, setToggle] = useState<boolean>(false);
  const [reset, setReset] = useState<boolean>(false);

  const handleChange = (selectEvent: ChangeEvent<HTMLSelectElement>) => {
    if (selectValue) useStore.getState().removePlanet(selectValue);
    setSelectValue(selectEvent.target.value);
    useStore.getState().addPlanet(selectEvent.target.value);
    setToggle(true);
    setReset(true);
  };

  return (
    <>
      <div className='flex flex-col justify-between '>
        <label
          htmlFor='HeadlineAct'
          className='block text-lg font-medium text-gray-900'
        >
          Destination {destination}
        </label>

        <select
          name='HeadlineAct'
          defaultValue='select'
          id='HeadlineAct'
          className='p-2 w-full text-lg rounded-md border-gray-300 sm:text-sm'
          onChange={handleChange}
          value={selectValue}
        >
          <option
            disabled
            value='select'
          >
            Select
          </option>
          {planets.map((planet, index) => {
            return (
              <option
                value={planet.name}
                key={index}
                disabled={planet_names.includes(planet.name)}
              >
                {planet.name}
              </option>
            );
          })}
        </select>
      </div>
      <Transportation
        reset={reset}
        toggle={toggle}
      />
    </>
  );
};

export default Destination;
