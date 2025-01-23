import { useCardList } from "./queries/cardList";
import Map from "../customComponents/Map";
import { useAtomValue } from "jotai";
import { selectedCardIndexAtom } from "../state/selectedCard";
import { splitCoordinates } from "../lib/utils";

export default function ConnectedMap() {
  const { data, isLoading, isError } = useCardList();
  const selectedIndex = useAtomValue(selectedCardIndexAtom);

  return (
    <Map
      pins={
        data?.map((value) => ({
          lat: splitCoordinates(value.coordinates).lat,
          lng: splitCoordinates(value.coordinates).lng,
          title: value.propertyName,
        })) || []
      }
      isLoading={isLoading}
      isError={isError}
      selectedIndex={selectedIndex ?? 0}
    />
  );
}
