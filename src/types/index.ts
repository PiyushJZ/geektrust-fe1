export type Planet = {
  name: string;
  distance: number;
};

export type Vehicle = {
  name: string;
  total_no: number;
  max_distance: number;
  speed: number;
};

export type FindResponse = {
  planet_name: string;
  status: string;
  error: string;
};

export type State = {
  planets: Planet[];
  vehicles: Vehicle[];
};
