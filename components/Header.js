import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className='sticky w-full h-20 shadow-md md:shadow-none z-[100] px-5 md:px-12'>
      <div className='flex items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a>
            <img src={'/logo.png'} alt='logo' className='cursor-pointer' />
          </a>
        </Link>

        <div className='flex flex-1 text-sm'>
          <ul className='hidden md:flex space-x-5 mt-2 ml-auto uppercase'>
            <li className='group'>
              <Link href='#'>Home</Link>
            </li>
            <li className='group'>
              <Link href='#'>Properties</Link>
            </li>
            <li className='group'>
              <Link href='#'>Services</Link>
            </li>
            <li className='group'>
              <Link href='#'>Exchange</Link>
            </li>
            <li className='group'>
              <Link href='#'>Login</Link>
            </li>
            <li>
              <Link href='/account/register'>
                <a className='bg-[#EC3335] text-white rounded py-2 px-4 shadow-lg'>
                  Get Started
                </a>
              </Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden cursor-pointer flex ml-auto'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <img src={'/logo.png'} alt='logo' />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>

          <div className='py-4 flex flex-col'>
            <ul className='text-base'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <Link href='#'>Home</Link>
              </li>

              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <Link href='#'>Properties</Link>
              </li>

              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <Link href='#'>Services</Link>
              </li>

              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <Link href='#'>Exchange</Link>
              </li>

              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <Link href='#'>Login</Link>
              </li>

              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <Link href='#' className='bg-[#EC3335]'>
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
