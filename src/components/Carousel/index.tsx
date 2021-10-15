import React from "react";
import "@brainhubeu/react-carousel/lib/style.css";
import dynamic from "next/dynamic";
import { Picture } from ".prisma/client";
import { arrowsPlugin } from "@brainhubeu/react-carousel";
import Image from "next/image";
const Carousel = dynamic(import("@brainhubeu/react-carousel"), {
    ssr: false,
});

interface IProps {
    pictures: Picture[];
}
function MyCarousel({ pictures }: IProps): JSX.Element {
    return (
        <div className="relative">
            <Carousel
                draggable={true}
                plugins={[
                    {
                        resolve: arrowsPlugin,
                        options: {
                            arrowLeft: (
                                <div className="absolute left-0">
                                    <Image
                                        className="bg-realBlack  bg-opacity-50  z-99"
                                        src="/icons/arrowL.png"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            ),
                            arrowLeftDisabled: (
                                <div className="absolute left-0">
                                    <Image
                                        className="bg-gray-900  bg-opacity-50 absolute z-99"
                                        src="/icons/arrowL.png"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            ),
                            arrowRight: (
                                <div className="absolute right-0">
                                    <Image
                                        className="bg-realBlack  bg-opacity-50 absolute z-99"
                                        src="/icons/arrowR.png"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            ),
                            arrowRightDisabled: (
                                <div className="absolute right-0">
                                    <Image
                                        className="bg-gray-900 bg-opacity-50  absolute z-99"
                                        src="/icons/arrowR.png"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            ),
                            addArrowClickHandler: true,
                        },
                    },
                ]}
            >
                {pictures &&
                    pictures.map((picture) => <img src={picture.url} />)}
            </Carousel>
        </div>
    );
}

export default MyCarousel;
