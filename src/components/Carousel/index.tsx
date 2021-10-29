import Image from "next/image";
import "@brainhubeu/react-carousel/lib/style.css";
import React from "react";
import dynamic from "next/dynamic";
import { arrowsPlugin } from "@brainhubeu/react-carousel";
import { Picture } from ".prisma/client";

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
                draggable
                plugins={[
                    {
                        resolve: arrowsPlugin,
                        options: {
                            arrowLeft: (
                                <div className="absolute left-0">
                                    <Image
                                        className="bg-white  bg-opacity-50  z-99"
                                        src="/icons/arrowL.png"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            ),
                            arrowLeftDisabled: (
                                <div className="absolute left-0">
                                    <Image
                                        className="bg-black bg-opacity-50 absolute z-99"
                                        src="/icons/arrowL.png"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            ),
                            arrowRight: (
                                <div className="absolute right-0">
                                    <Image
                                        className="bg-white  bg-opacity-50 absolute z-99"
                                        src="/icons/arrowR.png"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            ),
                            arrowRightDisabled: (
                                <div className="absolute right-0">
                                    <Image
                                        className="bg-black bg-opacity-50  absolute z-99"
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
                    pictures.map((picture) => (
                        <img alt="picture_alt" src={picture.url} />
                    ))}
            </Carousel>
        </div>
    );
}

export default MyCarousel;
