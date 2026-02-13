export interface AuthenticatedRequest {
  actorUserId: string;
  actorRole: "viewer" | "moderator" | "host" | "admin";
  eventId?: string;
  roomId?: string;
}

export interface RouteResult<TData> {
  ok: boolean;
  data?: TData;
  errorCode?: string;
  errorMessage?: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface InputValidator<TInput> {
  validate(input: unknown): {
    success: boolean;
    value?: TInput;
    errors?: ValidationError[];
  };
}
