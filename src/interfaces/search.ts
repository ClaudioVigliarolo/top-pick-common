export interface SearchResultBase {
    id: number;
    link: string;
    title: string;
    keyword_id: number;
}
export interface SearchResultArticle extends SearchResultBase {
    snippet: string;
    displayed_link: string;
    thumbnail: string;
}
export interface SearchResultVideo extends SearchResultBase {
    duration: string;
    displayed_link: string;
    thumbnail: string;
}
export interface SearchResultImage extends SearchResultBase {
    original: string;
    source: string;
}
export interface SearchResultCreated {
    id: number;
    link: string;
}
export declare enum SearchType {
    Article = "article",
    Video = "video",
    Image = "image"
}
export declare enum SearchKeywordType {
    Automatic = "automatic",
    Manual = "manual",
    News = "news"
}
export interface SearchKeyword {
    id: number;
    query: string;
    title: string;
    active: boolean;
    search_type?: SearchType;
    keyword_type: SearchKeywordType;
}
export interface SearchKeywordCreated {
    query: string;
    title: string;
    topic_id: number;
    active: boolean;
    search_type: SearchType;
    keyword_type: SearchKeywordType;
}
