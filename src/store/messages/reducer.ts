import { nanoid } from 'nanoid';
import { Reducer } from 'react';
import { Authors } from 'src/components/comon-types';
import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from './actions';
import { MessageActions } from './types';

export interface Message {
  author: string;
  text: string;
}
type MessagesStateBot = { id: string } & Message;
export interface MessagesState {
  [key: string]: MessagesStateBot[];
}
const initialMessage: MessagesState = {
  default: [
    {
      id: '1',
      author: Authors.BOT,
      text: 'Hello friend',
    },
  ],
};

export const messageReducer: Reducer<MessagesState, MessageActions> = (
  state = initialMessage,
  action
) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        [action.newChat]: [],
      };
    }
    case DELETE_CHAT: {
      const chats = { ...state };
      delete chats[action.chatName];
      return chats;
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.chatName]: [
          ...state[action.chatName],
          {
            id: nanoid(),
            author: action.message.author,
            text: action.message.text,
          },
        ],
      };
    }
    default:
      return state;
  }
};
