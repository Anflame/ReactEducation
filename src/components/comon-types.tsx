export enum Authors {
  USER = 'Anflame',
  BOT = 'BOT',
}
export interface Message {
  author: string;
  text: string;
}
export interface Messages {
  [key: string]: Message[];
}

export interface Chat {
  id: string;
  name: string;
}
