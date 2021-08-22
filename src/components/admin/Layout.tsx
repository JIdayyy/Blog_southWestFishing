import Sidebar from "./Sidebar";

interface IProps {
    children: React.ReactNode;
}
export default function Layout({ children }: IProps): JSX.Element {
    return (
        <div className="w-full flex absolute top-0 left-0 z-20  overflow-y-hidden h-screen">
            <Sidebar />
            {children}
        </div>
    );
}