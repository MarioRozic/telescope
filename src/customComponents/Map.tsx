import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { Marker as LeafletMarker } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Skeleton } from "../components/ui/skeleton";
import { useEffect, useRef } from "react";

type MapType = {
  pins: {
    lat: number;
    lng: number;
    title: string;
  }[];
  isLoading?: boolean;
  isError?: boolean;
  selectedIndex?: number | null;
  setCoordinates?: (coords: { lat: number; lng: number }) => void;
};

export default function Map({
  pins,
  isLoading = false,
  isError = false,
  selectedIndex = null,
  setCoordinates,
}: MapType) {
  const markersRef = useRef<(LeafletMarker | null)[]>([]);

  const openPopup = (index: number) => {
    const marker = markersRef.current[index];
    if (marker) {
      marker.openPopup();
    }
  };

  const ClickableMap = () => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        if (setCoordinates) setCoordinates({ lat, lng });
      },
    });
    return null;
  };

  useEffect(() => {
    if (selectedIndex !== null) openPopup(selectedIndex);
  }, [selectedIndex]);

  if (isError) {
    return (
      <div className="flex items-center justify-center h-full bg-red-500 text-white p-4">
        Error loading the map. Please try again later.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Skeleton className="h-full w-full" />
      </div>
    );
  }
  return (
    <>
      <MapContainer
        center={[51.5074, -0.1278]} // Set the map center to London
        zoom={12}
        style={{ width: "100%", height: "100vh" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {pins &&
          pins.map((location, index) => (
            <Marker
              key={index}
              position={[location.lat, location.lng]}
              ref={(el) => (markersRef.current[index] = el)}
            >
              <Popup>{location.title}</Popup>
            </Marker>
          ))}

        <ClickableMap />
      </MapContainer>
    </>
  );
}
