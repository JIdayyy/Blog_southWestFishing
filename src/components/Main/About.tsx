import FadeIn from "@components/AnimatedComponents/FadeIn";
export default function About(): JSX.Element {
    return (
        <FadeIn className="w-full text-justify p-10 text-10 font-300 ">
            Qui suis-je? Je m'appelle{" "}
            <strong className="font-600">M Bazard Mathieu</strong> J'ai 33 ans.
            <br></br>
            <strong>Pêcheur</strong> depuis l'âge de 6 ans, grâce à père et mon
            grand père.je suis également impliqué dans une{" "}
            <strong>association</strong> de pêche depuis plusieurs années.
            <br></br> Ma participation à l'école de pêche de{" "}
            <strong>l'aappma Nivelle Côte Basque (APN)</strong> ma ouvert les
            yeux me donnant envie d'aller plus loin et de passer mon diplôme de
            <strong>moniteur guide de pêche</strong> et de transmettre ma
            passion dans un cadre <strong>Professionnel</strong>. Aujourd'hui,je
            vous offre mes <strong>services</strong> afin de partager mes
            connaissances et mon savoir-faire.
        </FadeIn>
    );
}
