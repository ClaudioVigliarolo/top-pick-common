import { TopicFeatured } from "./topic";
export interface TopicList {
    id: number;
    title?: string;
    description?: string;
    topic_list_topics: {
        topics: TopicFeatured;
    }[];
}
export interface TopicListCreated {
    title?: string;
    description?: string;
}
export interface TopicListFeatured {
    id: number;
    title?: string;
    selected?: boolean;
}
export interface TopicListInfo {
    lastViewedCounter: number;
    lastEditedCounter: number;
}
