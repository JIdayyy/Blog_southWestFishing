import React, { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { style } from "@styles/TailwindClasses";
import axios from "axios";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { login } from "@redux/actions";
interface IProps {
    setIsAdminLogin: Dispatch<SetStateAction<boolean>>;
}
function Modal({ setIsAdminLogin }: IProps): JSX.Element {
    const [invalid, setInvalid] = useState<boolean>(false);
    const router = useRouter();
    const { handleSubmit, register } = useForm();
    const dispatch = useDispatch();
    const { mutate: loginSubmit } = useMutation(
        (credentials: { username: string; password: string }) =>
            axios.post("/api/auth/login", credentials).then((r) => r.data),
        {
            onSuccess: (data) => {
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
        <div className="w-screen h-screen bg-gray-900 text-white fixed top-0 flex flex-col items-center justify-center align-middle z-9999">
            <form
                onClick={handleSubmit(onSubmit)}
                className="flex-col flex"
                action=""
            >
                {invalid && <div className="text-red">Invalid credentials</div>}
                <label htmlFor="">Email :</label>
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
                    type="text"
                    placeholder="Password ..."
                    {...register("password", {
                        required: true,
                        maxLength: 3000,
                    })}
                />
                <button type="submit">LOGIN</button>
            </form>
        </div>
    );
}

export default Modal;
