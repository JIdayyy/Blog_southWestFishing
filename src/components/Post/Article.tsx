import axios from "axios";
import MyCarousel from "@components/Carousel/index";
import { PostWithAuthorAndPictures } from "pages";
import { useQuery } from "react-query";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
interface IProps {
    article: PostWithAuthorAndPictures;
    preview?: boolean;
}
// CARROUSSEL //
export default function Article({
    article,
    preview = false,
}: IProps): JSX.Element {
    const { data, error, isLoading } = useQuery(
        "getPostComments",
        async () =>
            await axios
                .get(`${process.env.NEXT_PUBLIC_API_URL}comments`)
                .then((r) => r.data)
                .catch((r) => console.log(r)),
        {
            enabled: !preview,
        },
    );
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;
    if (data) {
        data.reverse();
    }
    return (
        <div className="w-full lg:w-6/12 mt-40 h-full mb-88 flex flex-col shadow-10 md:p-10 item-center align-middle justify-center text-black">
            {article.picture.length !== 0 && (
                <MyCarousel pictures={article.picture} />
            )}
            <div className="w-full flex flex-col">
                <div className="text-xl font-700">{article.title}</div>
                <div
                    dangerouslySetInnerHTML={{
                        __html: article.content.toString(),
                    }}
                    className="text-10 font-200"
                ></div>
            </div>
            {!preview && (
                <CommentList data={data} error={error} isLoading={isLoading} />
            )}
            {!preview && <CommentForm postId={article.id} />}
        </div>
    );
}
