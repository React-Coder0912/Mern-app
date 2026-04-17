import React, { useRef, useEffect } from "react";

const Map = (props) => {
  const mapRef = useRef(null);
  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
    });

    new window.google.maps.Marker({
      position: center,
      map,
    });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`
        w-full h-full
        ${props.className || ""}
      `}
      style={props.style}
    />
  );
};

export default Map;