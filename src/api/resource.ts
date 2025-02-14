import axios from "axios";
import { LibraryParams } from "../config/config";
import { ValidationAction } from "../interfaces";
import { Answer } from "../interfaces/answer";
import { ResourceCreated, Resource } from "../interfaces/resource";
import { ApiGetResourcesQueryParams, ApiGetResourceToValidateQueryParams } from "./api";

export async function createResource(token: string, resource: ResourceCreated): Promise<Resource> {
    const response = await axios.post(`${LibraryParams.hostname}/api/content/resources`, { ...resource }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

export async function updateResource(token: string, id: number, resource: ResourceCreated): Promise<Resource> {
    const response = await axios.patch(`${LibraryParams.hostname}/api/content/resources/${id}`, { ...resource }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

export async function deleteResource(token: string, id: number): Promise<Answer> {
    const response = await axios.delete(`${LibraryParams.hostname}/api/content/resources/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

export const getResourceToValidate = async (token: string, params: ApiGetResourceToValidateQueryParams): Promise<Resource> => {
    const response = await axios.get(`${LibraryParams.hostname}/api/content/resources/validate`, {
        params: { ...params },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export async function validateResource(token: string, id: number, action: ValidationAction): Promise<void> {
    await axios.post(`${LibraryParams.hostname}/api/content/resources/validate`, {
        id,
        action,
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export const getResources = async (token: string, params: ApiGetResourcesQueryParams): Promise<Resource[]> => {
    const response = await axios.get(`${LibraryParams.hostname}/api/content/resources`, {
        params: { ...params },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};