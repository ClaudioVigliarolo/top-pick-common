import { QuestionType, TopicType } from "../interfaces";
import { StatAction, StatTopicAction } from "../interfaces/stats";
export interface ApiGetTopicDetailsQueryParams {
    id?: number;
    include_interests?: boolean;
    count_questions?: boolean;
    include_search_kewyords?: boolean;
    include_related_topics?: boolean;
    include_social_tags?: boolean;
    include_categories?: boolean;
    slug?: string;
}
export interface ApiGetTopicPickerQueryParams {
    include_categories?: boolean;
    include_info?: boolean;
    type: TopicType;
}
export interface ApiGetTopicsQueryParams {
    limit?: number;
    skip?: number;
    category_id?: number;
    topic_id?: number;
    include_inactive?: boolean;
    contains?: string;
    sort_by_title?: boolean;
    sort_by_timestamp?: boolean;
    include_categories?: boolean;
    include_info?: boolean;
    featured?: boolean;
    title_starts_with?: string;
    title_contains?: string;
}
export interface ApiGetFeaturedTopicsQueryParams {
    count: number;
}
export interface ApiGetTopicsCountQueryParams {
    start_with_letter?: string;
}
export interface ApiSearchTopicsByKeywordQueryParams {
    keyword: string;
    count: number;
}
export interface ApiGetCategoriesQueryParams {
    limit?: number;
    skip?: number;
    topic_id?: number;
    sort_by_timestamp?: boolean;
    count_topics?: boolean;
    sort_by_title?: boolean;
}
export interface ApiGetCategoryDetailsQueryParams {
    slug?: string;
    id?: number;
    count_topics?: boolean;
}
export interface ApiGetSearchKeywordsQueryParams {
    topic_id: number;
    search_type: string;
    include_inactive: boolean;
}
export interface ApiGetSearchResultsQueryParams {
    keyword_id: number;
    limit?: number;
    skip?: number;
}
export interface ApiGetQuestionsQueryParams {
    topic_id: number;
    include_inactive?: boolean;
    limit?: number;
    skip?: number;
}
export interface ApiGetQuestionDetailsQueryParams {
    id: number;
    answer_count?: number;
    resource_count?: number;
    include_answers?: boolean;
    include_resources?: boolean;
    include_resource_validate?: boolean;
    include_answer_validate?: boolean;
    include_topic?: boolean;
}
export interface ApiGetQuestionPickerQueryParams {
    answer_count?: number;
    resource_count?: number;
    include_answers?: boolean;
    include_resources?: boolean;
    type: QuestionType;
}
export interface ApiGetQuestionToValidateQueryParams {
    topic_id?: number;
}
export interface ApiGetAnswerToValidateQueryParams {
    question_id?: number;
}
export interface ApiGetAnswersQueryParams {
    question_id: number;
    limit?: number;
    skip?: number;
}
export interface ApiGetResourceToValidateQueryParams {
    question_id?: number;
}
export interface ApiGetResourcesQueryParams {
    question_id: number;
    limit?: number;
    skip?: number;
}
export interface ApiGetTopicListDetailsQueryParams {
    id: number;
}
export interface ApiGetLastEditedTopicsQueryParams {
    limit: number;
    skip: number;
}
export interface ApiGetTopicsStatsQueryParams {
    limit: number;
    skip: number;
    user_id: string;
    action: StatTopicAction;
    include_total_count?: boolean;
}
export interface ApiGetUserMyTopicsQueryParams {
    limit: number;
    skip: number;
    random?: boolean;
}
export interface ApiGetUserDetailsQueryParams {
    user_id?: string;
    username?: string;
}
export interface ApiGetStatsQueryParams {
    limit: number;
    skip: number;
    user_id?: string;
    action?: StatAction;
    include_total_count?: boolean;
}
