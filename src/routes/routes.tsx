import { RouteObject } from 'react-router-dom';

import { Content, Navbar, NotFound, Result } from '../components';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Content />,
      },
      {
        path: 'result',
        element: <Result />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
