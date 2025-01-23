import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Skeleton } from "../components/ui/skeleton";
import { formatCurrency } from "../lib/utils";

type CardDetailsType = {
  id: number;
  propertyName: string;
  address: string;
  zipCode: string;
  city: string;
  coordinates: string;
  estimatedValue: number;
  totalRisk: number;
  handledRisks: number;
  relevantRisks: number;
  isLoading?: boolean;
  isError?: boolean;
  currency?: string;
};

export default function CardDetails({
  propertyName,
  address,
  zipCode,
  city,
  coordinates,
  estimatedValue,
  totalRisk,
  handledRisks,
  relevantRisks,
  currency = "NOK",
  isLoading = false,
  isError = false,
}: CardDetailsType) {
  return (
    <Card className="w-full max-w-2xl shadow-lg rounded-lg">
      <CardHeader className="p-0">
        {isLoading ? (
          <Skeleton className="w-full h-48" />
        ) : (
          <img
            src="https://placehold.co/600x400"
            alt="Building"
            className="w-full h-64 object-cover"
          />
        )}
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-2xl font-semibold">
          {isLoading ? (
            <Skeleton className="h-4 w-1/2" />
          ) : isError ? (
            "Error"
          ) : (
            propertyName
          )}
        </CardTitle>
        {isError ? (
          <CardDescription>Error Loading Asset</CardDescription>
        ) : (
          <CardDescription className="mt-4 space-y-2 text-gray-600">
            <div className="flex">
              <strong>Address: </strong>
              {isLoading ? <Skeleton className="h-4 w-1/2" /> : address}
            </div>
            <div className="flex">
              <strong>Zip Code: </strong>
              {isLoading ? <Skeleton className="h-4 w-1/2" /> : zipCode}
            </div>
            <div className="flex">
              <strong>City: </strong>
              {isLoading ? <Skeleton className="h-4 w-1/2" /> : city}
            </div>
            <div className="flex">
              <strong>Coordinates: </strong>
              {isLoading ? <Skeleton className="h-4 w-1/2" /> : coordinates}
            </div>
            <div className="flex">
              <strong>Estimated Value: </strong>
              {isLoading ? (
                <Skeleton className="h-4 w-1/2" />
              ) : (
                formatCurrency(estimatedValue, currency)
              )}
            </div>
            <div className="flex">
              <strong>Total Financial Risk: </strong>
              {isLoading ? (
                <Skeleton className="h-4 w-1/2" />
              ) : (
                formatCurrency(totalRisk, currency)
              )}
            </div>
            <div className="flex">
              <strong>Handled Risks: </strong>
              {isLoading ? (
                <Skeleton className="h-4 w-1/2" />
              ) : (
                `${formatCurrency(handledRisks, currency)} / ${formatCurrency(
                  relevantRisks,
                  currency
                )}`
              )}
            </div>
          </CardDescription>
        )}
      </CardContent>
    </Card>
  );
}
