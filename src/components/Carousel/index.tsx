import React from "react";
import "@brainhubeu/react-carousel/lib/style.css";
import dynamic from "next/dynamic";
import { Picture } from ".prisma/client";
const Carousel = dynamic(import("@brainhubeu/react-carousel"), {
    ssr: false,
});

interface IProps {
    pictures: Picture[];
}
function MyCarousel({ pictures }: IProps): JSX.Element {
    return (
        <Carousel plugins={["arrows"]}>
            {pictures.map((picture) => (
                <img src={picture.url} />
            ))}
        </Carousel>
    );
}

export default MyCarousel;
