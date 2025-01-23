import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import CardDetails from "../../customComponents/CardDetails";

async function addData (post: {
    propertyName: string,
    address: string,
    zipCode: string,
    city: string,
    coordinates: string,
    estimatedValue: number,
    totalRisk: number,
    handledRisks: number,
    relevantRisks: number,
}) {

    const response = await axios.post<React.ComponentProps<typeof CardDetails>>(`/card`, post);
    return response.data;
}

export function useCardPost() {
    return useMutation({
        mutationFn: addData,
    });
}