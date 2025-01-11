import { Link } from 'react-router-dom';
import { planetsData } from '../data/planetsData';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center px-6 py-4 bg-darkBlue border-b border-gray border-opacity-30">
      {/* Logo */}
      <h1 className="text-2xl font-semibold font-antonio uppercase">
        The Planets
      </h1>
      {/* Hamburger Icon for Mobile */}
      <button
        className="block md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="17"
          viewBox="0 0 24 17"
          fill="none"
        >
          <g opacity="0.248746">
            <rect width="24" height="3" fill="white" />
            <rect y="7" width="24" height="3" fill="white" />
            <rect y="14" width="24" height="3" fill="white" />
          </g>
        </svg>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-4 font-spartan uppercase">
        {planetsData.map((planet) => (
          <Link
            key={planet.name}
            to={`/${planet.name.toLowerCase()}`}
            style={{
              borderColor: planet.color, // Use dynamic color for the border
            }}
            className="relative text-white pb-1 hover:before:content-[''] hover:before:absolute hover:before:top-[-18px] hover:before:left-0 hover:before:right-0 hover:before:h-[4px] hover:before:bg-transparent hover:before:border-t-2 hover:before:border-[inherit]"
          >
            {planet.name}
          </Link>
        ))}
      </div>

      {/* Mobile Flyout Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-darkBlue z-50 text-lg font-spartan font-normal tracking-widest uppercase">
          <ul className="flex flex-col space-y-4 p-6">
            {planetsData.map((planet, index) => (
              <li
                key={planet.name}
                className={`flex items-center justify-between py-5 ${
                  index !== planetsData.length - 1
                    ? 'border-b border-white border-opacity-10'
                    : ''
                }`}
              >
                {/* Planet Circle */}
                <div className="flex items-center space-x-4">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: planet.color }}
                  ></div>
                  <Link
                    to={`/${planet.name.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {planet.name}
                  </Link>
                </div>
                {/* Arrow */}
                <div>
                  <Link
                    to={`/${planet.name.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                    >
                      <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white" />
                    </svg>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
