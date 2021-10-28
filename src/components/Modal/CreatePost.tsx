/* eslint-disable @typescript-eslint/no-explicit-any */
import TextArea from "@components/Jodit/TextArea";
import { RootState } from "@redux/reducers";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { style } from "../../styles/TailwindClasses";

interface Props {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}
interface FormData {
    userId: string;
    pictures?: any;
    content: string | undefined;
}

export default function CreatePost({ setIsOpen }: Props): JSX.Element {
    const queryClient = useQueryClient();
    const [joditArea, setJoditArea] = useState<string>();
    const [pictures, setPictures] = useState<any>([]);
    const [pictureInput, setPictureInput] = useState<string | null>(null);
    const user = useSelector((state: RootState) => state.app.user);
    const notify = () => toast("Post créé avec succès !");

    const { mutate: createPost } = useMutation(
        (newPost: FormData) => axios.post("/api/posts", newPost),
        {
            onSuccess: () => {
                notify();
                queryClient.refetchQueries(["getPosts"]);
            },
        },
    );

    const { register, handleSubmit } = useForm();
    const onSubmit = (data: FormData) => {
        createPost({ ...data, userId: user.id, pictures, content: joditArea });
    };

    return (
        <div className={`bg-black bg-opacity-70 ${style.flexContainer("col")}`}>
            <h1 className="font-bold text-2xl">Créer un Post</h1>
            <form className={style.modal} onSubmit={handleSubmit(onSubmit)}>
                <button
                    onClick={() => setIsOpen(false)}
                    className="bg-black  text-white rounded-full absolute top-5 right-0 transform translate-x-20 px-5 py-1"
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

                    <input
                        onChange={(e) => setPictureInput(e.target.value)}
                        className={style.input()}
                        type="text"
                        placeholder="Url de l'image de votre post"
                    />
                    <button
                        className={style.button("green")}
                        onClick={(e) => {
                            e.preventDefault();
                            setPictures([...pictures, pictureInput]);
                        }}
                    >
                        ADD
                    </button>

                    <TextArea
                        joditArea={joditArea}
                        setJoditArea={setJoditArea}
                    />
                    <button className={style.button("blue")}>AJOUTER</button>
                </div>
            </form>
            <div className="flex flex-wrap">
                {pictures &&
                    pictures.map((picture: any) => (
                        <img className="w-60 h-60" src={picture}></img>
                    ))}
            </div>
        </div>
    );
}
