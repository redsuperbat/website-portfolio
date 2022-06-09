export interface Message {
  text: string;
  belongsTo: 'sender' | 'receiver';
  senderName: string;
}
