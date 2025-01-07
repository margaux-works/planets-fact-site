import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-darkBlue border-b border-gray-600">
      <h1 className="text-xl font-bold">The Planets</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Earth
        </Link>
        {/* Add more planet links here later */}
      </div>
    </nav>
  );
};
