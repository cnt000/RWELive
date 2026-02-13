export interface RealtimePort {
  publishToRoom(input: {
    roomId: string;
    eventName: string;
    payload: Record<string, unknown>;
  }): Promise<void>;
}

export interface PersistencePort {
  beginUnitOfWork(): Promise<void>;
  commitUnitOfWork(): Promise<void>;
  rollbackUnitOfWork(): Promise<void>;
}

export interface CachePort {
  get<T>(key: string): Promise<T | null>;
  set<T>(key: string, value: T, ttlSeconds?: number): Promise<void>;
  del(key: string): Promise<void>;
}

export interface BlobStoragePort {
  putObject(input: {
    key: string;
    contentType: string;
    body: ArrayBuffer;
  }): Promise<void>;
}

export interface YouTubeIntegrationPort {
  normalizeIncomingEvent(rawPayload: unknown): Promise<{
    eventType: string;
    correlationId?: string;
    data: Record<string, unknown>;
  }>;
}
