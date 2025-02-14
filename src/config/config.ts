interface InitParams {
    hostname: string;
    graphql_hostname: string;
}

export class LibraryParams {
    static hostname: string;
    static graphql_hostname: string;
    static init({ hostname, graphql_hostname }: InitParams): void {
        this.hostname = hostname;
        this.graphql_hostname = graphql_hostname;
    }
}