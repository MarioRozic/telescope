import Map from "../customComponents/Map";
import { splitCoordinates } from "../lib/utils";
import { useCardDetails } from "./queries/cardDetails";

export default function ConnectedMapDetails() {
  const { data, isLoading, isError } = useCardDetails();
  return (
    <Map
      pins={[
        {
          lat: splitCoordinates(data?.coordinates ?? "").lat,
          lng: splitCoordinates(data?.coordinates ?? "").lng,
          title: data?.propertyName ?? "",
        },
      ]}
      isLoading={isLoading}
      isError={isError}
      defaultCoords={{
        lat: splitCoordinates(data?.coordinates ?? "").lat,
        lng: splitCoordinates(data?.coordinates ?? "").lng,
      }}
    />
  );
}
