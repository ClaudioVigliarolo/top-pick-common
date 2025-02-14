import { AxiosResponse } from "axios";
import axios from "axios";
import { LibraryParams } from "../config/config";
import { ValidationAction } from "../interfaces";
import { QuestionFeatured, Question, QuestionCreated } from "../interfaces/question";
import { ApiGetQuestionDetailsQueryParams, ApiGetQuestionPickerQueryParams, ApiGetQuestionsQueryParams, ApiGetQuestionToValidateQueryParams } from "./api";

export const getQuestions = async (token: string, params: ApiGetQuestionsQueryParams): Promise<QuestionFeatured[]> => {
    const response = await axios.get(`${LibraryParams.hostname}/api/content/questions`, {
        params,
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const getQuestionDetails = async (token: string, params: ApiGetQuestionDetailsQueryParams): Promise<Question> => {
    const response = await axios.get(`${LibraryParams.hostname}/api/content/questions/details`, {
        params,
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const getQuestionPicker = async (token: string, params: ApiGetQuestionPickerQueryParams): Promise<Question> => {
    const response = await axios.get(`${LibraryParams.hostname}/api/content/questions/picker`, {
        params,
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const createQuestion = async (token: string, question: QuestionCreated): Promise<Question> => {
    const response = await axios.post(`${LibraryParams.hostname}/api/content/questions`, question, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const updateQuestion = async (token: string, id: number, question: QuestionCreated): Promise<Question> => {
    const response = await axios.patch(`${LibraryParams.hostname}/api/content/questions/${id}`, question, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const deleteQuestion = async (token: string, id: number): Promise<void> => {
    await axios.delete(`${LibraryParams.hostname}/api/content/questions/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const sortQuestions = async (token: string, topic_id: number, questions: { id: number, index: number }[]): Promise<AxiosResponse> => {
    return await axios.patch(`${LibraryParams.hostname}/api/content/questions/sort`, {
        questions,
        topic_id
    }, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const validateQuestion = async (token: string, id: number, action: ValidationAction): Promise<void> => {
    await axios.post(`${LibraryParams.hostname}/api/content/questions/validate`, { id, action }, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const getQuestionToValidate = async (token: string, params: ApiGetQuestionToValidateQueryParams): Promise<Question | null> => {
    const response = await axios.get(`${LibraryParams.hostname}/api/content/questions/validate`, {
        params,
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};