import { ValidationStatus } from "./question";
import { UserFeatured } from "./user";
export interface Answer {
    id: number;
    title: string;
    users?: UserFeatured;
    user_id: string;
    status: ValidationStatus;
    created_by_creator: boolean;
}
export interface AnswerCreated {
    title: string;
    question_id: number;
}
