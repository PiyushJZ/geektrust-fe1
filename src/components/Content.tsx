import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Destination } from '.';
import { useStore } from '../store';

const Content = () => {
  const planets = useStore(state => state.planets);

  useEffect(() => {
    useStore.getState().fetchPlanets();
    useStore.getState().fetchVehicles();
  }, []);

  return (
    <div>
      <div className='text-3xl text-center capitalize'>finding falcone!</div>
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
      <div className='flex justify-center items-center p-4'>
        <Link
          className='inline-block capitalize rounded bg-indigo-600 px-8 py-3 text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500'
          to='result'
        >
          find falcone
        </Link>
      </div>
    </div>
  );
};

export default Content;
