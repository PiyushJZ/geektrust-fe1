import { useEffect, useState } from 'react';
import { useStore } from '../store';

const TimeTaken = () => {
  const vehicle_names = useStore(state => state.vehicle_names);
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const planets = useStore.getState().planets;
    const vehicles = useStore.getState().vehicles;
    const planet_names = useStore.getState().planet_names;
    const N = vehicle_names.length;
    let timeTaken = 0;
    for (let i = 0; i < N; i++) {
      const dist = planets.find(planet => planet.name === planet_names[i])
        ?.distance;
      const speed = vehicles.find(vehicle => vehicle.name === vehicle_names[i])
        ?.speed;
      if (dist && speed) timeTaken += dist / speed;
    }
    setTime(timeTaken);
  }, [vehicle_names]);

  return <div className='text-xl'>Time taken: {time}</div>;
};

export default TimeTaken;
