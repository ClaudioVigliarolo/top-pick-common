export interface Category {
    title: string;
    slug: string;
    id: number;
    description: string;
    image: string;
    topicCount?: number;
    showAlphabet?: boolean;
}
export interface CategoryFeatured {
    slug: string;
    title: string;
    id: number;
    image: string;
    _count?: {
        topics_categories: number;
    };
}
export interface CategoryCreated {
    title: string;
    slug: string;
    description: string;
    image: string;
    topics?: {
        topic_id: number;
    }[];
}
