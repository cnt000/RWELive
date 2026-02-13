import type {
  SendMessageCommandDto,
  SubmitQuestionCommandDto,
  TogglePluginCommandDto,
} from "./dto";

export interface SendMessageUseCase {
  execute(input: SendMessageCommandDto): Promise<{ messageId: string }>;
}

export interface SubmitQuestionUseCase {
  execute(input: SubmitQuestionCommandDto): Promise<{ questionId: string }>;
}

export interface TogglePluginUseCase {
  execute(input: TogglePluginCommandDto): Promise<{ status: "active" | "inactive" }>;
}
