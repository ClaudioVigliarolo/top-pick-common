import axios from "axios";
import { LibraryParams } from "../config/config";
import { TopicListCreated, TopicList, TopicListInfo, TopicListFeatured } from "../interfaces";
import { ApiGetTopicListDetailsQueryParams, ApiGetUserMyTopicsQueryParams } from "./api";

export async function getTopicListDetails(token: string, userId: string, params: ApiGetTopicListDetailsQueryParams): Promise<TopicList> {
    const response = await axios.get(`${LibraryParams.hostname}/api/users/${userId}/topic-lists/details`, {
        headers: { Authorization: `Bearer ${token}` },
        params,
    });
    return response.data;
}

export async function getTopicListsIdsByTopicId(token: string, userId: string, id: number): Promise<{ list_id: number }[]> {
    const response = await axios.get(`${LibraryParams.hostname}/api/users/${userId}/topic-lists/by/topic/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}

export async function createTopicList(token: string, userId: string, list: TopicListCreated): Promise<TopicList> {
    const response = await axios.post(`${LibraryParams.hostname}/api/users/${userId}/topic-lists`, list, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}

export async function updateTopicList(token: string, userId: string, id: number, list: TopicListCreated): Promise<TopicList> {
    const response = await axios.patch(`${LibraryParams.hostname}/api/users/${userId}/topic-lists/${id}`, list, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}

export async function addTopicToUserList(token: string, userId: string, list_id: number, topic_id: number): Promise<void> {
    const response = await axios.post(`${LibraryParams.hostname}/api/users/${userId}/topic-lists/${list_id}`, { topic_id }, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}

export async function removeTopicFromUserList(token: string, userId: string, list_id: number, topic_id: number): Promise<void> {
    const response = await axios.delete(`${LibraryParams.hostname}/api/users/${userId}/topic-lists/${list_id}/${topic_id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}

export async function deleteTopicList(token: string, userId: string, id: number): Promise<void> {
    await axios.delete(`${LibraryParams.hostname}/api/users/${userId}/topic-lists/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
}

export async function getTopicLists(token: string, userId: string): Promise<TopicListFeatured[]> {
    const response = await axios.get(`${LibraryParams.hostname}/api/users/${userId}/topic-lists`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}

export async function getUserTopicsInfo(token: string, userId: string): Promise<TopicListInfo> {
    const response = await axios.get(`${LibraryParams.hostname}/api/users/${userId}/topics/details`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}

export async function getUserMyTopics(token: string, userId: string, params: ApiGetUserMyTopicsQueryParams): Promise<TopicList[]> {
    const response = await axios.get(`${LibraryParams.hostname}/api/users/${userId}/topics`, {
        headers: { Authorization: `Bearer ${token}` },
        params,
    });
    return response.data;
}

export async function getUserTopicsCount(token: string, userId: string): Promise<number> {
    const response = await axios.get(`${LibraryParams.hostname}/api/users/${userId}/topics/count`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}