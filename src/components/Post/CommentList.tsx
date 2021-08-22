import { Comment } from ".prisma/client";
import axios from "axios";
import { useQuery } from "react-query";
import CommentCard from "./CommentCard";

export default function CommentList(): JSX.Element {
    const { data, error, isLoading } = useQuery(
        "getComments",
        async () =>
            await axios
                .get(`${process.env.NEXT_PUBLIC_API_URL}comments`)
                .then((r) => r.data)
                .catch((r) => console.log(r)),
    );
    if (error) return <div>Error gettings comments</div>;
    if (isLoading) return <div>Loading comments</div>;
    return (
        <div>
            {data &&
                data.map((comment: Comment, index: number) => (
                    <CommentCard key={index} index={index} comment={comment} />
                ))}
        </div>
    );
}
