export interface PostComment {
    email: string;
    message: string;
    name: string;
    id: string;
    createdAt: string;
}
export interface FeaturedBlogPost {
    title: string;
    id: string;
    featuredimage: {
        url: string;
    };
    createdAt: string;
    author: {
        name: string;
    };
    tags: {
        title: string;
    };
    excerpt: string;
    category: string;
    comments: PostComment[];
}
export interface DetailBlogPost extends FeaturedBlogPost {
    content: any;
    summary: any;
    curiosity?: any;
    comments: any;
}
export interface BlogTag {
    title: string;
    slug: string;
    active?: boolean;
}
