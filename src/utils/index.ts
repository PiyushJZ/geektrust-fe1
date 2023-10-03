import { fetchWrapper } from '../config';
import { FindResponse } from '../types';

const getToken = async () => {
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
      planet_names: ['Donlon', 'Enchai', 'Pingasor', 'Sapir'],
      vehicle_names: ['Space pod', 'Space pod', 'Space ship', 'Space shuttle'],
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
