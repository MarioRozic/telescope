import CardDetails from "./CardDetails";
import CustomCard from "./CustomCard";

type CardListType = {
  // data: React.ComponentProps<typeof CustomCard>[];
  data: Pick<
    React.ComponentProps<typeof CardDetails>,
    "propertyName" | "totalRisk" | "handledRisks" | "relevantRisks" | "id"
  >[];
  isLoading?: boolean;
  isError?: boolean;
  onCardClick?: (id: number) => void;
  onMouseEnter?: (index: number) => void;
  onMouseLeave?: () => void;
};

export default function CardList({
  data = [],
  isLoading = false,
  isError = false,
  onCardClick,
  onMouseEnter,
  onMouseLeave,
}: CardListType) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-between">
      {!data.length
        ? Array.from({ length: 6 }).map((_, index) => (
            <CustomCard
              key={index}
              id={0}
              propertyName={""}
              handledRisks={0}
              relevantRisks={0}
              totalRisk={0}
              isLoading={isLoading}
              isError={isError}
            />
          ))
        : null}
      {data.map((value, index) => (
        <CustomCard
          key={index}
          id={value.id}
          propertyName={value.propertyName}
          handledRisks={value.handledRisks}
          relevantRisks={value.relevantRisks}
          totalRisk={value.totalRisk}
          isLoading={isLoading}
          isError={isError}
          onCardClick={onCardClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ))}
    </div>
  );
}
