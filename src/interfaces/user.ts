export interface UserCreated {
    username: string;
    password: string;
    email: string;
    country: string;
    firstname: string;
    language: string;
    lastname: string;
    profession: string;
}
export declare enum UserRole {
    Admin = "ADMIN",
    Creator = "CREATOR",
    Default = "DEFAULT",
    NoRole = "NO_ROLE"
}
export interface UserFeatured {
    image: string;
    username: string;
    email: string;
    uid: string;
    role: UserRole;
}
export interface User {
    username: string;
    country?: string;
    firstname?: string;
    lastname?: string;
    profession?: string;
    language?: string;
    image?: string;
    email: string;
    interest_description?: string;
    role: UserRole;
    uid: string;
    facebook_url?: string;
    twitter_url?: string;
    instagram_url?: string;
    youtube_url?: string;
    bio?: string;
    user_interests?: UserInterest[];
    user_languages?: {
        title: string;
    }[];
}
export interface UserProfileInfo {
    username: string;
    country: string;
    firstname: string;
    lastname: string;
    profession: string;
    language: string;
}
export interface UserProfileSocial {
    facebook_url: string;
    twitter_url: string;
    instagram_url: string;
    youtube_url: string;
    bio?: string;
}
export interface UserProfileInterest {
    user_interests: {
        id: number;
    }[];
    user_languages: {
        title: string;
    }[];
    interest_description: string;
}
export interface UserInterest {
    interests: {
        title: string;
        id: number;
    };
}
