export type EntityId = string;
export type UserId = EntityId;
export type EventId = EntityId;
export type RoomId = EntityId;
export type PluginId = EntityId;
export type TimestampIso = string;

export interface AuditMetadata {
  actorUserId: UserId;
  occurredAt: TimestampIso;
  correlationId?: string;
}
