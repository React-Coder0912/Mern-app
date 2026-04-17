import { useEffect, useRef } from "react";

const Map = ({ center, zoom }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.google?.maps) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
      mapId: "YOUR_REAL_MAP_ID",
    });

    new window.google.maps.marker.AdvancedMarkerElement({
      map,
      position: center,
    });
  }, [center, zoom]);

  return <div ref={mapRef} className="w-full h-full" />;
};

export default Map;