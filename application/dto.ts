export interface ActorContextDto {
  userId: string;
  role: "viewer" | "moderator" | "host" | "admin";
}

export interface SendMessageCommandDto {
  eventId: string;
  roomId: string;
  body: string;
  actor: ActorContextDto;
}

export interface SubmitQuestionCommandDto {
  eventId: string;
  roomId: string;
  body: string;
  actor: ActorContextDto;
}

export interface TogglePluginCommandDto {
  eventId: string;
  pluginId: string;
  enable: boolean;
  actor: ActorContextDto;
}
