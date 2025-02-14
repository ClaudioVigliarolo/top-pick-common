import { SearchKeyword } from "./search";
export enum TopicLevel {
    Easy = "easy",
    Medium = "medium",
    Hard = "hard"
}
export interface TopicFeatured {
    id: number;
    title: string;
    slug: string;
    image: string;
    timestamp: Date;
    description: string;
    active?: boolean;
    topics_categories?: {
        categories: {
            id: number;
            title: string;
            image: string;
            slug: string;
        };
    }[];
}
export interface TopicTag {
    title: string;
    active?: boolean;
}
export interface TopicInterest {
    title: string;
    id: number;
}
export interface Topic {
    id: number;
    title: string;
    slug: string;
    type: TopicType;
    source: string;
    level: TopicLevel;
    description: string;
    image: string;
    topic_tags?: TopicTag[];
    topics_related_topicsTotopics_related_source_id?: {
        topics_topicsTotopics_related_dest_id: {
            id: number;
            title: string;
            image: string;
            slug: string;
        };
    }[];
    topics_categories?: {
        categories: {
            id: number;
            title: string;
            image: string;
            slug: string;
        };
    }[];
    topic_interests?: {
        interests: {
            title: string;
        };
        interest_id: number;
    }[];
    questionCount?: number;
    timestamp: Date;
    active?: boolean;
    featured?: boolean;
    keywordsImage?: SearchKeyword[];
    keywordsArticle?: SearchKeyword[];
    keywordsVideo?: SearchKeyword[];
}
export interface TopicCreated {
    source: string;
    level: TopicLevel;
    slug: string;
    featured: boolean;
    active: boolean;
    title: string;
    description: string;
    type?: TopicType;
    image: string;
    topics: {
        dest_id: number;
    }[];
    categories: {
        category_id: number;
    }[];
    topic_tags: TopicTag[];
    topic_interests: {
        interest_id: number;
    }[];
}
export enum TopicType {
    Default = "default",
    Discussion = "discussion",
    SpeedFriending = "speed friending",
    Knowledge = "knowledge",
    Fun = "fun"
}
export interface MyTopic {
    topics: TopicFeatured;
}
export interface TopicStat {
    topics: TopicFeatured;
}
export enum TopicSource {
    Toppick = "TopPick Creators",
    TESLJournal = "The Internet TESL Journal",
    ESLDiscussions = "ESL Conversation Questions"
}
