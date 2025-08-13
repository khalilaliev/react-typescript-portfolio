import { MapRef } from "react-map-gl";

export const flyToCoordinates = (
  coordinates: [number, number],
  zoom: number,
  duration: number,
  mapRef: React.RefObject<MapRef>
) => {
  if (mapRef.current) {
    mapRef.current.flyTo({
      center: coordinates,
      zoom: zoom,
      essential: true,
      duration,
    });
  }
};
