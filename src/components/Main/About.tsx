import FadeIn from "@components/AnimatedComponents/FadeIn";

export default function About(): JSX.Element {
    return (
        <FadeIn className="w-full text-justify p-10 text-10 font-500 ">
            Qui suis-je? Je m&apos;appelle{" "}
            <strong className="font-600">M Bazard Mathieu</strong> J&apos;ai 33
            ans.
            <br />
            <strong>Pêcheur</strong> depuis l&apos;âge de 6 ans, grâce à père et
            mon grand père.je suis également impliqué dans une{" "}
            <strong>association</strong> de pêche depuis plusieurs années.
            <br /> Ma participation à l&apos;école de pêche de{" "}
            <strong>l&apos;aappma Nivelle Côte Basque (APN)</strong> ma ouvert
            les yeux me donnant envie d&apos;aller plus loin et de passer mon
            diplôme de
            <strong>moniteur guide de pêche</strong> et de transmettre ma
            passion dans un cadre <strong>Professionnel</strong>.
            Aujourd&apos;hui,je vous offre mes <strong>services</strong> afin de
            partager mes connaissances et mon savoir-faire.
        </FadeIn>
    );
}
