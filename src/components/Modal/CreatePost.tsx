/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { RootState } from "@redux/reducers";
import { Dispatch, SetStateAction, useState } from "react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import AXIOS from "src/utils/AXIOS";
import style from "../../styles/TailwindClasses";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface Props {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}
interface FormData {
    userId: string;
    pictures?: any;
    content: string | undefined;
}

const modules = {
    toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        [{ color: [] }, { background: [] }],

        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ align: [] }],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        ["link", "image", "video"],
        ["code-block"],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
};

const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "color",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "align",
    "code-block",
];

export default function CreatePost({ setIsOpen }: Props): JSX.Element {
    const queryClient = useQueryClient();
    const [joditArea, setJoditArea] = useState("");
    const [pictures, setPictures] = useState<any>([]);
    const [pictureInput, setPictureInput] = useState<string | null>(null);
    const user = useSelector((state: RootState) => state.app.user);
    const notify = () => toast("Post créé avec succès !");

    const { mutate: createPost } = useMutation(
        (newPost: FormData) => AXIOS.post("/api/posts", newPost),
        {
            onSuccess: () => {
                notify();
                queryClient.refetchQueries(["getPosts"]);
                setIsOpen(false);
            },
        },
    );

    const { register, handleSubmit } = useForm();
    const onSubmit = (data: FormData) => {
        createPost({ ...data, userId: user.id, pictures, content: joditArea });
    };

    return (
        <div className="bg-realBlack z-9999 bg-opacity-70 flex flex-col items-center align-middle justify-center p-10 w-full h-full absolute top-0 left-0">
            <h1 className="font-bold text-2xl">Créer un Post</h1>
            <form
                className="flex flex-col items-center align-middle justify-center bg-black rounded-4 p-10 relative"
                onSubmit={handleSubmit(onSubmit)}
            >
                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="bg-black  text-white rounded-full absolute top-5 right-0 transform translate-x-20 px-5 py-1"
                >
                    X
                </button>
                <div>
                    <label htmlFor="title" className={style.label()}>
                        Titre :
                    </label>
                    <input
                        id="title"
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
                    <div className="w-full flex justify-between">
                        <button
                            type="button"
                            className="bg-green-400 px-4 py-2 text-white font-bold rounded-2 my-4"
                            onClick={(e) => {
                                e.preventDefault();
                                setPictures([...pictures, pictureInput]);
                            }}
                        >
                            ADD
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-400  px-4 py-2 text-white font-bold rounded-2 my-4"
                        >
                            AJOUTER
                        </button>
                    </div>

                    <ReactQuill
                        value={joditArea}
                        onChange={setJoditArea}
                        className="h-360 mb-28 text-white"
                        modules={modules}
                        formats={formats}
                        placeholder="Votre texte ici ..."
                    />
                </div>
            </form>
            <div className="flex flex-wrap">
                {pictures &&
                    pictures.map((picture: any) => (
                        <img
                            alt="post_picture"
                            className="w-60 h-60 m-4"
                            src={picture}
                        />
                    ))}
            </div>
        </div>
    );
}
