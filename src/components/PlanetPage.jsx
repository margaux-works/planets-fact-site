import { planetsData } from '../data/planetsData';
import PlanetImage from './PlanetImg';

export const PlanetPage = () => {
  const planet = planetsData[0];

  return (
    <div className="p-6">
      <div className="text-center ">
        <PlanetImage image={planet.images.planet} />
        <h2 className="text-4xl font-bold "> {planet.name}</h2>
        <p className="mt-4">{planet.overview.content}</p>
        <a
          href={planet.overview.source}
          target="blank"
          className="underline mt-2 block"
        >
          Source: Wikipedia
        </a>
      </div>

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
