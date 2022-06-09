export interface GetChatDto {
  chatId: string;
  members: Member[];
  messages: Message[];
}

export interface Member {
  id: string;
  name: string;
}

export interface Message {
  content: string;
  messageId: string;
  senderId: string;
  sentAt: string;
}
