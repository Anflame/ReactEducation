import { Dispatch } from 'redux';
import { Authors } from 'src/components/comon-types';
import { Message } from './reducer';
import { AddChat, AddMessage, DeleteChat } from './types';

export const ADD_MESSAGE = 'MESSAGE::ADD_MESSAGE';
export const ADD_CHAT = 'MESSAGE::ADD_CHAT';
export const DELETE_CHAT = 'MESSAGE::DELETE_MESSAGE';

export const addChat: AddChat = (newChat) => ({
  type: ADD_CHAT,
  newChat,
});
export const deleteChat: DeleteChat = (chatName) => ({
  type: DELETE_CHAT,
  chatName,
});
export const addMessage: AddMessage = (chatName, message) => ({
  type: ADD_MESSAGE,
  chatName,
  message,
});
let timeout: NodeJS.Timeout;
export const addMessageWithReply =
  (chatName: string, message: Message) => (dispatch: Dispatch) => {
    dispatch(addMessage(chatName, message));

    if (message.author == Authors.USER) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        dispatch(
          addMessage(chatName, {
            author: Authors.BOT,
            text: 'I am BOT',
          })
        );
      }, 1000);
    }
  };
