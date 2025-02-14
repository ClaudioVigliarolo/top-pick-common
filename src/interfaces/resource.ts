import { ValidationStatus } from "./question";
import { UserFeatured } from "./user";
export interface Resource {
    id: number;
    url: string;
    title: string;
    snippet: string;
    thumbnail: string;
    users?: UserFeatured;
    user_id: string;
    status: ValidationStatus;
    created_by_creator: boolean;
}
export interface ResourceCreated {
    url: string;
    question_id: number;
}
