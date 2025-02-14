import axios from "axios";
import { LibraryParams } from "../config/config";
import { AxiosResponse } from "axios";
import { User, UserFeatured, UserProfileInfo, UserProfileInterest, UserProfileSocial, UserCreated } from "../interfaces/user";
import { ApiGetUserDetailsQueryParams } from "./api";


export async function registerUser(user: UserCreated): Promise<AxiosResponse> {
    const response = await axios.post(`${LibraryParams.hostname}/api/users/register`, user);
    return response.data;
}

export async function updateUserInfo(token: string, id: string, userData: UserProfileInfo): Promise<User> {
    const response = await axios.patch(`${LibraryParams.hostname}/api/users/${id}/info`, userData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

export async function updateUserSocial(token: string, id: string, userData: UserProfileSocial): Promise<User> {
    const response = await axios.patch(`${LibraryParams.hostname}/api/users/${id}/social`, userData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

export async function updateUserProfileInterest(token: string, id: string, userData: UserProfileInterest): Promise<User> {
    const response = await axios.patch(`${LibraryParams.hostname}/api/users/${id}/interests`, userData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

export async function updateProfileImage(token: string, id: string, image: string | null): Promise<AxiosResponse> {
    const response = await axios.patch(`${LibraryParams.hostname}/api/users/${id}/image`, { image }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

export async function sendEmailVerification(token: string): Promise<AxiosResponse> {
    const response = await axios.get(`${LibraryParams.hostname}/api/users/send-confirmation-email`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

export async function resetPassword(email: string): Promise<AxiosResponse> {
    const response = await axios.post(`${LibraryParams.hostname}/api/users/reset-password`, { email });
    return response.data;
}

export const getUsers = async (token: string): Promise<UserFeatured[]> => {
    const response = await axios.get(`${LibraryParams.hostname}/api/users`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const deleteUser = async (id: string, token: string): Promise<void> => {
    await axios.delete(`${LibraryParams.hostname}/api/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const updateUserRole = async (user: User, token: string): Promise<void> => {
    await axios.patch(`${LibraryParams.hostname}/api/users/${user.uid}/role`, { role: user.role }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const getUserDetails = async (token: string, params: ApiGetUserDetailsQueryParams): Promise<User> => {
    const response = await axios.get(`${LibraryParams.hostname}/api/users/details`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: { ...params },
    });
    return response.data;
};