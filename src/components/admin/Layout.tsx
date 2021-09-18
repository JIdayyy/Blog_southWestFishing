import { RootState } from "@redux/reducers";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

interface IProps {
    children: React.ReactNode;
}
export default function Layout({ children }: IProps): JSX.Element {
    const { id } = useSelector((state: RootState) => state.app.user);
    const router = useRouter();
    useEffect(() => {
        if (!id) {
            router.push("/");
        }
    }, []);

    return (
        <div className="w-full flex fixed top-0 left-0 z-20   h-screen">
            <Sidebar />
            {children}
        </div>
    );
}
