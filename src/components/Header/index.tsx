import FadeIn from "@components/AnimatedComponents/FadeIn";
import Image from "next/image";

export default function Header(): JSX.Element {
    return (
        <div className="w-full sm:h-320 h-full relative flex flex-col items-center align-middle justify-center">
            <div className="absolute top-52 right-20 z-10">
                <Image src="/icons/tel.png" width={30} height={30} />
            </div>
            <Image src="/images/bg_southwestfishing.jpg" layout="fill" />
            <FadeIn delay={0.2}>
                <Image
                    className="animate-pulse"
                    src="/images/logo_southwestfishing.png"
                    width={300}
                    height={300}
                />
            </FadeIn>
        </div>
    );
}
