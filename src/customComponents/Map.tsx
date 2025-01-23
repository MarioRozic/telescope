import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  //   useMapEvents,
} from "react-leaflet";
import {
  //  LatLngExpression,
  Marker as LeafletMarker,
} from "leaflet";
import "leaflet/dist/leaflet.css";
import { Skeleton } from "../components/ui/skeleton";
import { useEffect, useRef } from "react";

// function ClickableMap() {
//   const [latLng, setLatLng] = useState<LatLngExpression | null>(null);

//   useMapEvents({
//     click(e) {
//       setLatLng(e.latlng);
//       console.log("Clicked Location:", e.latlng);
//     },
//   });

//   return (
//     <>
//       {latLng && (
//         <div>
//           <h3>Latitude: {latLng.lat}</h3>
//           <h3>Longitude: {latLng.lng}</h3>
//         </div>
//       )}
//     </>
//   );
// }

type MapType = {
  pins: {
    lat: number;
    lng: number;
    title: string;
  }[];
  isLoading?: boolean;
  isError?: boolean;
  selectedIndex?: number | null;
};

export default function Map({
  pins,
  isLoading = false,
  isError = false,
  selectedIndex = null,
}: MapType) {
  const markersRef = useRef<(LeafletMarker | null)[]>([]);
  console.log(selectedIndex);

  // Function to manually open the popup
  const openPopup = (index: number) => {
    const marker = markersRef.current[index];
    if (marker) {
      marker.openPopup(); // Manually open the popup for the selected marker
    }
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
        {/* Tile layer from OpenStreetMap */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Display initial pins */}
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

        {/* Handle map clicks
      <ClickableMap /> */}
      </MapContainer>
    </>
  );
}
