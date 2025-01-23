import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Skeleton } from "../components/ui/skeleton";
import { formatCurrency } from "../lib/utils";

type CustomCardType = {
  id: number;
  propertyName: string;
  totalRisk: number;
  handledRisks: number;
  relevantRisks: number;
  currency?: string;
  isLoading?: boolean;
  isError?: boolean;
  onCardClick?: (id: number) => void;
  onMouseEnter?: (index: number) => void;
  onMouseLeave?: () => void;
};

export default function CustomCard({
  id,
  propertyName,
  totalRisk,
  handledRisks,
  relevantRisks,
  currency = "NOK",
  isLoading = false,
  isError = false,
  onCardClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}: CustomCardType) {
  return (
    <Card
      className="w-80 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
      onClick={() => onCardClick(id)}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave()}
    >
      <CardHeader className="p-0">
        {isLoading ? (
          <Skeleton className="w-full h-48" />
        ) : (
          <img
            src="https://placehold.co/400x300"
            alt="Random building"
            className="w-full h-48 object-cover"
          />
        )}
      </CardHeader>
      <CardContent className="p-4">
        {isLoading ? (
          <Skeleton className="h-6 w-3/4 mb-4" />
        ) : isError ? (
          <CardTitle>Error</CardTitle>
        ) : (
          <CardTitle className="text-lg font-semibold">
            {propertyName}
          </CardTitle>
        )}
        <CardDescription className="text-gray-600 mt-2">
          {isLoading ? (
            <Skeleton className="h-4 w-1/2 mb-2" />
          ) : isError ? (
            <p>Error Loading Asset</p>
          ) : (
            <p>Total Financial Risk: {formatCurrency(totalRisk, currency)}</p>
          )}
          {isLoading ? (
            <Skeleton className="h-4 w-1/2 mb-2" />
          ) : isError ? (
            <p>Error Loading Asset</p>
          ) : (
            <p>
              Handled Risks: {formatCurrency(handledRisks, currency)} /{" "}
              {formatCurrency(relevantRisks, currency)}
            </p>
          )}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
