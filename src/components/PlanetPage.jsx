import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { planetsData } from '../data/planetsData';

export const PlanetPage = () => {
  const { planetName } = useParams(); // Get the planet name from the URL
  const planet = planetsData.find(
    (p) => p.name.toLowerCase() === planetName.toLowerCase()
  );

  const [activeTab, setActiveTab] = useState('overview');

  const getContent = () => {
    switch (activeTab) {
      case 'structure':
        return planet.structure.content;
      case 'geology':
        return planet.geology.content;
      default:
        return planet.overview.content;
    }
  };

  return (
    <div className="p-6">
      <div className="text-center">
        {/* Planet and Geology Images */}
        <div className="relative flex justify-center mt-6">
          {/* Base Planet Image */}
          <img
            src={
              activeTab === 'structure'
                ? planet.images.internal
                : planet.images.planet
            }
            alt={`${planet.name} ${activeTab}`}
            className="h-64"
          />
          {/* Geology Image Overlay */}
          {activeTab === 'geology' && (
            <img
              src={planet.images.geology}
              alt={`${planet.name} geology`}
              className="absolute top-0 h-32"
            />
          )}
        </div>

        {/* Planet Title and Content */}
        <h2 className="text-4xl font-bold mt-6">{planet.name}</h2>
        <p className="mt-4 text-gray-400">{getContent()}</p>
        <a
          href={planet.overview.source}
          target="_blank"
          rel="noopener noreferrer"
          className="underline mt-2 block"
        >
          Source: Wikipedia
        </a>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => setActiveTab('overview')}
          className={`text-sm uppercase font-bold ${
            activeTab === 'overview' ? 'text-lightBlue' : 'text-gray-400'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('structure')}
          className={`text-sm uppercase font-bold ${
            activeTab === 'structure' ? 'text-lightBlue' : 'text-gray-400'
          }`}
        >
          Internal Structure
        </button>
        <button
          onClick={() => setActiveTab('geology')}
          className={`text-sm uppercase font-bold ${
            activeTab === 'geology' ? 'text-lightBlue' : 'text-gray-400'
          }`}
        >
          Surface Geology
        </button>
      </div>

      {/* Stats */}
      <div className="mt-10 flex flex-col md:flex-row justify-around">
        <div>
          <p className="text-sm uppercase text-gray-400">Rotation Time</p>
          <p className="text-xl font-bold">{planet.rotation}</p>
        </div>
        <div>
          <p className="text-sm uppercase text-gray-400">Revolution Time</p>
          <p className="text-xl font-bold">{planet.revolution}</p>
        </div>
        <div>
          <p className="text-sm uppercase text-gray-400">Radius</p>
          <p className="text-xl font-bold">{planet.radius}</p>
        </div>
        <div>
          <p className="text-sm uppercase text-gray-400">Temperature</p>
          <p className="text-xl font-bold">{planet.temperature}</p>
        </div>
      </div>
    </div>
  );
};
