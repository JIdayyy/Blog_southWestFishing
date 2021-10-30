/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
import React, { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import style from "@styles/TailwindClasses";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { login } from "@redux/actions";
import { Button } from "@components/Assets/button";
import { toast } from "react-toastify";
import AXIOS from "src/utils/AXIOS";

interface IProps {
    setIsAdminLogin: Dispatch<SetStateAction<boolean>>;
}

function Modal({ setIsAdminLogin }: IProps): JSX.Element {
    const notify = () => toast("Authentification réussie !");
    const [invalid, setInvalid] = useState<boolean>(false);
    const router = useRouter();
    const { handleSubmit, register } = useForm();
    const dispatch = useDispatch();
    const { mutate: loginSubmit } = useMutation(
        (credentials: { username: string; password: string }) =>
            AXIOS.post("/api/auth/login", credentials).then((r) => r.data),
        {
            onSuccess: (data) => {
                notify();
                dispatch(login(data));
                setIsAdminLogin(false);
                router.push("/myadmin");
            },
            onError: (error) => {
                setInvalid(true);
                console.log(error);
            },
        },
    );

    const onSubmit = (data: { username: string; password: string }) => {
        loginSubmit(data);
    };
    return (
        <div className="w-screen h-screen bg-gray-900 bg-opacity-50 text-black fixed top-0 flex flex-col items-center justify-center align-middle z-9999">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex-col flex bg-black rounded-2 p-10 items-center justify-center"
                action=""
            >
                {invalid && <div className="text-red">Invalid credentials</div>}
                <label htmlFor="email">Email :</label>
                <input
                    className={style.input()}
                    type="text"
                    placeholder="email ..."
                    {...register("email", {
                        required: true,
                        maxLength: 3000,
                    })}
                />
                <label htmlFor="">Password :</label>
                <input
                    className={style.input()}
                    type="password"
                    placeholder="Password ..."
                    {...register("password", {
                        required: true,
                        maxLength: 3000,
                    })}
                />
                <div className="w-full flex justify-between items-center my-4">
                    <Button
                        onClick={() => setIsAdminLogin(false)}
                        type="button"
                        className="bg-red-400 hover:bg-red-600 px-2 py-1 text-10"
                    >
                        Close
                    </Button>
                    <Button
                        type="submit"
                        className="bg-blue-A400 hover:bg-blue-600 px-2 py-1 text-10"
                    >
                        Login
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Modal;
