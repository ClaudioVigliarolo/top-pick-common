import axios from 'axios';
import { TopicFeatured, TopicInterest, Topic, TopicCreated } from "../interfaces/topic";
import { ApiGetFeaturedTopicsQueryParams, ApiGetTopicDetailsQueryParams, ApiGetTopicPickerQueryParams, ApiGetTopicsCountQueryParams, ApiGetTopicsQueryParams, ApiSearchTopicsByKeywordQueryParams } from "./api";
import { LibraryParams } from "../config/config";

export const getTopicDetails = async (token: string, params: ApiGetTopicDetailsQueryParams): Promise<Topic> => {
    const response = await axios.get(`${LibraryParams.hostname}/api/content/topics/details`, {
        params: { ...params },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const getTopics = async (params: ApiGetTopicsQueryParams): Promise<TopicFeatured[]> => {
    const response = await axios.get(`${LibraryParams.hostname}/api/content/topics`, {
        params: { ...params },
    });
    return response.data;
};

export const getFeaturedTopics = async (params: ApiGetFeaturedTopicsQueryParams): Promise<TopicFeatured[]> => {
    const response = await axios.get(`${LibraryParams.hostname}/api/content/topics/featured`, {
        params: { ...params },
    });
    return response.data;
};

export const getTopicsCount = async (params: ApiGetTopicsCountQueryParams): Promise<number> => {
    const response = await axios.get(`${LibraryParams.hostname}/api/content/topics/count`, {
        params: { ...params },
    });
    return response.data;
};

export const getTopicsInterests = async (): Promise<TopicInterest[]> => {
    const response = await axios.get(`${LibraryParams.hostname}/api/content/topics/interests`);
    return response.data;
};

export const searchTopicsByKeyword = async (params: ApiSearchTopicsByKeywordQueryParams): Promise<TopicFeatured[]> => {
    const response = await axios.get(`${LibraryParams.hostname}/api/content/topics/search`, {
        params: { ...params },
    });
    return response.data;
};

export const createTopic = async (token: string, topic: TopicCreated): Promise<Topic> => {
    const res = await axios.post(`${LibraryParams.hostname}/api/content/topics`, { ...topic }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
};

export const updateTopic = async (token: string, id: number, topic: TopicCreated): Promise<Topic> => {
    const res = await axios.patch(`${LibraryParams.hostname}/api/content/topics/${id}`, { ...topic }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
};

export const deleteTopic = async (token: string, id: number): Promise<void> => {
    await axios.delete(`${LibraryParams.hostname}/api/content/topics/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const getTopicPicker = async (token: string, params: ApiGetTopicPickerQueryParams): Promise<Topic> => {
    const response = await axios.get(`${LibraryParams.hostname}/api/content/topics/picker`, {
        params: { ...params },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};