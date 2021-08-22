import { useForm } from "react-hook-form";
import axios from "axios";
interface FormData {
    username: string;
    comment: string;
    email: string;
}

export default function CommentForm(postId: { postId: string }): JSX.Element {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: FormData): void => {
        axios
            .post(`${process.env.API_URL}comments`, {
                ...data,
                postId: postId.postId,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
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
