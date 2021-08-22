import { useQuery } from "react-query";
import axios from "axios";
export default function User() {
    const { data, isLoading, error } = useQuery("getUsers", () =>
        console.log(""),
    );
    return <div></div>;
}
