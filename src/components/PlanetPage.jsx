import { useState } from 'react';
import { planetsData } from '../data/planetsData';
import PlanetImage from './PlanetImg';

export const PlanetPage = () => {
  const [activeTab, setActiveTab] = useState('overview'); // set overview tab as default tab
  const planet = planetsData[0];

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
        <PlanetImage
          image={
            activeTab === 'structure'
              ? planet.images.internal
              : activeTab === 'geology'
              ? planet.images.geology
              : planet.images.planet
          }
        />
        <h2 className="text-4xl font-bold">{planet.name}</h2>
        <p className="mt-4 text-gray-400">{getContent()}</p>
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
