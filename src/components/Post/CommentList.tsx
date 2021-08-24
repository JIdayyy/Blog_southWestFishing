import { Comment } from ".prisma/client";

import CommentCard from "./CommentCard";
interface IProps {
    data: Comment[];
    error: unknown;
    isLoading: boolean;
}
export default function CommentList({
    data,
    error,
    isLoading,
}: IProps): JSX.Element {
    console.log("test");

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
