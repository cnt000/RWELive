import type { UserRole } from "./entities";

export type Permission =
  | "message.send"
  | "message.moderate"
  | "question.send"
  | "question.moderate"
  | "plugin.toggle"
  | "event.manage"
  | "role.assign";

export interface RbacPolicy {
  hasPermission(input: {
    role: UserRole;
    permission: Permission;
    eventId?: string;
    roomId?: string;
  }): boolean;
}

export interface ModerationPolicy {
  canPostMessage(input: {
    userRole: UserRole;
    messageText: string;
  }): boolean;
}

export interface RateLimitPolicy {
  isWithinLimit(input: {
    userId: string;
    action: "message.send" | "question.send";
    atEpochMs: number;
  }): boolean;
}
