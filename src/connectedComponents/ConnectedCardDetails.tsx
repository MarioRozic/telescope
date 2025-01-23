import CardDetails from "../customComponents/CardDetails";
import { useCardDetails } from "./queries/cardDetails";

export default function ConnectedCardDetails() {
  const { data, isLoading, isError } = useCardDetails();
  return (
    <CardDetails
      id={data?.id ?? 0}
      propertyName={data?.propertyName ?? ""}
      address={data?.address ?? ""}
      zipCode={data?.zipCode ?? ""}
      city={data?.city ?? ""}
      coordinates={data?.coordinates ?? ""}
      estimatedValue={data?.estimatedValue ?? 0}
      handledRisks={data?.handledRisks ?? 0}
      relevantRisks={data?.relevantRisks ?? 0}
      totalRisk={data?.totalRisk ?? 0}
      isLoading={isLoading}
      isError={isError}
    />
  );
}
