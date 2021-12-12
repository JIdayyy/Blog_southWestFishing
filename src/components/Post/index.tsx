import { Post } from "schema";
import Card from "./Card";

interface IProps {
    posts: Post[];
}

export default function PostList({ posts }: IProps): JSX.Element {
    return (
        <div className="w-full flex flex-col scrollbar scrollbar-thin  px-5  items-start align-middle ">
            {posts.map((post) => (
                <Card key={post._id} post={post} />
            ))}
        </div>
    );
}
