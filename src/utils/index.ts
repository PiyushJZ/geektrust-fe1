import { fetchWrapper } from '../config';
import { useStore } from '../store';
import { FindResponse } from '../types';

const getToken = async (): Promise<{ token: string }> => {
  const response = await fetchWrapper.post(
    'token',
    {},
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );
  return response.data;
};

export const findFalcone = async () => {
  const { token } = await getToken();

  const response = await fetchWrapper.post(
    'find',
    {
      token,
      planet_names: useStore.getState().planet_names,
      vehicle_names: useStore.getState().vehicle_names,
    },
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
  const data: Partial<FindResponse> = response.data;
  return data;
};
