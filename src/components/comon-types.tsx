export enum Authors {
  USER = 'Anflame',
  BOT = 'BOT',
}
export interface Chats {
  [key: string]: {
    key?: string;
    name: string;
  };
}
