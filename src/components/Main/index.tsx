import Title from "@components/Assets/Title/Title";
import Image from "next/image";
import { PostWithAuthorAndPictures } from "pages";
import PostList from "src/Post";
interface IProps {
    posts: PostWithAuthorAndPictures[];
}
export default function Main({ posts }: IProps): JSX.Element {
    return (
        <div className="lg:w-full px-8 md:px-0 flex flex-col lg:items-start items-center align-middle justify-center">
            <div className="flex flex-col">
                <Title className="text-white ">South-West Fishing</Title>
                <Title className="text-white text-20 font-600 my-8">
                    Guidage, stages, et initiation à la pêche au Pays Basque/Sud
                    Landes
                </Title>
            </div>
            <div className="md:w-512 w-full relative h-320">
                {" "}
                <Image
                    className="rounded-4 "
                    src="/images/main.jpg"
                    layout="fill"
                />
            </div>
            <div>
                <Title className="text-white text-18 font-400 mt-24">
                    Bienvenue sur South West Fishing
                </Title>
                <div className="text-white text-8 font-200  border-b py-14">
                    Découvrez la pêche dans le sud ouest avec un guide diplômé
                    expérimenté.
                    <br></br>Partir en séjour <strong>guidage</strong> ou
                    initiation s’est s’assurer une journée de pêche dans les
                    meilleures conditions, et la certitude de se faire
                    <strong> accompagner</strong> par un
                    <strong> encadrant passionné et expérimenté</strong>.
                    <br></br>
                    <br></br>
                    Que vous soyez débutant ou pêcheur chevroné, nos guidages
                    s’adaptent à vos besoins.<br></br>
                    Vous êtes plûtot truite ? Enfillez vos wadders et embarquez
                    sur les nives qui nous offiront de splendides paysages et
                    des <strong>poissons</strong> joueurs.
                    <br></br>
                    <br></br>
                    Plutot <strong>carnassiers</strong> ?{" "}
                    <strong>L’étang blanc</strong> et ses 183 Hectares abrite
                    Black-Bass Brochet Perches et plus encore ...
                </div>
            </div>
            <Title className="text-white text-4xl w-full text-left m-20">
                Actus :
            </Title>
            <PostList posts={posts} />
        </div>
    );
}
