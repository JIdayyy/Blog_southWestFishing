import Image from "next/image";
import NavLink from "./NavLink";

export default function Sidebar(): JSX.Element {
    const navLinks = [{ name: "Home", link: "/", image: "/icons/home.png" }];

    return (
        <div className="w-208 z-30 h-full bg-black">
            <div>
                <Image
                    src="/images/column_pic.jpeg"
                    width={200}
                    height={200}
                    layout="responsive"
                />
            </div>

            <NavLink link={navLinks[0]} />
        </div>
    );
}
