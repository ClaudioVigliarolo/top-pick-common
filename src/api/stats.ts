import axios from "axios";
import { LibraryParams } from "../config/config";
import { TopicStat } from "../interfaces";
import { ApiGetStatsQueryParams, ApiGetTopicsStatsQueryParams } from "./api";


export const getContentStats = async (from: Date, until: Date, token: string): Promise<any> => {
    const response = await axios.get(`${LibraryParams.hostname}/api/stats/content`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            from: from,
            until: until,
        },
    });
    return response.data;
};

export const getTopicsStats = async (token: string, params: ApiGetTopicsStatsQueryParams): Promise<{ topics: TopicStat[]; totalCount?: number }> => {
    const response = await axios.get(`${LibraryParams.hostname}/api/stats/topics`, {
        params: { ...params },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const getStats = async (token: string, params: ApiGetStatsQueryParams): Promise<{ topics: TopicStat[]; totalCount?: number }> => {
    const response = await axios.get(`${LibraryParams.hostname}/api/stats`, {
        params: { ...params },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};