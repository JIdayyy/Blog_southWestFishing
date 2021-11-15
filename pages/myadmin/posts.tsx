import Layout from "@components/admin/Layout";
import PostView from "@components/admin/Views/PostView";

export default function AdminPosts(): JSX.Element {
    return (
        <Layout>
            <div className="w-full h-screen flex-col overflow-y-scroll bg-black p-10 z-10 flex items-center relative  align-middle justify-start text-white ">
                <PostView />
            </div>
        </Layout>
    );
}
