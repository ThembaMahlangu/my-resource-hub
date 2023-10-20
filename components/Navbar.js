import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Spin } from 'hamburger-react';

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (pathname) => {
    return router.pathname === pathname ? 'text-white font-bold font-mono' : 'text-gray-300 font-mono';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Large screens */}
      <nav className="hidden md:flex w-full items-center justify-between py-4 px-8 bg-gray-950 shadow-lg">
        <Link href="/" className="md:text-2xl font-bold text-primary font-mono text-white">
          Themba's Resource Hub
        </Link>

        <div className="hidden mr-72 sm:flex items-center space-x-4 flex-grow justify-center lg:space-x-8 lg:text-lg">
          <Link href="/" className={`nav-link ${isActive('/')}`}>
            Home
          </Link>
          <Link href="/components" className={`nav-link ${isActive('/components')}`}>
            Components
          </Link>
        </div>
      </nav>

      {/* Small screens */}
      <nav className={`md:hidden w-full z-50 py-3 px-8 ${isMenuOpen ? 'bg-black' : 'bg-gray-950'} shadow-lg`}>
        {/* Logo and hamburger button */}
        <div className="flex justify-between">
          <Link href="/" className="text-2xl font-bold text-primary text-white font-mono pt-2">
            T's Resource Hub
          </Link>
          <button
            type="button"
            className="block text-white hover:text-primary focus:text-primary focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <Spin className="h-6 w-6 fill-current" />
            ) : (
              <Spin className="h-6 w-6 fill-current" />
            )}
          </button>
        </div>

        {/* NavLinks for small screens */}
        {isMenuOpen && (
          <div className="my-4">
            <div className="space-y-4 mb-5 text-center">
              <Link href="/" className={`block nav-link ${isActive('/')}`}>
                Home
              </Link>
              <Link href="/components" className={`block nav-link ${isActive('/components')}`}>
                Components
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;