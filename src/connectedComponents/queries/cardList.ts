import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CardDetails from "../../customComponents/CardDetails";

async function fetchData () {
    const response = await axios.get<React.ComponentProps<typeof CardDetails>[]>("/card-list");
    return response.data;
}

export function useCardList() {
    return useQuery({
        queryKey: [
            'CardList'
        ],
        queryFn: async () => fetchData(),
    })
}