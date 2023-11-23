import { MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Destination, TimeTaken } from '.';
import { useStore } from '../store';
import { findFalcone } from '../utils';

const Content = () => {
  const planets = useStore(state => state.planets);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    useStore.getState().fetchPlanets();
    useStore.getState().fetchVehicles();
  }, []);

  const handleClick = async (clickEvent: MouseEvent) => {
    clickEvent.stopPropagation();
    const planet_names = useStore.getState().planet_names;
    const vehicle_names = useStore.getState().vehicle_names;
    if (planet_names.length !== 4 && vehicle_names.length !== 4) {
      setError(true);
      return;
    }
    setError(false);
    const data = await findFalcone()
    console.log(data)
    navigate('result');
  };

  return (
    <div>
      <div className='text-5xl pb-6 text-center capitalize'>
        finding falcone!
      </div>
      <div className='text-3xl text-center'>
        Select planets you want to search in:
      </div>
      <div className='flex justify-evenly p-4'>
        <div className='rounded-xl bg-white ring-2 ring-indigo-200 sm:p-6 lg:p-8'>
          <Destination
            destination={1}
            planets={planets}
          />
        </div>
        <div className='rounded-xl bg-white p-4 ring-2 ring-indigo-200 sm:p-6 lg:p-8'>
          <Destination
            destination={2}
            planets={planets}
          />
        </div>
        <div className='rounded-xl bg-white p-4 ring-2 ring-indigo-200 sm:p-6 lg:p-8'>
          <Destination
            destination={3}
            planets={planets}
          />
        </div>
        <div className='rounded-xl bg-white p-4 ring-2 ring-indigo-200 sm:p-6 lg:p-8'>
          <Destination
            destination={4}
            planets={planets}
          />
        </div>
      </div>
      <div className='flex justify-center'>
        <TimeTaken />
      </div>
      <div className='flex flex-col justify-center items-center p-4'>
        <button
          className='inline-block capitalize rounded bg-indigo-600 px-8 py-3 text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500'
          onClick={handleClick}
        >
          find falcone
        </button>
        {error && (
          <p className='text-lg text-red-500 p-4'>
            !!! All destinations and transportations not selected !!!
          </p>
        )}
      </div>
    </div>
  );
};

export default Content;
