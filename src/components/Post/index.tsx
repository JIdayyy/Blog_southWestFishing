import { PostWithAuthorAndPictures } from "pages";
import Card from "./Card";

interface IProps {
    posts: PostWithAuthorAndPictures[];
}

export default function PostList({ posts }: IProps): JSX.Element {
    console.log(posts);

    return (
        <div className="w-full flex flex-col overflow-y-scroll     items-start align-middle ">
            {posts.map((post) => (
                <Card key={post.id} post={post} />
            ))}
        </div>
    );
}
