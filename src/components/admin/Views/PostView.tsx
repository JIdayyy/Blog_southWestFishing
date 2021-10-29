/* eslint-disable no-console */
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";
import CreatePost from "@components/Modal/CreatePost";
import PostItem from "../Lists/Items/PostItem";

export default function PostView(): JSX.Element {
    const [showAddPost, setShowAddPost] = useState<boolean>(false);

    const { data, error, isLoading } = useQuery("getPosts", () =>
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}posts`)
            .then((r) => r.data)
            .catch((err) => console.log(err)),
    );

    if (error) return <div>Error</div>;
    if (isLoading) return <div>Loading ...</div>;
    if (!data) return <div>No data</div>;

    return (
        <div className="bg-black text-10 my-20 shadow-8 w-full flex flex-col rounded-2 p-4">
            <div className="text-xl">Liste des Posts :</div>{" "}
            <button
                type="button"
                onClick={() => setShowAddPost(true)}
                className="bg-blue-400 px-4 py-2 text-white font-bold rounded-2 my-4"
            >
                Ajouter
            </button>
            {showAddPost && <CreatePost setIsOpen={setShowAddPost} />}
            <div className="flex border-b text-gray-600 w-full items-center align-middle justify-between">
                <div className="w-full">Title</div>
                <div className="w-full">Publication</div>
                <div className="bg-red rounded-1 px-3 mx-1 rounded-2 opacity-0">
                    SUPPRIMER
                </div>
                <div className="bg-red rounded-1 px-3 mx-1 rounded-2 opacity-0">
                    SUPPRIMER
                </div>
            </div>
            <ul className="flex flex-col w-full overflow-y-scroll scrollbar  items-center align-middle justify-between">
                {data.map((post: IPost) => (
                    <PostItem post={post} key={post.id} />
                ))}
            </ul>
        </div>
    );
}
