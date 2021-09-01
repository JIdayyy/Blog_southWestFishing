import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { User } from ".prisma/client";
import { motion } from "framer-motion";

export default function UserView(): JSX.Element {
    const { data, isLoading, error, refetch } = useQuery("getUsers", () =>
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}users`)
            .then((r) => r.data)
            .catch((err) => console.log(err)),
    );
    const mutation = useMutation(
        (id: string) =>
            axios.delete(`${process.env.NEXT_PUBLIC_API_URL}users/${id}`),
        {
            onError: (err) => console.log(err),
            onSuccess: () => refetch(),
        },
    );
    if (error) return <div>Error ...</div>;
    if (isLoading) return <div>Loading ...</div>;
    return (
        <div className="bg-black my-20 shadow-8 text-10 w-full h-1/2 flex flex-col rounded-2 p-4">
            <div className="text-xl">Liste des utilisateurs :</div>
            <div className="flex border-b py-8 text-gray-600 w-full items-center align-middle justify-between">
                <div className="w-full ">Name</div>
                <div className="w-full ">Email</div>
                <div className="bg-red rounded-1 px-3 rounded-2 opacity-0">
                    SUPPRIMER
                </div>
            </div>
            <ul className="flex flex-col w-full scrollbar   overflow-y-scroll items-center align-middle justify-between">
                {data &&
                    data.map((user: User) => (
                        <motion.li
                            whileHover={{ backgroundColor: "#696969" }}
                            className="flex cursor-pointer my-2 w-full items-center align-middle justify-between"
                        >
                            <div className="w-full ">{user.name}</div>
                            <div className="w-full ">{user.email}</div>
                            <button
                                onClick={() => mutation.mutate(user.id)}
                                className="bg-red rounded-1"
                            >
                                SUPPRIMER
                            </button>
                        </motion.li>
                    ))}
            </ul>
        </div>
    );
}