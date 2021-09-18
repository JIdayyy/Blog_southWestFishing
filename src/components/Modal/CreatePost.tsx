import { RootState } from "@redux/reducers";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { style } from "../../styles/TailwindClasses";
interface Props {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CreatePost({ setIsOpen }: Props): JSX.Element {
    const user = useSelector((state: RootState) => state.app.user);
    const { mutate: createPost } = useMutation((newPost) =>
        axios.post("/api/posts/", newPost),
    );
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        createPost({ ...data, userId: user.id });
    };
    console.log(errors);

    return (
        <div
            className={`bg-realBlack bg-opacity-70 ${style.flexContainer(
                "col",
            )}`}
        >
            <h1 className="font-bold text-2xl">Créer un Post</h1>
            <form className={style.modal} onSubmit={handleSubmit(onSubmit)}>
                <button
                    onClick={() => setIsOpen(false)}
                    className="bg-white text-black rounded-full absolute top-5 right-0 transform translate-x-20 px-5 py-1"
                >
                    X
                </button>
                <div>
                    <label className={style.label()}>Titre :</label>
                    <input
                        className={style.input()}
                        type="text"
                        placeholder="Titre du post 300 caractères max..."
                        {...register("title", {
                            required: true,
                            maxLength: 3000,
                        })}
                    />
                    <textarea
                        className={`${style.input()} h-60`}
                        placeholder="Votre texte ici 3000 caractères  max ..."
                        {...register("content", {
                            required: true,
                            maxLength: 300,
                        })}
                    />
                    <button className={style.button("blue")}>AJOUTER</button>
                </div>
            </form>
        </div>
    );
}
