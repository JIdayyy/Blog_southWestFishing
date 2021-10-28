import React, { ReactElement } from "react";
import CommentItem from "./Items/CommentItem";

interface IProps {
    comments: IComment[];
}

export default function AdminCommentList({ comments }: IProps): ReactElement {
    return (
        <ul className="flex flex-col w-full scrollbar items-center align-middle justify-between">
            {comments.map((comment) => (
                <CommentItem comment={comment} key={comment.id} />
            ))}
        </ul>
    );
}
