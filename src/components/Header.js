import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { Link } from 'react-scroll';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between items-center px-5 py-2 bg-primary text-white relative">
      <h1 className="font-bold text-black">PORTFOLIO</h1>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-6">
          {['home', 'about', 'projects', 'resume', 'contact'].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={-50}
                className="hover:underline cursor-pointer capitalize"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <Bars3Icon
          className="h-6 w-6 cursor-pointer text-black"
          onClick={() => setToggleMenu(!toggleMenu)}
        />
      </div>

      {/* Mobile Nav Menu */}
      {toggleMenu && (
        <nav className="absolute top-14 left-0 w-full bg-blue-300 !text-black active: px-5 py-4 z-50 shadow-md md:hidden">
          <ul className="flex flex-col gap-3">
            {['home', 'about', 'projects', 'resume', 'contact'].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  onClick={() => setToggleMenu(false)}
                  className="block px-4 py-2 rounded border border-black text-black active:bg-gray-200 active:text-black transition duration-200"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
