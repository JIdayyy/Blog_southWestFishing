/* eslint-disable @typescript-eslint/no-explicit-any */
import TextArea from "@components/Jodit/TextArea";
import { RootState } from "@redux/reducers";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { style } from "../../styles/TailwindClasses";

interface Props {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    refetch: () => void;
}
interface FormData {
    userId: string;
    pictures?: any;
    content: string | undefined;
}

export default function CreatePost({ setIsOpen, refetch }: Props): JSX.Element {
    const [joditArea, setJoditArea] = useState<string>();
    const [pictures, setPictures] = useState<any>([]);
    const [pictureInput, setPictureInput] = useState<string | null>(null);
    const user = useSelector((state: RootState) => state.app.user);
    const { mutate: createPost } = useMutation(
        (newPost: FormData) => axios.post("/api/posts", newPost),
        {
            onSuccess: () => refetch(),
        },
    );
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: FormData) => {
        createPost({ ...data, userId: user.id, pictures, content: joditArea });
    };

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
                    className="bg-realBlack text-black rounded-full absolute top-5 right-0 transform translate-x-20 px-5 py-1"
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
                        onClick={() => setPictures([...pictures, pictureInput])}
                    >
                        ADD
                    </button>
                    {/* <textarea
                        className={`${style.input()} h-60`}
                        placeholder="Votre texte ici 3000 caractères  max ..."
                        {...register("content", {
                            required: true,
                            maxLength: 300,
                        })}
                    /> */}
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
