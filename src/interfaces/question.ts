import { Answer } from "./answer";
import { Resource } from "./resource";
import { TopicFeatured } from "./topic";
import { UserFeatured } from "./user";
export interface QuestionCreated {
    title: string;
    picker_active?: boolean;
    topic_id: number;
    active?: boolean;
    type?: QuestionType;
}
export interface QuestionFeatured {
    id: number;
    title: string;
    user_id: string;
    status?: ValidationStatus;
}
export interface Question {
    id: number;
    title: string;
    user_id: string;
    status?: ValidationStatus;
    resources?: Resource[];
    answers?: Answer[];
    users?: UserFeatured;
    answer_validate?: Answer;
    resource_validate?: Resource;
    answer_count?: number;
    resource_count?: number;
    type: QuestionType;
    active: boolean;
    picker_active: boolean;
    topics?: TopicFeatured;
    created_by_creator: boolean;
}
export enum ValidationStatus {
    Active = "active",
    Pending = "pending",
    Rejected = "rejected"
}
export enum QuestionType {
    Default = "default",
    Discussion = "discussion",
    SpeedFriending = "speed friending",
    Knowledge = "knowledge",
    Fun = "fun"
}
