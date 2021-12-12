interface IPost {
    id: string;
    title: string;
    content: string;
    picture: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
}

interface IComment {
    id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    email: string;
    postId: string;
    post: IPost;
}

interface IPicture {
    id: string;
    url: string;
    post: IPost;
    createdAt: Date;
    updatedAt: Date;
    main: boolean;
    postId: string;
}

interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    posts: IPost[];
    role: Role;
    createdAt: Date;
    updatedAt: Date;
}

type Role = "ADMIN" | "USER";
declare module "@sanity/block-content-to-react";
