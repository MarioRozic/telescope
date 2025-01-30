import { useEffect, useState } from "react";
import Map from "../customComponents/Map";
import { useStreetName } from "./queries/streetName";
import CardForm from "../customComponents/CardForm";
import { useCardPost } from "./queries/card";
import { useNavigate } from "react-router-dom";

export default function ConnectedFormMap() {
  const { mutate } = useCardPost();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    propertyName: "",
    address: "",
    zipCode: "",
    city: "",
    coordinates: "",
    estimatedValue: 0,
    totalRisk: 0,
    handledRisks: 0,
    relevantRisks: 0,
  });

  const [clickedCoords, setClickedCoords] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const { data } = useStreetName(
    clickedCoords?.lat ?? 0,
    clickedCoords?.lng ?? 0
  );

  useEffect(() => {
    if (data) {
      setFormData((prev) => ({
        ...prev,
        address: data.road ?? "",
        zipCode: data.postcode ?? "",
        city: data.city ?? "",
      }));
    }
  }, [data]);

  const handleSetCoordinates = async (coords: { lat: number; lng: number }) => {
    setClickedCoords(coords);
    setFormData((prev) => ({
      ...prev,
      coordinates: `${coords.lat}, ${coords.lng}`,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    mutate(formData, {
      onSuccess: () => {
        navigate("/");
      },
      onError: () => {
        navigate("/");
      },
    });
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-1">
        <CardForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="col-span-2">
        <Map
          pins={[
            { lat: clickedCoords?.lat ?? 0, lng: clickedCoords?.lng ?? 0 },
          ]}
          setCoordinates={handleSetCoordinates}
        />
      </div>
    </div>
  );
}
