import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "react-query";

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
        // axios
        //     .post(
        //         `${process.env.NEXT_PUBLIC_API_URL}comments`,
        //         {
        //             ...data,
        //             postId: postId.postId,
        //         },
        //         {
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //         },
        //     )
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err));
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-white flex flex-col my-60 "
        >
            <div className="text-2xl font-500">Commentaires : </div>
            <input
                className="my-4 border-white border-b px-4 py-2 bg-transparent outline-none"
                type="text"
                placeholder="Prénom"
                {...register("username", {
                    required: true,
                    min: 1,
                    maxLength: 50,
                })}
            />
            <input
                className="my-4 border-white border-b px-4 py-2 bg-transparent outline-none"
                type="email"
                placeholder="Email"
                {...register("email", { required: true, maxLength: 50 })}
            />
            <textarea
                className="my-4 border-white border-b px-4 py-2 bg-transparent outline-none"
                placeholder="Ecrivez votre commentaire ici"
                {...register("content", { maxLength: 500 })}
            />

            <button type="submit">Envoyer</button>
        </form>
    );
}
