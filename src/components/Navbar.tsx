import { Link, Outlet } from 'react-router-dom';

import Footer from './Footer';

const Navbar = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <header className='bg-white'>
        <div className='mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-1 items-center justify-end'>
            <div className='sm:flex sm:gap-4'>
              <Link
                className='block rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700'
                to='/'
              >
                Reset
              </Link>

              <a
                className='hidden rounded-md bg-indigo-100 px-5 py-2.5 text-sm font-medium text-indigo-600 transition hover:text-indigo-600/75 sm:block'
                href='https://www.geektrust.com/'
                target='_blank'
              >
                GeekTrust Home
              </a>
            </div>
          </div>
        </div>
      </header>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Navbar;
