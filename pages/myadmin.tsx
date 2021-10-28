import Layout from "@components/admin/Layout";
import CommentView from "@components/admin/Views/CommentView";
import PostView from "@components/admin/Views/PostView";

export default function Admin(): JSX.Element {
    return (
        <Layout>
            <div className="w-full h-screen flex-col overflow-y-scroll bg-black p-10 z-10 flex items-center relative  align-middle justify-start text-white ">
                <PostView />
                <CommentView />
            </div>
        </Layout>
    );
}
