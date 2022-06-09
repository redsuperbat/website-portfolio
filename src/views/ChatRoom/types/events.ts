export interface ChatMessageStartedEvent {
  eventType: 'ChatMessageStartedEvent';
  chatId: string;
  senderId: string;
}

export interface ChatMessageStoppedEvent {
  eventType: 'ChatMessageStoppedEvent';
  chatId: string;
  senderId: string;
}

export interface ChatMessageSentEvent {
  eventType: 'ChatMessageSentEvent';
  chatId: string;
  sentAt: string;
  senderId: string;
  content: string;
  messageId: string;
}

export interface ChatJoinedEvent {
  eventType: 'ChatJoinedEvent';
  chatId: string;
  joinedAt: string;
  name: string;
  senderId: string;
}

export type Event =
  | ChatMessageStartedEvent
  | ChatMessageStoppedEvent
  | ChatMessageSentEvent
  | ChatJoinedEvent;
