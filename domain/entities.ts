import type { EventId, PluginId, RoomId, TimestampIso, UserId } from "../src";

export type UserRole = "viewer" | "moderator" | "host" | "admin";
export type LiveEventStatus = "draft" | "scheduled" | "live" | "ended";
export type MessageModerationStatus = "visible" | "flagged" | "removed";
export type QuestionStatus = "open" | "answered" | "dismissed";
export type PluginStatus = "inactive" | "active";

export interface User {
  id: UserId;
  displayName: string;
  createdAt: TimestampIso;
}

export interface LiveEvent {
  id: EventId;
  ownerUserId: UserId;
  status: LiveEventStatus;
  roomId: RoomId;
}

export interface Membership {
  userId: UserId;
  eventId: EventId;
  role: UserRole;
}

export interface Message {
  id: string;
  eventId: EventId;
  authorUserId: UserId;
  body: string;
  moderationStatus: MessageModerationStatus;
  createdAt: TimestampIso;
}

export interface Question {
  id: string;
  eventId: EventId;
  authorUserId: UserId;
  body: string;
  status: QuestionStatus;
  createdAt: TimestampIso;
}

export interface PluginDefinition {
  id: PluginId;
  name: string;
  version: string;
}

export interface PluginInstance {
  id: string;
  eventId: EventId;
  pluginId: PluginId;
  status: PluginStatus;
  configuredAt: TimestampIso;
}
