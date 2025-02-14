interface InitParams {
    hostname: string;
    graphql_hostname: string;
}
export declare class LibraryParams {
    static hostname: string;
    static graphql_hostname: string;
    static init({ hostname, graphql_hostname }: InitParams): void;
}
export {};
