import { login } from "@redux/actions";
import { RootState } from "@redux/reducers";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import AXIOS from "src/utils/AXIOS";
import Sidebar from "./Sidebar";

interface IProps {
    children: React.ReactNode;
}
export default function Layout({ children }: IProps): JSX.Element {
    const notify = () => toast("Authentification réussie !");
    const dispatch = useDispatch();
    const router = useRouter();
    const { user } = useSelector((state: RootState) => state.app);

    const { isLoading, error } = useQuery(
        "refreshToken",
        () => AXIOS.post("/api/auth/refresh").then((r) => r.data),
        {
            enabled: user.role !== ["ADMIN"],
            onSuccess: (data) => {
                notify();
                dispatch(login(data));
            },
        },
    );

    useEffect(() => {
        if (!user.role) {
            router.push("/");
        }
    }, []);

    if (isLoading) return <div>Loading</div>;
    if (error) return <div>Error</div>;
    return (
        <div>
            {user.role.includes("ADMIN") && (
                <div className="w-full flex fixed top-0 left-0 z-999   h-screen">
                    <Sidebar />
                    {children}
                </div>
            )}
        </div>
    );
}
