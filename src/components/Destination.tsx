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
  const [dist, setDist] = useState<number>(Number.MAX_SAFE_INTEGER);

  const handleChange = (selectEvent: ChangeEvent<HTMLSelectElement>) => {
    selectEvent.stopPropagation();
    if (selectValue) useStore.getState().removePlanet(selectValue);
    const val = selectEvent.target.value;
    setSelectValue(val);
    useStore.getState().addPlanet(val);
    setToggle(true);
    const dist =
      planets.find(item => item.name === val)?.distance ??
      Number.MAX_SAFE_INTEGER;

    setDist(dist);
  };

  return (
    <>
      <div className='flex flex-col justify-between '>
        <label
          htmlFor='vehicles'
          className='block text-lg font-medium text-gray-900'
        >
          Destination {destination}
        </label>

        <select
          name='vehicles'
          defaultValue='select'
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
        dist={dist}
        toggle={toggle}
      />
    </>
  );
};

export default Destination;
