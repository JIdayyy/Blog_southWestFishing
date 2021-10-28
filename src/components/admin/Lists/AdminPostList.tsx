import React, { ReactElement } from "react";
import PostItem from "./Items/PostItem";

interface IProps {
    data: IPost[];
}

export default function AdminPostList({ data }: IProps): ReactElement {
    return (
        <ul className="flex flex-col w-full overflow-y-scroll scrollbar  items-center align-middle justify-between">
            {data.map((post: IPost) => (
                <PostItem key={post.id} post={post} />
            ))}
        </ul>
    );
}
