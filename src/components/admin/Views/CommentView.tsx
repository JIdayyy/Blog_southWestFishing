import { useQuery } from "react-query";
import axios from "axios";

import AdminCommentList from "../Lists/AdminCommentList";

export default function CommentView(): JSX.Element {
    const { data, isLoading, error } = useQuery("getComments", () =>
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}comments`)
            .then((r) => r.data)
            .catch((err) => console.log(err)),
    );

    if (error) return <div>Error ...</div>;
    if (isLoading) return <div>Loading ...</div>;
    if (data.length === 0) return <div>No data</div>;
    return (
        <div className="bg-black my-20 shadow-8 text-10 w-full  flex flex-col rounded-2 p-4">
            <div className="text-xl">Liste des Commentaires :</div>
            <div className="flex border-b text-gray-600 w-full items-center align-middle justify-between">
                <div className="w-full ">User</div>
                <div className="w-full ">Email</div>
                <div className="w-full ">Contenu</div>
                <div className="w-full ">Parution</div>
                <div className="bg-red rounded-1 px-3 rounded-2 opacity-0">
                    SUPPRIMER
                </div>
            </div>
            <AdminCommentList comments={data} />
        </div>
    );
}
