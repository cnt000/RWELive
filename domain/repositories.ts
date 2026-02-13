import type {
  LiveEvent,
  Membership,
  Message,
  PluginDefinition,
  PluginInstance,
  Question,
  User,
} from "./entities";

export interface UserRepository {
  findById(userId: string): Promise<User | null>;
}

export interface MembershipRepository {
  findByUserAndEvent(input: {
    userId: string;
    eventId: string;
  }): Promise<Membership | null>;
}

export interface LiveEventRepository {
  findById(eventId: string): Promise<LiveEvent | null>;
  save(event: LiveEvent): Promise<void>;
}

export interface MessageRepository {
  save(message: Message): Promise<void>;
}

export interface QuestionRepository {
  save(question: Question): Promise<void>;
}

export interface PluginDefinitionRepository {
  findById(pluginId: string): Promise<PluginDefinition | null>;
}

export interface PluginInstanceRepository {
  findByEventAndPlugin(input: {
    eventId: string;
    pluginId: string;
  }): Promise<PluginInstance | null>;
  save(instance: PluginInstance): Promise<void>;
}

export interface AuditRepository {
  record(entry: {
    actorUserId: string;
    action: string;
    occurredAt: string;
    targetId?: string;
    metadata?: Record<string, unknown>;
  }): Promise<void>;
}
