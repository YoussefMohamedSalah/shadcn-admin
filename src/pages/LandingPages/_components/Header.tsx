import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#ffffff] w-full">
      <div className="mx-auto px-[14px] py-[6px] flex justify-between items-center">
        <div className="text-lg font-bold">
          <Logo className={"h-7 w-auto"} />
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/landing" className="px-3 py-2 rounded-md text-sm font-bold text-gray-500 hover:text-[#ec6726]">
            Our Company
          </Link>
          <Menu as="div" className="relative">
            <Menu.Button className="px-3 py-2 rounded-md text-sm font-medium">
              Media
            </Menu.Button>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg border border-gray-200">
                <Menu.Item>
                  {(active: boolean) => (
                    <Link
                      to="/landing"
                      className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm`}
                    >
                      Submenu 1
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {(active: boolean) => (
                    <Link
                      to="/landing"
                      className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm`}
                    >
                      Submenu 2
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>

          <Link to="/landing" className="px-3 py-2 rounded-md text-sm font-bold text-gray-500 hover:text-[#ec6726]">
            Opportunity
          </Link>
          <Link to="/landing" className="px-3 py-2 rounded-md text-sm font-bold text-gray-500 hover:text-[#ec6726]">
            Contact Us
          </Link>
          <Link to="/landing" className="px-3 py-2 rounded-md text-sm font-bold text-gray-500 hover:text-[#ec6726]">
            Shop
          </Link>
          <Link to={ROUTES.LOGIN} className="px-3 py-2 rounded-md text-sm font-bold text-gray-500 hover:text-[#ec6726]">
            <div className="flex gap-1 items-center content-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
              Login
            </div>
          </Link>
          <Link to={ROUTES.REGISTER} className="px-3 py-2 rounded-md text-sm font-bold text-gray-500 hover:text-[#ec6726]">
            <div className="flex gap-1 items-center content-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
              </svg>
              Register
            </div>
          </Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <nav className="px-2 pt-2 pb-4 space-y-1">
            <Menu as="div" className="relative">
              <Menu.Button className="block px-3 py-2 rounded-md text-base font-medium bg-gray-200 w-full text-left">
                Menu 1
              </Menu.Button>
              <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="mt-2 bg-white text-gray-800 rounded-md shadow-lg border border-gray-200">
                  <Menu.Item>
                    {(active: boolean) => (
                      <Link
                        to="/landing"
                        className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm`}
                      >
                        Submenu 1
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {(active: boolean) => (
                      <Link
                        to="/landing"
                        className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm`}
                      >
                        Submenu 2
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
            <Link
              to="/landing"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Menu 2
            </Link>
            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium">
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
