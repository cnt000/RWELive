export interface WorkerBindings {
  DB: unknown;
  CACHE: unknown;
  BLOB_STORAGE: unknown;
  LIVE_ROOM_DO: unknown;
}

export interface RequestContext {
  requestId: string;
  receivedAtIso: string;
}
