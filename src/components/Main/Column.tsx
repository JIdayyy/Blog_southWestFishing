import About from "./About";
import Image from "next/image";
import FadeIn from "@components/AnimatedComponents/FadeIn";
export default function Column(): JSX.Element {
    return (
        <FadeIn
            delay={0.3}
            className="bg-blue-dark w-full md:w-192 md:my-0 text-white flex flex-col justify-around items-center"
        >
            <div className="relative w-full h-200 md:h-136">
                <Image
                    className="rounded-t-4"
                    src="/images/main.jpg"
                    layout="fill"
                />
            </div>
            <About />
            <div className="w-full h-288 p-12 flex flex-col justify-around items-center">
                <Image
                    className="my-8"
                    src="/images/epf.png"
                    width={200}
                    height={200}
                />
                <Image src="/images/st_croix.png" width={230} height={100} />
            </div>
        </FadeIn>
    );
}
