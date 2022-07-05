import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import style from './ChatList.module.scss';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from 'src/store/messages/slice';
import { selectChats } from 'src/store/messages/selectors';
import { push, remove, set } from 'firebase/database';
import {
  getChatById,
  getMessageListById,
  messagesRef,
} from 'src/services/firebase';
import { Chats } from '../comon-types';
interface ChatListProps {
  chats: any[];
  messagesDB: any;
}
export const ChatList: FC<ChatListProps> = ({ chats, messagesDB }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  // const chats = useSelector(
  //   selectChats,
  //   (prev, next) => prev.length === next.length
  // );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      set(messagesRef, {
        ...messagesDB,
        [value]: {
          name: value,
        },
      });

      push(getMessageListById(value), {
        text: 'Chat has been created',
        author: 'Admin',
      });

      setValue('');
    }
  };

  const handleDeleteChat = (chatName: string) => {
    remove(getChatById(chatName));
  };

  return (
    <div className={style.chats}>
      <List className={style.chatList}>
        {chats.map((chat) => {
          return (
            <ListItem key={chat.id} className={style.chatListes}>
              <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
              <button onClick={() => handleDeleteChat(chat.id)}>X</button>
            </ListItem>
          );
        })}
      </List>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant="standard"
          id="standard-basic"
          label="Введите название чата"
        />
        <Button type="submit" variant="text">
          Create Chat
        </Button>
      </form>
    </div>
  );
};
