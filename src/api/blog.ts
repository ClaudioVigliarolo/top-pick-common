import { gql, request, GraphQLClient } from "graphql-request";
import { FeaturedBlogPost, DetailBlogPost, BlogTag } from "../interfaces";
import { LibraryParams } from "../config/config";

export const getPosts = async (first: number, skip: number, slug: string): Promise<FeaturedBlogPost[]> => {
    const query = gql`
        query MyQuery {
            posts(first: ${first}, skip: ${skip}, where: {${slug ? `tags_some: {slug: "${slug}"}` : ""}}) {
                id
                title
                slug
                excerpt
                author {
                    name
                }
                featuredimage {
                    url
                }
                createdAt
            }
        }
    `;
    const result = await request(LibraryParams.graphql_hostname, query);
    return result.posts;
};

export const getPostDetails = async (slug: string): Promise<DetailBlogPost> => {
    const query = gql`
        query GetPostDetails($slug: String!) {
            post(where: { slug: $slug }) {
                id
                title
                slug
                excerpt
                createdAt
                summary
                comments {
                    message
                    name
                    email
                }
                featuredimage {
                    url
                }
                content {
                    html
                }
                author {
                    name
                }
            }
        }
    `;
    const result = await request(LibraryParams.graphql_hostname, query, { slug });
    return result.post;
};

const publishComment = async (email: string, name: string, message: string, slug: string): Promise<void> => {
    const graphQLClient = new GraphQLClient(LibraryParams.graphql_hostname, {
        headers: {
            authorization: `Bearer ${process.env.VUE_APP_GRAPHCMS_TOKEN}`,
        },
    });
    const query = gql`
        mutation CreateComment($name: String!, $email: String!, $message: String!, $slug: String!) {
            createComment(
                data: {
                    name: $name
                    email: $email
                    message: $message
                    post: { connect: { slug: $slug } }
                }
            ) {
                id
            }
        }
    `;
    await graphQLClient.request(query, { name, email, message, slug });
};

export default publishComment;

export const getBlogTags = async (): Promise<BlogTag[]> => {
    const query = gql`
        query MyQuery {
            tags {
                title
                slug
            }
        }
    `;
    const result = await request(LibraryParams.graphql_hostname, query);
    return result.tags;
};

export const getRecentPosts = async (counter: number): Promise<FeaturedBlogPost[]> => {
    const query = gql`
        query MyQuery {
            posts(orderBy: createdAt_DESC, first: ${counter}) {
                id
                title
                slug
                excerpt
                author {
                    name
                }
                tags {
                    title
                }
                featuredimage {
                    url
                }
                createdAt
            }
        }
    `;
    const result = await request(LibraryParams.graphql_hostname, query);
    return result.posts;
};

export const getPostsCount = async (slug: string): Promise<number> => {
    const query = gql`
        query MyQuery {
            postsConnection(where: {${slug ? `tags_some: {slug: "${slug}"}` : ""}}) {
                aggregate {
                    count
                }
            }
        }
    `;
    const result = await request(LibraryParams.graphql_hostname, query);
    return result.postsConnection.aggregate.count;
};