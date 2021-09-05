import axios from "axios";
import Image from "next/image";
import { PostWithAuthorAndPictures } from "pages";
import { useQuery } from "react-query";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
interface IProps {
    article: PostWithAuthorAndPictures;
}
// CARROUSSEL //
export default function Article({ article }: IProps): JSX.Element {
    const { data, error, isLoading, refetch } = useQuery(
        "getComments",
        async () =>
            await axios
                .get(`${process.env.NEXT_PUBLIC_API_URL}comments`)
                .then((r) => r.data)
                .catch((r) => console.log(r)),
    );
    return (
        <div className="w-full lg:w-6/12 mt-88 h-full mb-88 flex flex-col item-center align-middle justify-center text-white">
            {article.picture[0] && (
                <div>
                    <Image
                        src={article.picture[0].url}
                        width={160}
                        height={100}
                        layout="responsive"
                        className="rounded-6"
                    />
                </div>
            )}
            <div className="w-full flex flex-col">
                <div className="text-xl font-700">{article.title}</div>
                <div className="text-10 font-200">{article.content}</div>
            </div>
            <CommentList data={data} error={error} isLoading={isLoading} />
            <CommentForm refetch={refetch} postId={article.id} />
        </div>
    );
}
