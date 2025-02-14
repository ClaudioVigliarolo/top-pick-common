export interface Report {
    timestamp: Date;
    id: number;
    question_id: number;
    user_id: string;
    reason: ReportReason;
    questions: {
        title: string;
    };
}
export enum ReportReason {
    Pertinence = "Not Pertinent",
    Language = "Rough Language",
    Other = "Something Else"
}
