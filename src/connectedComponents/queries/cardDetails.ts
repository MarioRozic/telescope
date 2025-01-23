import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
    useParams
  } from "react-router-dom";
import CardDetails from "../../customComponents/CardDetails";

async function fetchData (id: string) {
    if(!id) throw new Error('Invalid ID');

    const response = await axios.get<React.ComponentProps<typeof CardDetails>>(`/card/${id}`);
    return response.data;
}

export function useCardDetails() {
    const { id } = useParams();
    return useQuery({
        queryKey: [
            'CardDetails', id
        ],
        queryFn: async () => fetchData(id ?? "")
    })
}