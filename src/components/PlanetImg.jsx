const PlanetImage = ({ image }) => {
  return (
    <div className="flex justify-center mt-6">
      <img src={image} alt="Planet" className="h-64" />
    </div>
  );
};

export default PlanetImage;
