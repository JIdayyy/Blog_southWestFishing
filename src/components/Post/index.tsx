import { PostWithAuthorAndPictures } from "pages";
import Card from "./Card";

interface IProps {
    posts: PostWithAuthorAndPictures[];
}

export default function PostList({ posts }: IProps): JSX.Element {
    return (
        <div className="w-full px-10 flex flex-col overflow-y-auto overflow-x-hidden  items-start align-middle ">
            {posts.map((post) => (
                <Card key={post.id} post={post} />
            ))}
        </div>
    );
}
