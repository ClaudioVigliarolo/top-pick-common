import axios from "axios";
import { LibraryParams } from "../config/config";
import { AnswerCreated, Answer, ValidationAction } from "../interfaces";
import { ApiGetAnswersQueryParams, ApiGetAnswerToValidateQueryParams } from "./api";

export async function createAnswer(token: string, answer: AnswerCreated): Promise<Answer> {
    const response = await axios.post(`${LibraryParams.hostname}/api/content/answers`, { ...answer }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

export async function updateAnswer(token: string, id: number, answer: AnswerCreated): Promise<Answer> {
    const response = await axios.patch(`${LibraryParams.hostname}/api/content/answers/${id}`, { ...answer }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

export async function deleteAnswer(token: string, id: number): Promise<Answer> {
    const response = await axios.delete(`${LibraryParams.hostname}/api/content/answers/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

export const getAnswerToValidate = async (token: string, params: ApiGetAnswerToValidateQueryParams): Promise<Answer> => {
    const response = await axios.get(`${LibraryParams.hostname}/api/content/answers/validate`, {
        params: { ...params },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export async function validateAnswer(token: string, id: number, action: ValidationAction): Promise<void> {
    await axios.post(`${LibraryParams.hostname}/api/content/answers/validate`, {
        id,
        action,
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export const getAnswers = async (token: string, params: ApiGetAnswersQueryParams): Promise<Answer[]> => {
    const response = await axios.get(`${LibraryParams.hostname}/api/content/answers`, {
        params: { ...params },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};