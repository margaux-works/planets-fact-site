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
    <div className="p-6 max-w-[1280px] mx-auto">
      {/* Planet Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Planet Images */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={
                activeTab === 'structure'
                  ? planet.images.internal
                  : planet.images.planet
              }
              alt={`${planet.name} ${activeTab}`}
              className="h-64 md:h-50"
            />
            {/* Geology Image Overlay */}
            {activeTab === 'geology' && (
              <img
                src={planet.images.geology}
                alt={`${planet.name} geology`}
                className="absolute h-24 md:h-32 bottom-[-20%] left-1/2 transform -translate-x-1/2"
              />
            )}
          </div>
        </div>

        {/* Planet Title & Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-5xl font-normal font-antonio uppercase text-left mt-10 md:mt-20">
            {planet.name}
          </h2>
          <p className="mt-4 text-gray-400 font-spartan text-left">
            {getContent()}
          </p>
          <p className="text-left font-spartan text-gray pt-2">
            Source:
            <a
              href={planet.overview.source}
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1 text-left"
            >
              Wikipedia{' '}
              <img
                src="../src/assets/external-link-square-with-an-arrow-in-right-diagonal.svg"
                className="inline"
              ></img>
            </a>
          </p>

          {/* Tabs */}
          <div className="grid grid-rows-3 gap-4 font-spartan tracking-widest ">
            <button
              onClick={() => setActiveTab('overview')}
              style={{
                backgroundColor:
                  activeTab === 'overview' ? planet.color : 'transparent',
                borderColor:
                  activeTab === 'overview' ? planet.color : '#38384F',
                color: activeTab === 'overview' ? '#fff' : '#838391',
              }}
              className="text-sm uppercase font-semibold border border-1 p-3 text-left hover:bg-darkGray"
            >
              <span className="text-white opacity-50 p-4 ">01</span> Overview
            </button>
            <button
              onClick={() => setActiveTab('structure')}
              style={{
                backgroundColor:
                  activeTab === 'structure' ? planet.color : 'transparent',
                borderColor:
                  activeTab === 'structure' ? planet.color : '#38384F',
                color: activeTab === 'structure' ? '#fff' : '#838391',
              }}
              className="text-sm uppercase font-semibold border border-1 p-3 text-left hover:bg-darkGray"
            >
              <span className="text-white opacity-50 p-4">02</span> Internal
              Structure
            </button>
            <button
              onClick={() => setActiveTab('geology')}
              style={{
                backgroundColor:
                  activeTab === 'geology' ? planet.color : 'transparent',
                borderColor: activeTab === 'geology' ? planet.color : '#38384F',
                color: activeTab === 'geology' ? '#fff' : '#838391',
              }}
              className="text-sm uppercase font-semibold border border-1 p-3 text-left hover:bg-darkGray"
            >
              <span className="text-white opacity-50 p-4">03</span> Surface
              Geology
            </button>
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="mt-10  grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="border border-gray p-4 flex flex-col items-center md:items-start">
          <p className="text-sm uppercase text-gray font-spartan tracking-wider">
            Rotation Time
          </p>
          <p className="text-3xl font-semibold font-antonio uppercase">
            {planet.rotation}
          </p>
        </div>
        <div className="border border-gray p-4 flex flex-col items-center md:items-start">
          <p className="text-sm uppercase text-gray font-spartan tracking-wider">
            Revolution Time
          </p>
          <p className="text-3xl font-semibold font-antonio uppercase">
            {planet.revolution}
          </p>
        </div>
        <div className="border border-gray p-4 flex flex-col items-center md:items-start">
          <p className="text-sm uppercase text-gray font-spartan tracking-wider">
            Radius
          </p>
          <p className="text-3xl font-semibold font-antonio uppercase">
            {planet.radius}
          </p>
        </div>
        <div className="border border-gray p-4 flex flex-col items-center md:items-start">
          <p className="text-sm uppercase text-gray font-spartan tracking-wider">
            Temperature
          </p>
          <p className="text-3xl font-semibold font-antonio uppercase">
            {planet.temperature}
          </p>
        </div>
      </div>
    </div>
  );
};
