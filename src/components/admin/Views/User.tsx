import { useQuery } from "react-query";
import axios from "axios";
export default function User() {
    const { data, isLoading, errors } = useQuery("getUsers", () =>
        axios.get(process.env.NEXT_PUBLIC_API_URL),
    );
    return <div></div>;
}
