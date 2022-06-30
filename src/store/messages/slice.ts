import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Authors } from 'src/components/comon-types';
import { AddMessage, MessagesStateBot } from './types';

export type MessagesState = Record<string, MessagesStateBot[]>;
const initialState: MessagesState = {
  default: [
    {
      id: '1',
      author: Authors.BOT,
      text: 'Hello friend',
    },
  ],
};

export const messagesSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addChat(state, action: PayloadAction<{ name: string }>) {
      state[action.payload.name] = [];
    },
    deleteChat(state, action: PayloadAction<{ name: string }>) {
      delete state[action.payload.name];
    },
    addMessage(state, action: PayloadAction<AddMessage>) {
      state[action.payload.chatName].push({
        id: nanoid(),
        author: action.payload.message.author,
        text: action.payload.message.text,
      });
    },
  },
});

let timeout: NodeJS.Timeout;
export const addMessageWithReply = createAsyncThunk(
  'messages/addMessageWhithReply',
  async ({ chatName, message }: AddMessage, { dispatch }) => {
    dispatch(addMessage({ chatName, message }));
    if (message.author !== Authors.BOT) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        dispatch(
          addMessage({
            chatName,
            message: {
              author: Authors.BOT,
              text: 'I am BOT',
            },
          })
        );
      }, 1500);
    }
  }
);

export const { addMessage, addChat, deleteChat } = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;
