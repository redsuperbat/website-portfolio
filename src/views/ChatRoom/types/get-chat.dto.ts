export interface GetChatDto {
  chatId: string;
  messages: Message[];
}

export interface Message {
  content: string;
  messageId: string;
  sender: string;
  sentAt: string;
}
