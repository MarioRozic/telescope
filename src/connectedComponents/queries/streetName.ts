import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchData (lat: number, lng: number) {
    const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
    return response.data.address;
}

export function useStreetName(lat: number, lng: number) {
    return useQuery({
        queryKey: [
            'StreetName', lat, lng
        ],
        queryFn: async () => fetchData(lat, lng),
    })
}