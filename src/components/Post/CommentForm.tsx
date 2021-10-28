import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

interface FormData {
    username: string;
    comment: string;
    email: string;
}
interface IProps {
    postId: string;
}
export default function CommentForm({ postId }: IProps): JSX.Element {
    const commentNotification = () => toast("Merci pour votre commentaire !");
    const queryClient = useQueryClient();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({ criteriaMode: "all" });
    const { mutate: createComment, isLoading } = useMutation(
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
            onSuccess: () => {
                queryClient.refetchQueries(["getPostComments"]);
                commentNotification();
                setValue("username", "");
                setValue("content", "");
                setValue("email", "");
            },
        },
    );
    const onSubmit = (data: FormData): void => {
        createComment(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-black md:shadow-10 bg-white rounded-2 p-10 w-full flex flex-col my-32 md:my-60 items-start align-middle justify-start"
        >
            <div className="text-xl font-500">Commentaire : </div>

            <input
                className="my-4 border border-gray-300  w-full border-b px-4 py-2 bg-transparent outline-none"
                type="text"
                placeholder="Prénom"
                {...register("username", {
                    required: true,
                    min: 1,
                    maxLength: 50,
                })}
            />
            <input
                className="my-4 border border-gray-300  w-full border-b px-4 py-2 bg-transparent outline-none"
                type="email"
                placeholder="Email"
                {...register("email", { required: true, maxLength: 50 })}
            />

            <textarea
                className="my-4 border border-gray-300  w-full h-96 border-b px-4 py-2 bg-transparent outline-none"
                placeholder="Commentaire ..."
                {...register("content", { required: true, maxLength: 300 })}
            ></textarea>
            {!isLoading ? (
                <button
                    className="bg-blue-600 text-white rounded-2 hover:bg-blue-400 rounded-1 my-4 px-4 py-2 font-white font-bold"
                    type="submit"
                >
                    Envoyer
                </button>
            ) : (
                <button
                    className="bg-blue-600 text-white rounded-2 hover:bg-blue-400 rounded-1 my-4 px-4 py-2 font-white font-bold"
                    type="button"
                >
                    Envoi en cours ...
                </button>
            )}
        </form>
    );
}
