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
    if (error) return <div>Error gettings comments</div>;
    if (isLoading) return <div>Loading comments</div>;
    return (
        <div>
            {data &&
                data.map((comment) => (
                    <CommentCard key={comment.id} comment={comment} />
                ))}
        </div>
    );
}
