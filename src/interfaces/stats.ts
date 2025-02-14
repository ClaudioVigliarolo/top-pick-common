export declare enum StatAction {
    CategoryCreate = "category create",
    CategoryUpdate = "category update",
    CategoryDelete = "category delete",
    TopicCreate = "topic create",
    TopicUpdate = "topic update",
    TopicDelete = "topic delete",
    QuestionCreate = "question create",
    QuestionUpdate = "question update",
    QuestionDelete = "question delete",
    AnswerCreate = "answer create",
    AnswerUpdate = "answer update",
    AnswerDelete = "answer delete",
    ResourceCreate = "resource create",
    ResourceUpdate = "resource update",
    ResourceDelete = "resource delete"
}
export declare enum StatTopicAction {
    Update = "update",
    View = "view"
}
export interface Stat {
    id: number;
    ref_id: number;
    action: StatAction;
    user_id: number;
    timestamp: Date;
}
