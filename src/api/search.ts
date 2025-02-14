import { AxiosResponse } from "axios";
import axios from 'axios';
import { LibraryParams } from "../config/config";
import { SearchKeyword, SearchKeywordCreated, SearchResultArticle, SearchResultVideo, SearchResultImage } from "../interfaces/search";
import { ApiGetSearchKeywordsQueryParams, ApiGetSearchResultsQueryParams } from "./api";


export const getSearchKeywords = async (token: string, params: ApiGetSearchKeywordsQueryParams): Promise<SearchKeyword[]> => {
  const response = await axios.get(`${LibraryParams.hostname}/api/search/keywords`, {
    params: { ...params },
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createSearchKeyword = async (token: string, keyword: SearchKeywordCreated): Promise<SearchKeyword> => {
  const response = await axios.post(`${LibraryParams.hostname}/api/search/keywords`, { ...keyword }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateSearchKeyword = async (token: string, id: number, keyword: SearchKeywordCreated): Promise<SearchKeyword> => {
  const response = await axios.patch(`${LibraryParams.hostname}/api/search/keywords/${id}`, { ...keyword }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteSearchKeyword = async (token: string, id: number): Promise<SearchKeyword[]> => {
  const response = await axios.delete(`${LibraryParams.hostname}/api/search/keywords/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getSearchResultsArticle = async (token: string, params: ApiGetSearchResultsQueryParams): Promise<SearchResultArticle[]> => {
  const response = await axios.get(`${LibraryParams.hostname}/api/search/results/articles`, {
    params: { ...params },
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getSearchResultsVideo = async (token: string, params: ApiGetSearchResultsQueryParams): Promise<SearchResultVideo[]> => {
  const response = await axios.get(`${LibraryParams.hostname}/api/search/results/videos`, {
    params: { ...params },
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getSearchResultsImage = async (token: string, params: ApiGetSearchResultsQueryParams): Promise<SearchResultImage[]> => {
  const response = await axios.get(`${LibraryParams.hostname}/api/search/results/images`, {
    params: { ...params },
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const sortSearchKeywords = async (token: string, keywords: { id: number; index: number }[]): Promise<AxiosResponse> => {
  const response = await axios.patch(`${LibraryParams.hostname}/api/search/keywords/sort`, { keywords }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const deleteSearchResultArticle = async (token: string, id: number): Promise<AxiosResponse> => {
  const response = await axios.delete(`${LibraryParams.hostname}/api/search/results/articles/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const deleteSearchResultVideo = async (token: string, id: number): Promise<AxiosResponse> => {
  const response = await axios.delete(`${LibraryParams.hostname}/api/search/results/videos/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const deleteSearchResultImage = async (token: string, id: number): Promise<AxiosResponse> => {
  const response = await axios.delete(`${LibraryParams.hostname}/api/search/results/images/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const createSearchResultArticle = async (token: string, link: string, keyword_id: number): Promise<SearchResultArticle> => {
  const response = await axios.post(`${LibraryParams.hostname}/api/search/results/articles`, { link, keyword_id }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createSearchResultVideo = async (token: string, link: string, keyword_id: number): Promise<SearchResultVideo> => {
  const response = await axios.post(`${LibraryParams.hostname}/api/search/results/videos`, { link, keyword_id }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createSearchResultImage = async (token: string, link: string, keyword_id: number): Promise<SearchResultImage> => {
  const response = await axios.post(`${LibraryParams.hostname}/api/search/results/images`, { link, keyword_id }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateSearchResultArticle = async (token: string, id: number, link: string): Promise<SearchResultArticle> => {
  const response = await axios.patch(`${LibraryParams.hostname}/api/search/results/articles/${id}`, { link }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateSearchResultVideo = async (token: string, id: number, link: string): Promise<SearchResultVideo> => {
  const response = await axios.patch(`${LibraryParams.hostname}/api/search/results/videos/${id}`, { link }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateSearchResultImage = async (token: string, id: number, link: string): Promise<SearchResultImage> => {
  const response = await axios.patch(`${LibraryParams.hostname}/api/search/results/images/${id}`, { link }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};