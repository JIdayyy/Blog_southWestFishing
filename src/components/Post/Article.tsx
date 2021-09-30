import axios from "axios";
import MyCarousel from "@components/Carousel/index";
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
        <div className="w-full lg:w-6/12 mt-40 h-full mb-88 flex flex-col item-center align-middle justify-center text-white">
            <MyCarousel pictures={article.picture} />
            <div className="w-full flex flex-col">
                <div className="text-xl font-700">{article.title}</div>
                <div
                    dangerouslySetInnerHTML={{
                        __html: article.content.toString(),
                    }}
                    className="text-10 font-200"
                ></div>
            </div>
            <CommentList data={data} error={error} isLoading={isLoading} />
            <CommentForm refetch={refetch} postId={article.id} />
        </div>
    );
}
