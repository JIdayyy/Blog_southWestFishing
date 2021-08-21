import FadeIn from "@components/AnimatedComponents/FadeIn";
import Image from "next/image";

export default function Header(): JSX.Element {
    return (
        <div className="w-full sm:h-320 h-full relative flex flex-col items-center align-middle justify-center">
            <div className="absolute top-20 left-20 z-10 flex flex-col">
                <Image
                    className="my-6"
                    src="/icons/tel.png"
                    width={20}
                    height={20}
                />
                <Image
                    className="my-6"
                    src="/icons/mail.png"
                    width={20}
                    height={20}
                />
                <Image
                    className="my-6"
                    src="/icons/insta.png"
                    width={20}
                    height={20}
                />
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
