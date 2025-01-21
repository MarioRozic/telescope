import CustomCard from "./CustomCard";

type CardList = {
  data: React.ComponentProps<typeof CustomCard>[];
  isLoading?: boolean;
  isError?: boolean;
};

export default function CardList({
  data = [],
  isLoading = false,
  isError = false,
}: CardList) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {!data.length
        ? Array.from({ length: 6 }).map((_, index) => (
            <CustomCard
              key={index}
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
          propertyName={value.propertyName}
          handledRisks={value.handledRisks}
          relevantRisks={value.relevantRisks}
          totalRisk={value.totalRisk}
          isLoading={isLoading}
          isError={isError}
        />
      ))}
    </div>
  );
}
