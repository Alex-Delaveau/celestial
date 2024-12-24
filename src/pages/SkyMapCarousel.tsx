import { useState } from "react";
import "./SkyMapCarousel.css";
import data from "../data.json";

// Define TypeScript types for the data structure
type Constellation = {
  description: string;
  x: number;
  y: number;
  image?: string; // Optional image property
};

type MapData = {
  title: string;
  description: string;
  image: string;
  constellations: Constellation[];
};

const SkyMapCarousel = () => {
  // Type `maps` based on the JSON structure
  const maps: MapData[] = data;

  // State variables with correct types
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredConstellation, setHoveredConstellation] = useState<Constellation | null>(null);

  const handleNext = () => {
    setActiveIndex((prevIndex: number) => (prevIndex + 1) % maps.length);
    setHoveredConstellation(null); // Reset hover state on slide change
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex: number) =>
      prevIndex - 1 < 0 ? maps.length - 1 : prevIndex - 1
    );
    setHoveredConstellation(null); // Reset hover state on slide change
  };

  const currentMap = maps[activeIndex];

  return (
    <div className="carousel-page">
      <div className="sky-map-container">
        {/* Map Title */}
        <h1 className="map-title">{currentMap.title}</h1>
        {/* Map Description */}
        <p className="map-description">{currentMap.description}</p>

        <div className="sky-map-wrapper">
          {/* Sky map image */}
          <img
            src={currentMap.image}
            alt={currentMap.title}
            className="sky-map-image"
          />

          {/* Overlay interactive regions with star logo */}
          {currentMap.constellations.map((c) => (
            <div
              className="constellation-star"
              style={{
                left: `${c.x}px`,
                top: `${c.y}px`,
              }}
              onMouseEnter={() => setHoveredConstellation(c)}
              onMouseLeave={() => setHoveredConstellation(null)}
            ></div>
          ))}

          {/* Tooltip for hovered constellation */}
          {hoveredConstellation && (
            <div
              className="tooltip"
              style={{
                left: `${hoveredConstellation.x + 20}px`,
                top: `${hoveredConstellation.y}px`,
              }}
            >
              <p>{hoveredConstellation.description}</p>
              {hoveredConstellation.image && (
                <img
                  src={hoveredConstellation.image}
                  className="tooltip-image"
                />
              )}
            </div>
          )}
        </div>

        {/* Carousel Controls */}
        <div className="carousel-controls">
          <button className="prev-btn" onClick={handlePrev}>
            ←
          </button>
          <button className="next-btn" onClick={handleNext}>
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkyMapCarousel;
