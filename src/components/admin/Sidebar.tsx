import Title from "@components/Assets/Title/Title";
import NavLink from "./NavLink";

export default function Sidebar(): JSX.Element {
    const navLinks = [{ name: "Home", link: "/" }];
    return (
        <div className="w-208 z-30 h-full bg-indigo-900">
            <Title className="text-white text-4xl">ADMIN</Title>
            {navLinks.map((link) => (
                <NavLink link={link} />
            ))}
        </div>
    );
}
