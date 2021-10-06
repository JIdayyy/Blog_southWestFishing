import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "react-query";
import TextArea from "@components/Jodit/TextArea";
import { useEffect, useState } from "react";

interface FormData {
    username: string;
    comment: string;
    email: string;
}
interface IProps {
    postId: string;
    refetch: () => void;
}
export default function CommentForm({ postId, refetch }: IProps): JSX.Element {
    const [joditArea, setJoditArea] = useState("");
    const [isRender, setIsRender] = useState(false);
    const { register, handleSubmit } = useForm();
    const mutation = useMutation(
        (newComment: FormData) =>
            axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}comments`,
                {
                    ...newComment,
                    postId: postId,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            ),
        {
            onSuccess: () => refetch(),
        },
    );
    const onSubmit = (data: FormData): void => {
        mutation.mutate(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-white w-full flex flex-col my-60 items-start align-middle justify-start"
        >
            <div className="text-2xl font-500">Commentaires : </div>
            <input
                className="my-4 border-white w-full border-b px-4 py-2 bg-transparent outline-none"
                type="text"
                placeholder="Prénom"
                {...register("username", {
                    required: true,
                    min: 1,
                    maxLength: 50,
                })}
            />
            <input
                className="my-4 border-white w-full border-b px-4 py-2 bg-transparent outline-none"
                type="email"
                placeholder="Email"
                {...register("email", { required: true, maxLength: 50 })}
            />
            <textarea
                className={`my-4 border-white w-full border-b px-4 py-2 bg-transparent outline-none h-60`}
                placeholder="Votre texte ici 3000 caractères  max ..."
                {...register("content", {
                    required: true,
                    maxLength: 300,
                })}
            />
            {/* <TextArea joditArea={joditArea} setJoditArea={setJoditArea} /> */}

            <button
                className="bg-blue-600 hover:bg-blue-400 rounded-1 my-4 px-4 py-2 font-white font-bold"
                type="submit"
            >
                Envoyer
            </button>
        </form>
    );
}
