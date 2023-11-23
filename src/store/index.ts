import { create } from 'zustand';

import { fetchWrapper } from '../config';
import { Planet, Vehicle } from '../types';

interface AppState {
  planets: Planet[];
  vehicles: Vehicle[];
  planet_names: string[];
  vehicle_names: string[];
  addPlanet: (planetName: string) => void;
  removePlanet: (planetName: string) => void;
  resetPlanets: () => void;
  addVehicle: (vehicleName: string) => void;
  removeVehicle: (vehicleName: string) => void;
  resetVehicles: () => void;
  fetchPlanets: () => Promise<void>;
  fetchVehicles: () => Promise<void>;
}

export const useStore = create<AppState>(set => ({
  planets: [] as Planet[],
  vehicles: [] as Vehicle[],
  planet_names: [] as string[],
  vehicle_names: [] as string[],

  addPlanet: (planetName: string) =>
    set(state => ({ planet_names: [...state.planet_names, planetName] })),
  removePlanet: (planetName: string) =>
    set(state => ({
      planet_names: state.planet_names.filter(planet => planet !== planetName),
    })),
  resetPlanets: () => set(() => ({ planet_names: [] })),

  addVehicle: (vehicleName: string) =>
    set(state => ({ vehicle_names: [...state.vehicle_names, vehicleName] })),
  removeVehicle: (vehicleName: string) =>
    set(state => ({
      vehicle_names: state.vehicle_names.filter(
        vehicle => vehicle !== vehicleName
      ),
    })),
  resetVehicles: () => set(() => ({ vehicle_names: [] })),

  fetchPlanets: async () => {
    const response = await fetchWrapper.get('planets');
    const data: Planet[] = response.data;
    set(() => ({ planets: data }));
  },

  fetchVehicles: async () => {
    const response = await fetchWrapper.get('vehicles');
    const data: Vehicle[] = response.data;
    set(() => ({ vehicles: data }));
  },
}));
