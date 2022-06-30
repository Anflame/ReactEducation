export interface Message {
  author: string;
  text: string;
}

export type MessagesStateBot = { id: string } & Message;

export interface AddMessage {
  chatName: string;
  message: Message;
}
