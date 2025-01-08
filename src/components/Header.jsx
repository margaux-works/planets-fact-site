import { Link } from 'react-router-dom';
import { planetsData } from '../data/planetsData';

export const Header = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-darkBlue border-b border-gray-600">
      <h1 className="text-xl font-bold font-antonio uppercase">The Planets</h1>
      <div className="space-x-4 font-spartan uppercase">
        {planetsData.map((planet) => (
          <Link
            key={planet.name}
            to={`/${planet.name.toLowerCase()}`}
            className="hover:underline"
          >
            {planet.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
