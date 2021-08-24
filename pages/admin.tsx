import Layout from "@components/admin/Layout";
import CommentView from "@components/admin/Views/CommentView";
import PostView from "@components/admin/Views/PostView";
import UserView from "@components/admin/Views/UserView";

export default function admin(): JSX.Element {
    return (
        <Layout>
            <div className="w-full h-screen flex-col overflow-y-scroll bg-white p-10 z-10 flex items-center  align-middle justify-between text-white ">
                <UserView />
                <PostView />
                <CommentView />
            </div>
        </Layout>
    );
}
