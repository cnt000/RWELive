export interface DomainEvent<TName extends string, TPayload> {
  name: TName;
  payload: TPayload;
  occurredAt: string;
}

export type MessagePostedEvent = DomainEvent<
  "message.posted",
  {
    eventId: string;
    messageId: string;
    authorUserId: string;
  }
>;

export type QuestionSubmittedEvent = DomainEvent<
  "question.submitted",
  {
    eventId: string;
    questionId: string;
    authorUserId: string;
  }
>;

export type PluginToggledEvent = DomainEvent<
  "plugin.toggled",
  {
    eventId: string;
    pluginId: string;
    status: "active" | "inactive";
  }
>;
