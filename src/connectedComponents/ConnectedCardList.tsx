import { useNavigate } from "react-router-dom";
import CardList from "../customComponents/CardList";
import { useCardList } from "./queries/cardList";
import { useSetAtom } from "jotai";
import { selectedCardIndexAtom } from "../state/selectedCard";

export default function ConnectedCardList() {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useCardList();
  const setSelectedIndex = useSetAtom(selectedCardIndexAtom);

  const onCardClick = (id: number) => {
    navigate(`/${id}`);
  };

  const onMouseEnter = (index: number) => {
    setSelectedIndex(index - 1);
  };

  const onMouseLeave = () => {
    setSelectedIndex(null);
  };

  return (
    <CardList
      data={data || []}
      isLoading={isLoading}
      isError={isError}
      onCardClick={onCardClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
}
