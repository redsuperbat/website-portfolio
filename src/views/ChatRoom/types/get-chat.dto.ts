export interface GetChatDto {
  chatId: string;
  messages: Message[];
  senderName: string;
  senderId: string;
}

export interface Message {
  content: string;
  messageId: string;
  senderId: string;
  sentAt: string;
}
