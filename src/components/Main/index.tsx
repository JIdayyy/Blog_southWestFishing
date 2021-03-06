import FadeIn from "@components/AnimatedComponents/FadeIn";
import Title from "@components/Assets/Title/Title";
import Image from "next/image";
import { PostWithAuthorAndPictures } from "pages";
import PostList from "@components/Post";

interface IProps {
    posts: PostWithAuthorAndPictures[];
}

export default function Main({ posts }: IProps): JSX.Element {
    return (
        <div className="md:w-6/12 w-full p-8 flex mb-200 shadow-10 rounded-2 scrollbar scrollbar-thumb-gray-900 bg-white scrollbar-track-gray-800 flex-col lg:items-start items-center align-middle justify-center">
            <FadeIn delay={0.4} className="w-full relative ">
                <Image
                    className="rounded-4 z-99"
                    src="/images/main.jpg"
                    priority
                    width={250}
                    height={150}
                    layout="responsive"
                />
            </FadeIn>
            <div>
                <Title className="text-black text-18 font-400 mt-24">
                    Bienvenue sur South West Fishing
                </Title>
                <div className="text-black text-justify text-8 font-400  border-b border-grey-A700 py-28">
                    Découvrez la pêche dans le sud ouest avec un guide diplômé
                    expérimenté.
                    <br />
                    Partir en séjour <strong>guidage</strong> ou initiation
                    s’est s’assurer une journée de pêche dans les meilleures
                    conditions, et la certitude de se faire
                    <strong> accompagner</strong> par un
                    <strong> encadrant passionné et expérimenté</strong>.
                    <br />
                    <br />
                    Que vous soyez débutant ou pêcheur chevroné, nos guidages
                    s’adaptent à vos besoins.
                    <br />
                    Vous êtes plûtot truite ? Enfillez vos wadders et embarquez
                    sur les nives qui nous offiront de splendides paysages et
                    des <strong>poissons</strong> joueurs.
                    <br />
                    <br />
                    Plutot <strong> carnassiers</strong> ?
                    <strong> L’étang blanc</strong> et ses 183 Hectares abrite
                    Black-Bass Brochet Perches et plus encore ...
                </div>
            </div>
            <Title className="text-black border-b border-gray-900 pb-20 text-2xl w-full text-left my-20">
                -S W F Actus-
            </Title>
            <PostList posts={posts} />
        </div>
    );
}
